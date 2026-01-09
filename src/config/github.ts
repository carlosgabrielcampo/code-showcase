// GitHub configuration
// Replace with your GitHub username
export const GITHUB_USERNAME = 'carlosgabrielcampo'; // Change this to your GitHub username

export const GITHUB_API_BASE = 'https://api.github.com';

// Language colors for visual consistency
export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Rust: '#dea584',
  Go: '#00ADD8',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Vue: '#41b883',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Dockerfile: '#384d54',
  SCSS: "#cc6699"
};

export const getLanguageColor = (language: string | null): string => {
  if (!language) return '#6e7681';
  return LANGUAGE_COLORS[language] || '#6e7681';
};
