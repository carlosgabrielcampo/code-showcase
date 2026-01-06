import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FilterBar } from '@/components/FilterBar';
import { ProjectGrid } from '@/components/ProjectGrid';
import { LoadingState } from '@/components/LoadingState';
import { ErrorState } from '@/components/ErrorState';
import {
  useGitHubUser,
  useGitHubRepositories,
  filterRepositories,
  getUniqueLanguages,
  getUniqueTopics,
} from '@/hooks/useGitHub';
import { GITHUB_USERNAME } from '@/config/github';
import type { FilterState } from '@/types/github';

const initialFilters: FilterState = {
  language: null,
  topic: null,
  search: '',
  sort: 'updated',
  order: 'desc',
};

export default function Index() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useGitHubUser();

  const {
    data: repos,
    isLoading: reposLoading,
    error: reposError,
    refetch,
  } = useGitHubRepositories();

  const languages = useMemo(() => (repos ? getUniqueLanguages(repos) : []), [repos]);
  const topics = useMemo(() => (repos ? getUniqueTopics(repos) : []), [repos]);

  const filteredRepos = useMemo(
    () => (repos ? filterRepositories(repos, filters) : []),
    [repos, filters]
  );

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const pageTitle = user?.name || GITHUB_USERNAME;
  const pageDescription = user?.bio || `Developer portfolio showcasing ${user?.public_repos || 'open source'} projects`;

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Developer Portfolio</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={`${pageTitle} | Developer Portfolio`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header user={user} />
        <Hero user={user} isLoading={userLoading} />

        <main className="container max-w-6xl mx-auto px-4 pb-16">
          <section aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">
              Projects
            </h2>

            {reposError ? (
              <ErrorState
                title="Failed to load projects"
                message={reposError instanceof Error ? reposError.message : 'An error occurred'}
                onRetry={() => refetch()}
              />
            ) : reposLoading ? (
              <>
                <div className="h-32 bg-secondary/30 rounded-lg animate-pulse mb-8" />
                <LoadingState />
              </>
            ) : (
              <>
                <FilterBar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  languages={languages}
                  topics={topics}
                  resultCount={filteredRepos.length}
                />
                <ProjectGrid repos={filteredRepos} />
              </>
            )}
          </section>
        </main>

        <footer className="border-t border-border py-8">
          <div className="container max-w-6xl mx-auto px-4 text-center">
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
