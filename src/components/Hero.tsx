import type { GitHubUser } from '@/types/github';
import { Tag } from './ui/Tag';
import { Button } from './ui/button';
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils';


interface HeroProps {
  user?: GitHubUser | null;
  isLoading?: boolean;
  profile?: Record<string, string>
}

export function Hero({ user, isLoading, profile, filters, handleFilter }: HeroProps) {
  if (isLoading) {
    return (
      <section >
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
    <section className="space-y-6 items-center md:items-start text-center md:text-left">
        {/* Info */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        High Impact <span className='text-primary'>Full Stack Developer</span>
      </h1>
      {user.bio && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          I'm experienced in full stack development, APIs and automations, focused on building scalable and high-impact solutions.
        </p>
      )}
      
      <div className="flex flex-wrap gap-2 ">
        { profile.skills.map(skill => 
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
      <div className="space-x-4">
        <a href="#projects">
          <Button variant="gradient" size="sm"> 
            Current Projects
          </Button>
        </a>
        <a href="#contact">
          <Button variant="secondary" size="sm"> 
            Contact Me
          </Button>
        </a>
      </div>
    </section>
  );
}
