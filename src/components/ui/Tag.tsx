import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'language' | 'topic' | 'outline' | 'blurred';
  color?: string;
  size?: 'sm' | 'md';
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

export function Tag({
  children,
  variant = 'default',
  color,
  size = 'sm',
  className,
  onClick,
  active = false,
}: TagProps) {
  const baseStyles = cn(
    'inline-flex items-center font-mono transition-all duration-200',
    size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
    'rounded-md',
    onClick && 'cursor-pointer hover:scale-105',
    active && 'ring-1 ring-primary text-primary'
  );

  const variants = {
    default: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-secondary text-secondary-foreground',
    language: 'bg-secondary/80 text-foreground',
    topic: 'bg-muted text-muted-foreground hover:bg-muted/80',
    outline: 'border border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-primary',
    blurred: 'border border-border text-primary hover:border-primary/50 hover:text-primary '
  };

  return (
    <span
      className={cn( variants[variant], baseStyles, className)}
      style={color ? { borderLeft: `3px solid ${color}` } : undefined}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </span>
  );
}
