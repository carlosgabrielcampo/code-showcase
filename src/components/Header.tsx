import { Link } from 'react-router-dom';
import { Github, Terminal } from 'lucide-react';
import { GITHUB_USERNAME } from '@/config/github';
import type { GitHubUser } from '@/types/github';
import { cn } from '@/lib/utils';

interface HeaderProps {
  user?: GitHubUser | null;
  minimal?: boolean;
}

export function Header({ user, minimal = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
          >
            <Terminal className="w-5 h-5 group-hover:animate-pulse" />
            <span className="font-mono font-semibold text-lg">
              {user?.login || GITHUB_USERNAME}
              <span className="text-primary">.dev</span>
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            {!minimal && (
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors"
              >
                Projects
              </Link>
            )}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 rounded-md',
                'text-sm font-mono text-muted-foreground',
                'border border-border hover:border-primary/50',
                'hover:text-foreground transition-all duration-200',
                'hover:shadow-sm hover:shadow-primary/10'
              )}
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
