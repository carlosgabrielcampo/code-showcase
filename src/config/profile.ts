import { ProfileData } from '@/types/profile';

export const PROFILE_DATA: ProfileData = {
  identity: {
    name: 'Carlos G C Roman',
    headline: 'Full Stack Developer | Node.js, React, APIs & Automations | Fintech Experience | Fluent in English | Open to Remote Roles',
    avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQF_9-s-7xIgEA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667396628858?e=1769040000&v=beta&t=bY62tRMjVxqUxiAw24QUPP0kH0a4GcAEh949tW-GNBo', // Will fallback to GitHub avatar if empty
    linkedInUrl: 'https://www.linkedin.com/in/carlosgcampo/?locale=en_US',
  },

  about: `👋 I’m a Full Stack Developer with 3+ years of experience building complete solutions — from backend to frontend, including API integrations and process automations.

I’ve worked in the financial sector, leading internal automation projects, optimizing data workflows, and helping build the frontend of a new app. My core stack includes JavaScript, Node.js, React, and both relational and non-relational databases, with additional experience in Python and TypeScript.

I’m driven by connecting technology with real-world impact — understanding business logic and delivering scalable, well-structured solutions. Focused, adaptable, and naturally curious, I thrive in collaborative environments.

I’m open to PJ opportunities (remote, hybrid, or on-site) where I can keep growing technically and contribute to meaningful products. 🚀`,

  experience: [
    {
      id: 'exp-1',
      title: 'Full Stack Developer',
      company: 'BR+ Promotora',
      companyUrl: 'https://www.brmaispromotora.com.br/',
      location: 'Florianópolis, Brazil (On-site)',
      startDate: '2025-01',
      endDate: '2025-11',
      description: [
        'Built client-acquisition automations using banking APIs, enabling identification of over 5,000 eligible leads for contracts.',
        'Implemented WhatsApp-based automation flows to enable clients to sign contracts directly via app — approximately 25% of clients completed contracts autonomously.',
        'Designed and managed PostgreSQL and MongoDB databases to assemble sales funnel analytics, empowering the sales team to pinpoint high-impact campaigns and channels.',
        'Owned the full product lifecycle — from backend, automations and sensitive financial integrations to frontend and deployment — working autonomously and collaborating with multiple departments.',
        'Demonstrated strong adaptability, autonomy, pressure performance and clear communication with stakeholders, ensuring reliable delivery even under tight deadlines.'
      ],
      skills: ['Javascript', 'Node.js', 'React', 'Typescript', 'Python'],
      logoPath: '/BR+_logo.avif',
    },
    {
      id: 'exp-2',
      title: 'Full Stack Developer',
      company: 'VMD Crédito',
      companyUrl: 'https://www.vmdcredito.com.br/',
      location: 'São José, Brazil (On-site)',
      startDate: '2024-04',
      endDate: '2025-11',
      description: [
        'I designed and implemented Node.js-based bots, automating repetitive processes to boost workflow efficiency.',
        'Built internal tools using NodeJS and Pupeteer.js to automate web scraping, providing us with valuable data and insights for informed decision-making',
        'I crafted multiple APIs, to exchange data between our softwares and financial intituitions.',
        'I developed databases using MongoDB and Mongoose, to integrate with all of our applications.'
      ],
      skills: ['Javascript', 'Node.js', 'React', 'MongoDB', 'PostgresSQL', 'Puppeteer'],
      logoPath: '/vmd_logo.jpeg',
    },
    {
      id: 'exp-3',
      title: 'Programming teacher',
      company: 'Serviço Nacional de Aprendizagem Industrial',
      companyUrl: 'https://www.vmdcredito.com.br/',
      location: 'Florianópolis, Brazil (On-site)',
      startDate: '2022-11',
      endDate: '2023-10',
      description: [
        'Designed and delivered JavaScript courses for beginner-level students, focusing on practical learning and real-world application.',
'Taught core web development concepts including JavaScript (ES6+), HTML5, CSS3, Node.js, DOM manipulation, modules, asynchronous programming, and basic tooling such as Webpack.',
'Emphasized hands-on projects to help students translate theoretical concepts into working solutions.',
'Strengthened technical communication skills by adapting explanations to different learning levels and backgrounds.'
      ],
      skills: ['Javascript', 'Node.js', 'React', 'MongoDB', 'PostgresSQL', 'Puppeteer'],
      logoPath: '/senai_logo.jpeg',
    },
    {
      id: 'exp-4',
      title: 'Full Stack Developer',
      company: 'PEG DE VOLTA',
      companyUrl: 'https://www.instagram.com/pegdevolta/',
      location: 'São José, Brazil (On-site)',
      startDate: '2021-11',
      endDate: '2023-09',
      description: [
        'Developed a chatbot that handled the entire sales process for financial services.',
        'The chatbot covered the customer journey from initial attraction to the final contract signing.',
        'Implemented the whatsapp-web.js library as a key component of the chatbot.',
        'Integrated the chatbot with banking platforms to facilitate contract signing.'
      ],
      skills: ['Node.js', 'React', 'MongoDB', 'PostgresSQL', 'Javascript'],
      logoPath: '/peg_logo.jpg',
    },
  ],

  education: [
    {
      id: 'edu-1',
      school: 'Trybe',
      degree: 'Web FullStack Developer',
      field: 'Software Development',
      startYear: 2021,
      endYear: 2022,
      description: 'Trybe is a web development school that has a genuine commitment to the professional success of its students. With the Shared Success Model, those who study at Trybe have the option of paying only when they are already working.There are more than 1500 hours of training that covers fundamentals of web development, development, Front-end, Back-end, computer science, software engineering, agile methodologies and soft skills.',
      logoPath: '/betrybe_logo.jpeg',
    },
  ],

  skills: [ 'React', 'Node.js', 'MongoDB', 'Puppeteer', 'REST APIs', 'Typescript', 'Tailwind CSS' ],

  certifications: [
    {
      id: 'cert-1',
      name: 'Desenvolvimento Web',
      issuer: 'Trybe',
      issueDate: '2022-04',
      credentialUrl: 'https://www.credential.net/dc77cae1-8e88-4b8a-a5da-8e103d343450#acc.iRmQlrVM',
      logoPath: '/betrybe_logo.jpeg',
      credentialCode: '50485837'
    },
    {
      id: 'cert-2',
      name: 'IELTS (Band 8)',
      issuer: 'IELTS Official',
      issueDate: '2022-04',
      credentialUrl: 'https://www.credential.net/dc77cae1-8e88-4b8a-a5da-8e103d343450#acc.iRmQlrVM',
      logoPath: '/ielts_logo.jpeg',
      credentialCode: '23AU509850CAMC240A'
    },
  ],
};

