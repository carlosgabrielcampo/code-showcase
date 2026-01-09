import { useState, useMemo } from 'react';
import { Hero } from '@/components/Hero';
import { PROFILE_DATA } from '@/config/profile';
import type { FilterState } from '@/types/github';
import Profile from '../components/Profile';
import Projects from './Projects';
import { Footer } from '@/components/Footer';
import { Background } from '@/components/Background';
import { Section } from '@/components/Section';
import { Contact } from '@/components/Contact';

const initialFilters: FilterState = {
  language: [],
  topic: [],
  search: '',
  sort: 'updated',
  order: 'desc',
};

export default function Index() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const profile = PROFILE_DATA;

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
      setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div>
      <Background>
        <main className='px-4 pt-12 sm:px-8 md:px-16 lg:px-32 xl:px-60 pb-12 md:pb-24 space-y-6 items-center md:items-start text-center md:text-left'>
          <Hero profile={profile} filters={filters} handleFilter={handleFilterChange}/>
          <Section id="projects" title="Featured projects" subtitle="Real projects, real decisions, intentional trade-offs" arialabel="projects-heading">
            <Projects filters={filters} handleFilter={handleFilterChange} />
          </Section>
          <Section id="experience" title="Experience" subtitle="Full Stack Developer (4+ years) focused on creating valuable solutions for day to day problems.">
            <Profile profile={profile} filters={filters} handleFilter={handleFilterChange}/>
          </Section>
          <Section id="contact" title="Contact Me" subtitle="Open to collaborating or exchanging ideas on complex software problems. I’m interested in conversations about building end-to-end systems, balancing backend architecture with frontend experience">
            <Contact />
          </Section>
        </main>
        <Footer />
      </Background>
    </div>
  );
}
