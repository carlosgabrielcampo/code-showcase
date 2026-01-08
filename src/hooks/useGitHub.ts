import { useQuery } from '@tanstack/react-query';
import {
  fetchUser,
  fetchRepositories,
  fetchRepository,
  fetchRepositoryLanguages,
  fetchRepositoryReadme,
} from '@/services/github';
import type { GitHubRepository, FilterState, SortOption, SortOrder } from '@/types/github';

export function useGitHubUser(username?: string) {
  return useQuery({
    queryKey: ['github-user', username],
    queryFn: () => fetchUser(username),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

export function useGitHubRepositories(username?: string) {
  return useQuery({
    queryKey: ['github-repos', username],
    queryFn: () => fetchRepositories(username),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useGitHubRepository(repoName: string, username?: string) {
  return useQuery({
    queryKey: ['github-repo', username, repoName],
    queryFn: () => fetchRepository(repoName, username),
    staleTime: 1000 * 60 * 5,
    enabled: !!repoName,
  });
}

export function useRepositoryLanguages(repoName: string, username?: string) {
  return useQuery({
    queryKey: ['github-repo-languages', username, repoName],
    queryFn: () => fetchRepositoryLanguages(repoName, username),
    staleTime: 1000 * 60 * 10,
    enabled: !!repoName,
  });
}

export function useRepositoryReadme(repoName: string, username?: string) {
  return useQuery({
    queryKey: ['github-repo-readme', username, repoName],
    queryFn: () => fetchRepositoryReadme(repoName, username),
    staleTime: 1000 * 60 * 10,
    enabled: !!repoName,
  });
}

export function filterRepositories(
  repos: GitHubRepository[],
  filters: FilterState
): GitHubRepository[] {
  let filtered = [...repos];

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      repo =>
        repo.name.toLowerCase().includes(searchLower) ||
        repo.description?.toLowerCase().includes(searchLower) ||
        repo.topics.some(topic => topic.toLowerCase().includes(searchLower))
    );
  }

  if (filters.topic.length) {
    filtered = filtered.filter(repo => 
      repo.topics.some(t => filters.topic?.includes(t.toLowerCase())) 
      || filters.topic?.includes(repo.language?.toLowerCase())
    )
  }

  return sortRepositories(filtered, filters.sort, filters.order);
}

export function sortRepositories(
  repos: GitHubRepository[],
  sort: SortOption,
  order: SortOrder
): GitHubRepository[] {
  const sorted = [...repos].sort((a, b) => {
    switch (sort) {
      case 'stars':
        return b.stargazers_count - a.stargazers_count;
      case 'updated':
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
      case 'name':
        return a.name.localeCompare(b.name);
      case 'created':
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      default:
        return 0;
    }
  });

  return order === 'asc' ? sorted.reverse() : sorted;
}

export function getUniqueLanguages(repos: GitHubRepository[]): string[] {
  const languages = repos
    .map(repo => repo.language)
    .filter((lang): lang is string => lang !== null);
  return [...new Set(languages)].sort();
}

export function getUniqueTopics(repos: GitHubRepository[]): string[] {
  const topics = repos.flatMap(repo => repo.topics);
  return [...new Set(topics)].sort();
}
