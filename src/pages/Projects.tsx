import { useMemo } from "react";
import {
  filterRepositories,
  getUniqueLanguages,
  getUniqueTopics,
  useGitHubRepositories,
} from '@/hooks/useGitHub';
import { ErrorState } from "@/components/ErrorState";
import { LoadingState } from "@/components/LoadingState";
import { FilterBar } from "@/components/FilterBar";
import { ProjectGrid } from "@/components/ProjectGrid";
import { FilterState } from "@/types/github";

export default function Projects({ filters, handleFilter }: { filters: string[], handleFilter: string }) {
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

    return (
        <>
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
                    onFilterChange={handleFilter}
                    skills={topics}
                    resultCount={filteredRepos.length}
                />
                <ProjectGrid repos={filteredRepos} />
            </>
            )}
        </>
    )
}