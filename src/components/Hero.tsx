import type { GitHubUser, FilterState } from '@/types/github';
import type { ProfileData } from '@/types/profile';
import { Tag } from './ui/Tag';
import { Button } from './ui/button';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
  user?: GitHubUser | null;
  isLoading?: boolean;
  filters: FilterState;
  handleFilter: (newFilters: Partial<FilterState>) => void;
  page_text: any;
}

export function Hero({ page_text, filters, handleFilter }: HeroProps) {
  const {language} = useLanguage()
  const { hero } = page_text
  const heroTitle = [hero.title, <span className='text-primary'> {hero.position}</span>]
  return (
    <section className="space-y-6 items-center md:items-start text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        { language === "pt_BR" ? heroTitle.reverse() : heroTitle }
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        {hero.description}
      </p>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-center md:justify-start lg:justify-start">
        { hero?.skills?.map(skill => 
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
            {hero.project_button}
          </Button>
        </a>
        <a href="#contact">
          <Button variant="secondary" size="sm" className="min-h-[44px]"> 
            {hero.contact_button}
          </Button>
        </a>
      </div>
    </section>
  );
}
