import { Search, ArrowUpDown, X } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import type { FilterState, SortOption } from '@/types/github';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  languages: string[];
  topics: string[];
  resultCount: number;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'updated', label: 'Recently Updated' },
  { value: 'stars', label: 'Most Stars' },
  { value: 'name', label: 'Name' },
  { value: 'created', label: 'Recently Created' },
];

export function FilterBar({
  filters,
  onFilterChange,
  languages,
  topics,
  resultCount,
}: FilterBarProps) {
  const hasActiveFilters = filters.language || filters.topic || filters.search;

  const clearFilters = () => {
    onFilterChange({ language: null, topic: null, search: '' });
  };

  return (
    <div className="space-y-4 mb-8">
      {/* Search and Sort Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            className={cn(
              'w-full pl-10 pr-4 py-2.5 rounded-lg',
              'bg-secondary border border-border',
              'text-foreground placeholder:text-muted-foreground',
              'font-mono text-sm',
              'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50',
              'transition-all duration-200'
            )}
          />
          {filters.search && (
            <button
              onClick={() => onFilterChange({ search: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <select
            value={filters.sort}
            onChange={(e) => onFilterChange({ sort: e.target.value as SortOption })}
            className={cn(
              'w-full sm:w-48 pl-10 pr-4 py-2.5 rounded-lg appearance-none',
              'bg-secondary border border-border',
              'text-foreground font-mono text-sm',
              'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50',
              'transition-all duration-200 cursor-pointer'
            )}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Language Filters */}
      {languages.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-muted-foreground font-mono mr-2">Languages:</span>
          {languages.slice(0, 8).map((lang) => (
            <Tag
              key={lang}
              variant="outline"
              onClick={() =>
                onFilterChange({ language: filters.language === lang ? null : lang })
              }
              active={filters.language === lang}
              size="sm"
            >
              {lang}
            </Tag>
          ))}
          {languages.length > 8 && (
            <span className="text-xs text-muted-foreground">+{languages.length - 8} more</span>
          )}
        </div>
      )}

      {/* Topic Filters */}
      {topics.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-muted-foreground font-mono mr-2">Topics:</span>
          {topics.slice(0, 10).map((topic) => (
            <Tag
              key={topic}
              variant="outline"
              onClick={() =>
                onFilterChange({ topic: filters.topic === topic ? null : topic })
              }
              active={filters.topic === topic}
              size="sm"
            >
              {topic}
            </Tag>
          ))}
          {topics.length > 10 && (
            <span className="text-xs text-muted-foreground">+{topics.length - 10} more</span>
          )}
        </div>
      )}

      {/* Results Info */}
      <div className="flex items-center justify-between pt-2 border-t border-border/50">
        <p className="text-sm text-muted-foreground font-mono">
          {resultCount} {resultCount === 1 ? 'project' : 'projects'} found
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary hover:text-primary/80 font-mono transition-colors flex items-center gap-1"
          >
            <X className="w-3 h-3" />
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
