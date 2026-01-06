import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft,
  Star,
  GitFork,
  Eye,
  ExternalLink,
  Calendar,
  GitBranch,
  Scale,
} from 'lucide-react';
import { format } from 'date-fns';
import { Header } from '@/components/Header';
import { Tag } from '@/components/ui/Tag';
import { ErrorState } from '@/components/ErrorState';
import {
  useGitHubUser,
  useGitHubRepository,
  useRepositoryLanguages,
  useRepositoryReadme,
} from '@/hooks/useGitHub';
import { getLanguageColor } from '@/config/github';
import { extractFirstSection } from '@/services/github';
import { cn } from '@/lib/utils';

export default function ProjectDetail() {
  const { name } = useParams<{ name: string }>();
  const { data: user } = useGitHubUser();
  const {
    data: repo,
    isLoading,
    error,
    refetch,
  } = useGitHubRepository(name || '');
  const { data: languages } = useRepositoryLanguages(name || '');
  const { data: readme } = useRepositoryReadme(name || '');

  const readmeExcerpt = extractFirstSection(readme || null);

  // Calculate language percentages
  const languagePercentages = languages
    ? Object.entries(languages)
        .map(([lang, bytes]) => ({
          name: lang,
          bytes,
          percentage:
            (bytes / Object.values(languages).reduce((a, b) => a + b, 0)) * 100,
          color: getLanguageColor(lang),
        }))
        .sort((a, b) => b.bytes - a.bytes)
    : [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header user={user} minimal />
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 w-32 bg-secondary rounded" />
            <div className="h-12 w-2/3 bg-secondary rounded" />
            <div className="h-24 w-full bg-secondary rounded" />
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-20 bg-secondary rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !repo) {
    return (
      <div className="min-h-screen bg-background">
        <Header user={user} minimal />
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
          <ErrorState
            title="Project not found"
            message={error instanceof Error ? error.message : 'Could not load project details'}
            onRetry={() => refetch()}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{repo.name} | Developer Portfolio</title>
        <meta
          name="description"
          content={repo.description || `${repo.name} - A project by ${repo.owner.login}`}
        />
        <meta property="og:title" content={`${repo.name} | Developer Portfolio`} />
        <meta property="og:description" content={repo.description || ''} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header user={user} minimal />

        <main className="container max-w-4xl mx-auto px-4 py-12">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>

          {/* Project Header */}
          <header className="mb-12 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
                {repo.name}
              </h1>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg',
                  'bg-primary text-primary-foreground font-mono text-sm',
                  'hover:bg-primary/90 transition-colors',
                  'shadow-lg shadow-primary/20'
                )}
              >
                <ExternalLink className="w-4 h-4" />
                View on GitHub
              </a>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              {repo.description || 'No description provided'}
            </p>

            {/* Topics */}
            {repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {repo.topics.map((topic) => (
                  <Tag key={topic} variant="topic" size="md">
                    {topic}
                  </Tag>
                ))}
              </div>
            )}
          </header>

          {/* Stats Grid */}
          <section
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Star className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold font-mono text-foreground">
                {repo.stargazers_count}
              </p>
              <p className="text-xs text-muted-foreground">Stars</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <GitFork className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold font-mono text-foreground">{repo.forks_count}</p>
              <p className="text-xs text-muted-foreground">Forks</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Eye className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold font-mono text-foreground">
                {repo.watchers_count}
              </p>
              <p className="text-xs text-muted-foreground">Watchers</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <GitBranch className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-lg font-bold font-mono text-foreground truncate">
                {repo.default_branch}
              </p>
              <p className="text-xs text-muted-foreground">Default Branch</p>
            </div>
          </section>

          {/* Languages */}
          {languagePercentages.length > 0 && (
            <section
              className="mb-12 opacity-0 animate-fade-up"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">Languages</h2>
              
              {/* Language Bar */}
              <div className="h-2 rounded-full overflow-hidden flex mb-4">
                {languagePercentages.map((lang, i) => (
                  <div
                    key={lang.name}
                    className="h-full transition-all duration-300"
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                      marginLeft: i > 0 ? '2px' : 0,
                    }}
                    title={`${lang.name}: ${lang.percentage.toFixed(1)}%`}
                  />
                ))}
              </div>

              {/* Language Legend */}
              <div className="flex flex-wrap gap-4">
                {languagePercentages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2 text-sm">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-foreground font-mono">{lang.name}</span>
                    <span className="text-muted-foreground">
                      {lang.percentage.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* README Excerpt */}
          {readmeExcerpt && (
            <section
              className="mb-12 opacity-0 animate-fade-up"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">About</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {readmeExcerpt}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Metadata */}
          <section
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Details</h2>
            <div className="bg-card border border-border rounded-lg divide-y divide-border">
              <div className="flex items-center justify-between p-4">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Created
                </span>
                <span className="font-mono text-foreground">
                  {format(new Date(repo.created_at), 'MMM d, yyyy')}
                </span>
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Last Updated
                </span>
                <span className="font-mono text-foreground">
                  {format(new Date(repo.pushed_at), 'MMM d, yyyy')}
                </span>
              </div>
              {repo.license && (
                <div className="flex items-center justify-between p-4">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Scale className="w-4 h-4" />
                    License
                  </span>
                  <span className="font-mono text-foreground">{repo.license.name}</span>
                </div>
              )}
              {repo.homepage && (
                <div className="flex items-center justify-between p-4">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <ExternalLink className="w-4 h-4" />
                    Website
                  </span>
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-primary hover:underline"
                  >
                    {repo.homepage.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>
          </section>
        </main>

        <footer className="border-t border-border py-8 mt-12">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              Built with{' '}
              <span className="text-primary">React</span> &{' '}
              <span className="text-primary">GitHub API</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
