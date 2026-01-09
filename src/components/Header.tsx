import { Link } from 'react-router-dom';
import type { GitHubUser } from '@/types/github';
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext';
import { Head } from './Head';
interface HeaderProps {
  children?: React.ReactElement;
}

export function Header({ children }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head />
      <header className="fixed w-full top-0 left-0 right-0 w-[100%] z-[100] border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto py-1 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground">
              <span className="font-mono font-semibold text-md">
                carlosroman<span className="text-primary">.dev</span>
              </span>
            </Link>

            <div className="flex items-center gap-1 sm:gap-6">
              <button
                className='cursor-pointer p-2 min-w-[48px] min-h-[48px] flex items-center justify-center hover:bg-secondary/50 rounded-md transition-colors' 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                { theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" /> }
              </button>
              <div className="font-bold p-2 min-w-[44px] text-center">
                EN
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className='pt-12 md:pt-24'>
        {children}
      </div>
    </>
  );
}
