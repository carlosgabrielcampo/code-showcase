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
    <header className="fixed top-0 z-50 backdrop-blur-md bg-background/60 border-b border-border w-full bg-opacity-10">
      <div className="w-full py-4 px-60">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
            <span className="font-mono font-semibold text-lg">
              carlosroman
              <span className="text-primary">.dev</span>
            </span>
          </Link>
        

          <div className="flex items-center gap-6">
            <div onClick={() => {theme === "dark" ? setTheme("light") : setTheme("dark")}}>
              { theme === "dark" ? <Moon /> : <Sun /> }
            </div>
            <div className='font-bold' onClick={() => {theme === "dark" ? setTheme("light") : setTheme("dark")}}>
              { theme === "dark" ? <p>BR</p> : <p>EN</p> }
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
