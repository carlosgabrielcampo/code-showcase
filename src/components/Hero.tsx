import type { GitHubUser, FilterState } from '@/types/github';
import type { ProfileData } from '@/types/profile';
import { Tag } from './ui/Tag';
import { Button } from './ui/button';

interface HeroProps {
  user?: GitHubUser | null;
  isLoading?: boolean;
  profile: ProfileData;
  filters: FilterState;
  handleFilter: (newFilters: Partial<FilterState>) => void;
}

export function Hero({ profile, filters, handleFilter }: HeroProps) {
  return (
    <section className="space-y-6 items-center md:items-start text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        High Impact <span className='text-primary'>Full Stack Developer</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        I'm experienced in full stack development, APIs and automations, focused on building scalable and high-impact solutions.
      </p>
      
      <div className="flex flex-wrap gap-2 justify-center sm:justify-center md:justify-start lg:justify-start">
        { profile?.skills?.map(skill => 
          <Tag
            key={skill}
            variant="blurred"
            className='cursor-pointer font-bold'
            onClick={() =>{
              handleFilter({
                topic: filters.topic.includes(skill.toLowerCase()) 
                  ? filters.topic.filter((e) => e.toLowerCase() !== skill.toLowerCase())
                  : [skill.toLowerCase(), ...filters.topic]
                })
            }}
            active={filters.topic.includes(skill.toLowerCase())}
            size="sm"
          >
            {skill}
          </Tag>
      )}
      </div>
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        <a href="#projects">
          <Button variant="gradient" size="sm" className="min-h-[44px]"> 
            Current Projects
          </Button>
        </a>
        <a href="#contact">
          <Button variant="secondary" size="sm" className="min-h-[44px]"> 
            Contact Me
          </Button>
        </a>
      </div>
    </section>
  );
}
