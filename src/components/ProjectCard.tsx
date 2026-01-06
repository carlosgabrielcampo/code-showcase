import { Link } from 'react-router-dom';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { getLanguageColor } from '@/config/github';
import type { GitHubRepository } from '@/types/github';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

interface ProjectCardProps {
  repo: GitHubRepository;
  index?: number;
}

export function ProjectCard({ repo, index = 0 }: ProjectCardProps) {
  const languageColor = getLanguageColor(repo.language);
  const updatedAgo = formatDistanceToNow(new Date(repo.pushed_at), { addSuffix: true });

  return (
    <article
      className={cn(
        'group relative flex flex-col h-full',
        'bg-card border border-border rounded-lg',
        'transition-all duration-300 ease-out',
        'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
        'hover:-translate-y-1',
        'opacity-0 animate-fade-up'
      )}
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <Link
        to={`/projects/${repo.name}`}
        className="flex flex-col h-full p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
      >
        {/* Header */}
        <header className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {repo.name}
          </h3>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-1.5 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${repo.name} on GitHub`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </header>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
          {repo.description || 'No description provided'}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.language && (
            <Tag variant="language" color={languageColor}>
              <span
                className="w-2 h-2 rounded-full mr-1.5"
                style={{ backgroundColor: languageColor }}
              />
              {repo.language}
            </Tag>
          )}
          {repo.topics.slice(0, 3).map((topic) => (
            <Tag key={topic} variant="topic">
              {topic}
            </Tag>
          ))}
          {repo.topics.length > 3 && (
            <Tag variant="outline">+{repo.topics.length - 3}</Tag>
          )}
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between pt-3 border-t border-border/50 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <Star className="w-3.5 h-3.5" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <GitFork className="w-3.5 h-3.5" />
              {repo.forks_count}
            </span>
          </div>
          <time dateTime={repo.pushed_at} className="font-mono">
            {updatedAgo}
          </time>
        </footer>
      </Link>
    </article>
  );
}
