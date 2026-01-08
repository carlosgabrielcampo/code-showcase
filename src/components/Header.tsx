import { Link } from 'react-router-dom';
import type { GitHubUser } from '@/types/github';
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext';
interface HeaderProps {
  user?: GitHubUser | null;
  minimal?: boolean;
}

export function Header({ }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-md pointer-events-none" />
      <div className="relative w-full py-0.5 sm:py-1 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <span className="font-mono font-semibold">
              carlosroman<span className="text-primary">.dev</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-6">
            <button
              className='cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-secondary/50 rounded-md transition-colors' 
              onClick={() => {theme === "dark" ? setTheme("light") : setTheme("dark")}}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
            { theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" /> }
            </button>
            <div className="font-bold p-2">
              EN
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
