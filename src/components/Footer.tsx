import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="border-t border-border py-10">
          <div className="flex justify-between mx-auto px-4 text-center px-60">
            <p className="text-sm text-muted-foreground font-mono">
              @ 2025 Carlos Roman
            </p>
            <Link
              to={"https://github.com/carlosgabrielcampo"}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary font-mono transition-colors"
            >
              View source on GitHub
            </Link>
          </div>
        </footer>
    )
}