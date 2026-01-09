import { Link } from 'react-router-dom';
import { getLanguageColor } from '@/config/github';
import type { GitHubRepository } from '@/types/github';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardGradient } from './ui/card';
import { Button } from './ui/button';
import { Tag } from './ui/Tag';
import { PROFILE_CASES } from '@/config/cases';
interface ProjectCardProps {
  repo: GitHubRepository;
  index?: number;
}

export function ProjectCard({ repo, index = 0 }: ProjectCardProps) {
  const updatedAgo = formatDistanceToNow(new Date(repo.pushed_at), { addSuffix: true });
  const languagePercentages = repo.languagePercentage
    ? Object.entries(repo.languagePercentage)
        .map(([lang, bytes]) => ({
          name: lang,
          bytes,
          percentage:
            (bytes / Object.values(repo.languagePercentage).reduce((a, b) => a + b, 0)) * 100,
          color: getLanguageColor(lang),
        }))
        .sort((a, b) => b.bytes - a.bytes)
    : [];

  return (
    <Card >
      <CardContent className="p-0" style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}>
        <div className="flex flex-col h-full p-5 ">
          <Link 
            // to={
            //   PROFILE_CASES[repo.name] 
            //     ? `/projects/${repo.name}` 
            //     : repo.html_url 
            //       ? repo.html_url
            //       : repo.homepage
            // } 
            className='flex flex-col h-full '
          >
          <header className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-mono font-semibold text-foreground transition-colors truncate">
              {repo.name}
            </h3>
          </header>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
            {repo.description || 'No description provided'}
          </p>
              {
                languagePercentages.length > 0 && 
                <div className='mb-4'>
                    <div className="h-1 rounded-full overflow-hidden flex mb-4">
                      {languagePercentages.map((lang, i) => (
                        <div
                        key={lang.name}
                        className="h-full transition-all duration-300"
                        style={{
                          width:`${lang.percentage}%`,
                          backgroundColor: lang.color,
                          marginLeft: i > 0 ? '2px' : 0,
                        }}
                        title={`${lang.name}`}
                        />
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1 items-center justify-center">
                      {languagePercentages.map((lang) => (
                        <Tag
                          key={lang.name}
                          variant="outline"
                        >
                          <div key={lang.name} className="flex items-center gap-1 text-xs">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: lang.color }}
                              />
                            <span className="text-foreground font-mono">{lang.name}</span>
                            <span className="text-muted-foreground">
                            </span>
                          </div>
                        </Tag>
                      ))}
                    </div>
                  </div>
              }
          </Link>

          <footer className="flex items-center justify-center gap-3 pt-3 border-t border-border/50 text-xs text-muted-foreground">
            {repo.html_url && 
              <Link
                to={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant='secondary'
                  size='sm'
                >
                  Code
                </Button>
              </Link>
            }
            {
            PROFILE_CASES[repo.name] && 
              <Link
                // to={`/projects/${repo.name}`}
              >
                <Button variant='secondary' size='sm'>
                  Case
                </Button>
              </Link>
            }
            { repo.homepage && 
              <Link
                to={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant='secondary'
                  size='sm'
                >
                  Live
                </Button>
              </Link>
            }
          </footer>
        </div>
      </CardContent>
    </Card>
  );
}
