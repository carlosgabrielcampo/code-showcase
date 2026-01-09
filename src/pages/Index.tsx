import Projects from './Projects';
import { Hero } from '@/components/Hero';
import { useState } from 'react';
import Profile from '../components/Profile';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Contact } from '@/components/Contact';
import type { FilterState } from '@/types/github';
import { Background } from '@/components/Background';
import { PAGE_DATA } from '@/config/lan/en_US';
import { useLanguage } from '@/context/LanguageContext';
const initialFilters: FilterState = {
  language: [],
  topic: [],
  search: '',
  sort: 'updated',
  order: 'desc',
};

export default function Index() {
  const { page_text } = useLanguage()
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const { sections: { projects, experience, contact } } = page_text
  const handleFilterChange = (newFilters: Partial<FilterState>) => setFilters((prev) => ({ ...prev, ...newFilters }));
  return (
      <Background>
        <main className='px-4 pt-12 sm:px-8 md:px-16 lg:px-32 xl:px-60 pb-12 md:pb-24 space-y-6 items-center md:items-start text-center md:text-left '>
          <Hero page_text={page_text} filters={filters} handleFilter={handleFilterChange}/>
          <Section id="projects" title={projects.title} subtitle={projects.sub}>
            <Projects page_text={page_text} filters={filters} handleFilter={handleFilterChange} />
          </Section>
          <Section id="experience" title={experience.title} subtitle={experience.sub}>
            <Profile page_text={page_text} filters={filters} handleFilter={handleFilterChange}/>
          </Section>
          <Section id="contact" title={contact.title} subtitle={contact.sub}>
            <Contact page_text={page_text} />
          </Section>
        </main>
        <Footer page_text={page_text}/>
      </Background>
  );
}
