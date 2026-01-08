import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PROFILE_DATA } from '@/config/profile';
import { useGitHubUser } from '@/hooks/useGitHub';
import type { FilterState } from '@/types/github';
import Profile from '../components/Profile';
import Projects from './Projects';
import { Footer } from '@/components/Footer';
import { Head } from '@/components/Head';
import { Background } from '@/components/Background';
import { SectionTitle } from '@/components/SectionTitle';
import { Section } from '@/components/Section';
import { Contact } from '@/components/Contact';

const initialFilters: FilterState = {
  language: null,
  topic: null,
  search: '',
  sort: 'updated',
  order: 'desc',
};

export default function Index() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const profile = PROFILE_DATA;
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useGitHubUser();


  return (
    <div>
      <Head />
      <Background>
        <Header user={user} />
        <main className='px-60'>
          <Hero user={user} isLoading={userLoading} profile={profile}/>
          <Section title="Featured projects" subtitle="Real work, real decisions. Case studies focus on tradeoffs and outcomes." arialabel="projects-heading">
            <Projects filters={filters} setFilters={setFilters} />
          </Section>
          <Section title="Experience" subtitle="Full Stack Developer (4+ years) focused on creating valuable solutions for day to day problems.">
            <Profile profile={profile}/>
          </Section>
          <Section title="Get In Contact" subtitle="Open to collaborating or exchanging ideas on complex software problems. I’m interested in conversations about building end-to-end systems, balancing backend architecture with frontend experience">
            <Contact />
          </Section>
        </main>
        <Footer />
      </Background>
    </div>
  );
}
