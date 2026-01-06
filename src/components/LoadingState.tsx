import { cn } from '@/lib/utils';

interface LoadingStateProps {
  count?: number;
}

export function LoadingState({ count = 6 }: LoadingStateProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'bg-card border border-border rounded-lg p-5',
            'animate-pulse'
          )}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="h-5 w-32 bg-secondary rounded" />
            <div className="h-5 w-5 bg-secondary rounded" />
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-4 w-full bg-secondary rounded" />
            <div className="h-4 w-2/3 bg-secondary rounded" />
          </div>
          <div className="flex gap-2 mb-4">
            <div className="h-6 w-20 bg-secondary rounded" />
            <div className="h-6 w-16 bg-secondary rounded" />
            <div className="h-6 w-14 bg-secondary rounded" />
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div className="flex gap-4">
              <div className="h-4 w-12 bg-secondary rounded" />
              <div className="h-4 w-12 bg-secondary rounded" />
            </div>
            <div className="h-4 w-20 bg-secondary rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
