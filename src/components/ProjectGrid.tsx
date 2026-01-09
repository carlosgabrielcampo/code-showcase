import { ProjectCard } from './ProjectCard';
import type { GitHubRepository } from '@/types/github';

interface ProjectGridProps {
  repos: GitHubRepository[];
}

export function ProjectGrid({ repos, project_text }: ProjectGridProps) {
  if (repos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-[100px] text-center">
        <p className="text-sm text-muted-foreground max-w-sm">
          { project_text.retry }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {repos.map((repo, index) => <ProjectCard key={repo.id} repo={repo} index={index} /> )}
    </div>
  );
}
