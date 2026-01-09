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
import { GITHUB_PROJECTS } from "@/config/projects";


export default function Projects({ page_text, filters, handleFilter }: { page_text: any, filters: FilterState, handleFilter: (newFilters: Partial<FilterState>) => void }) {
    // const {
    //     data: repos,
    //     isLoading: reposLoading,
    //     error: reposError,
    //     refetch,
    // } = useGitHubRepositories();
    const repos = GITHUB_PROJECTS
    const topics = useMemo(() => (GITHUB_PROJECTS ? getUniqueTopics(GITHUB_PROJECTS) : GITHUB_PROJECTS), [repos]);    
    const filteredRepos = useMemo(
        () => (repos ? filterRepositories(repos, filters) : []),
        [repos, filters]
    );
    
    return (
        <>
            {/* {reposError ? (
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
            ) : ( */}
            <>
                <FilterBar
                    filters={filters}
                    onFilterChange={handleFilter}
                    skills={topics}
                    resultCount={filteredRepos.length}
                    project_text={page_text.sections.projects}
                />
                <ProjectGrid repos={filteredRepos} project_text={page_text.sections.projects} />
            </>
            {/* )} */}
        </>
    )
}