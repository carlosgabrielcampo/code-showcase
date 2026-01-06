import { ProfileData } from '@/types/profile';

// =============================================================================
// PROFILE CONFIGURATION
// =============================================================================
// This is your professional profile data.
// Since LinkedIn API access is restricted, this local config serves as the
// source of truth for extended profile sections.
// 
// Update this file with your actual professional information.
// =============================================================================

export const PROFILE_DATA: ProfileData = {
  identity: {
    name: 'Carlos Campo',
    headline: 'Software Developer | Full Stack Engineer',
    avatarUrl: '', // Will fallback to GitHub avatar if empty
    linkedInUrl: 'https://linkedin.com/in/your-profile', // Replace with your LinkedIn URL
    email: 'carlos@example.com',
    location: 'San Francisco, CA',
  },

  about: `Passionate software developer with expertise in building modern web applications. 
I specialize in React, TypeScript, and cloud technologies. I love creating elegant solutions 
to complex problems and contributing to open-source projects.

Currently focused on full-stack development with a keen interest in developer experience 
and software architecture.`,

  experience: [
    {
      id: 'exp-1',
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      companyUrl: 'https://example.com',
      location: 'San Francisco, CA',
      startDate: '2022-01',
      description: `Leading development of customer-facing applications using React and TypeScript.
• Architected and implemented scalable microservices
• Mentored junior developers and conducted code reviews
• Reduced application load time by 40% through optimization`,
      skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    },
    {
      id: 'exp-2',
      title: 'Software Developer',
      company: 'Startup Inc',
      location: 'Remote',
      startDate: '2020-03',
      endDate: '2021-12',
      description: `Full-stack development for SaaS platform serving 10,000+ users.
• Built real-time collaboration features using WebSockets
• Implemented CI/CD pipelines with GitHub Actions
• Developed RESTful APIs with comprehensive documentation`,
      skills: ['JavaScript', 'Python', 'PostgreSQL', 'Docker'],
    },
  ],

  education: [
    {
      id: 'edu-1',
      school: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startYear: 2016,
      endYear: 2020,
      description: 'Focused on software engineering and distributed systems.',
    },
  ],

  skills: [
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git',
    'REST APIs',
    'GraphQL',
    'Tailwind CSS',
    'Next.js',
  ],

  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      issueDate: '2023-06',
      credentialUrl: 'https://aws.amazon.com/certification/',
    },
  ],
};
