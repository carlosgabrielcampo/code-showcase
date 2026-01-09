import { AlertCircle, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'Failed to load data. Please try again.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center pt-10 text-center">
      <div className="w-10 h-10 mb-4 rounded-full flex items-center justify-center">
        <AlertCircle className="w-8 h-8 text-destructive" />
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg',
            'bg-secondary text-foreground font-mono text-sm',
            'border border-border hover:border-primary/50',
            'transition-all duration-200',
            'hover:shadow-sm hover:shadow-primary/10'
          )}
        >
          <RefreshCw className="w-4 h-4" />
          Try again
        </button>
      )}
    </div>
  );
}
