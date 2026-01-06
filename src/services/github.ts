import { GITHUB_API_BASE, GITHUB_USERNAME } from '@/config/github';
import type { GitHubRepository, GitHubUser, GitHubLanguages, GitHubReadme } from '@/types/github';

class GitHubAPIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'GitHubAPIError';
  }
}

const headers: HeadersInit = {
  'Accept': 'application/vnd.github.v3+json',
};

async function fetchGitHub<T>(endpoint: string): Promise<T> {
  const url = `${GITHUB_API_BASE}${endpoint}`;
  
  const response = await fetch(url, { headers });
  
  if (!response.ok) {
    if (response.status === 403) {
      const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
      if (rateLimitRemaining === '0') {
        const resetTime = response.headers.get('X-RateLimit-Reset');
        const resetDate = resetTime ? new Date(parseInt(resetTime) * 1000) : null;
        throw new GitHubAPIError(
          403,
          `Rate limit exceeded. Resets at ${resetDate?.toLocaleTimeString() || 'unknown time'}`
        );
      }
    }
    
    if (response.status === 404) {
      throw new GitHubAPIError(404, 'Resource not found');
    }
    
    throw new GitHubAPIError(response.status, `GitHub API error: ${response.statusText}`);
  }
  
  return response.json();
}

export async function fetchUser(username: string = GITHUB_USERNAME): Promise<GitHubUser> {
  return fetchGitHub<GitHubUser>(`/users/${username}`);
}

export async function fetchRepositories(username: string = GITHUB_USERNAME): Promise<GitHubRepository[]> {
  const repos = await fetchGitHub<GitHubRepository[]>(
    `/users/${username}/repos?per_page=100&sort=updated&type=owner`
  );
  
  // Filter out forks and archived repos by default
  return repos.filter(repo => !repo.fork && !repo.archived);
}

export async function fetchRepository(
  repoName: string,
  username: string = GITHUB_USERNAME
): Promise<GitHubRepository> {
  return fetchGitHub<GitHubRepository>(`/repos/${username}/${repoName}`);
}

export async function fetchRepositoryLanguages(
  repoName: string,
  username: string = GITHUB_USERNAME
): Promise<GitHubLanguages> {
  return fetchGitHub<GitHubLanguages>(`/repos/${username}/${repoName}/languages`);
}

export async function fetchRepositoryReadme(
  repoName: string,
  username: string = GITHUB_USERNAME
): Promise<string | null> {
  try {
    const readme = await fetchGitHub<GitHubReadme>(`/repos/${username}/${repoName}/readme`);
    
    // Decode base64 content
    const content = atob(readme.content.replace(/\n/g, ''));
    return content;
  } catch (error) {
    if (error instanceof GitHubAPIError && error.status === 404) {
      return null;
    }
    throw error;
  }
}

export function extractFirstSection(markdown: string | null): string | null {
  if (!markdown) return null;
  
  // Remove badges and images from the beginning
  const cleanedMarkdown = markdown
    .replace(/^\s*(\[!\[.*?\]\(.*?\)\]\(.*?\)\s*)+/gm, '')
    .replace(/^\s*!\[.*?\]\(.*?\)\s*/gm, '')
    .trim();
  
  // Find the first heading or paragraph
  const lines = cleanedMarkdown.split('\n');
  let content = '';
  let foundContent = false;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip empty lines at the start
    if (!foundContent && !trimmedLine) continue;
    
    // Stop at second heading
    if (foundContent && /^#{1,6}\s/.test(trimmedLine)) break;
    
    // Skip the title (first h1)
    if (!foundContent && /^#\s/.test(trimmedLine)) {
      foundContent = true;
      continue;
    }
    
    foundContent = true;
    content += line + '\n';
    
    // Limit to reasonable length
    if (content.length > 500) break;
  }
  
  return content.trim() || null;
}

export { GitHubAPIError };
