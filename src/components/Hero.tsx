import { MapPin, Building, Link as LinkIcon, Mail } from 'lucide-react';
import type { GitHubUser } from '@/types/github';
import { cn } from '@/lib/utils';
import { sendEmail } from '@/services/email';

interface HeroProps {
  user?: GitHubUser | null;
  isLoading?: boolean;
}

export function Hero({ user, isLoading }: HeroProps) {
  if (isLoading) {
    return (
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 animate-pulse">
            <div className="w-28 h-28 rounded-full bg-secondary" />
            <div className="flex-grow text-center md:text-left">
              <div className="h-10 w-64 bg-secondary rounded-lg mb-4 mx-auto md:mx-0" />
              <div className="h-5 w-96 max-w-full bg-secondary rounded mb-4 mx-auto md:mx-0" />
              <div className="h-4 w-48 bg-secondary rounded mx-auto md:mx-0" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!user) return null;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar - Clickable to Profile */}
          <a href="/profile" className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={user.avatar_url}
              alt={`${user.name || user.login}'s avatar`}
              className={cn(
                'relative w-28 h-28 rounded-full',
                'border-2 border-border',
                'transition-transform duration-300',
                'group-hover:scale-105'
              )}
            />
          </a>

          {/* Info */}
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {user.name || user.login}
            </h1>
            {user.bio && (
              <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
                {user.bio}
              </p>
            )}
            
            {/* Meta info */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
              {user.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                <a onClick={sendEmail} className='cursor-pointer hover:underline'>
                  carlosgabrielcampo@gmail.com
                </a>
              </span>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center md:justify-start gap-6 mt-6 pt-6 border-t border-border/50">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground font-mono">{user.public_repos}</p>
                <p className="text-xs text-muted-foreground">Repositories</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground font-mono">{user.followers}</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground font-mono">{user.following}</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
