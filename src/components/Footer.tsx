import { Link } from 'react-router-dom';

export function Footer({page_text}) {
  console.log(page_text.footer)
    return (
        <footer className="border-t border-border py-8 md:py-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              @ 2025 Carlos Roman
            </p>
            <Link
              to={"https://github.com/carlosgabrielcampo"}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary active:text-primary font-mono transition-colors p-2"
            >
              {page_text.footer.text_right}
            </Link>
          </div>
        </footer>
    )
}