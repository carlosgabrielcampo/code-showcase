import { Experience } from '@/types/profile';

const PROFILE_DATA: Experience[] = [
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
      skills: ['Javascript', 'Nodejs', 'React', 'Typescript', 'Python'],
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
      skills: ['Javascript', 'Nodejs', 'React', 'MongoDB', 'PostgresSQL', 'Puppeteer'],
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
      skills: ['Javascript', 'Nodejs', 'React', 'MongoDB', 'PostgresSQL', 'Puppeteer'],
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
      skills: ['Nodejs', 'React', 'MongoDB', 'PostgresSQL', 'Javascript'],
      logoPath: '/peg_logo.jpg',
    },
]

export const PAGE_DATA = {
    hero: {
        title: "High Impact",
        position: "Full Stack Developer",
        description: "I'm experienced in full stack development, APIs and automations, focused on building scalable and high-impact solutions.",
        project_button: "Current Projects",
        contact_button: "Contact Me",
        skills: [ 'React', 'Nodejs', 'MongoDB', 'Puppeteer', 'REST-API', 'Typescript', 'Tailwind' ],
    },
    sections: {
        projects: {
            title: "Featured projects",
            sub: "Real projects, real decisions, intentional trade-offs",
            placeholder: "Search...",
            filter: "Filters",
            dropdown: [
                { value: 'updated', label: 'Recently Updated' },
                { value: 'stars', label: 'Most Stars' },
                { value: 'name', label: 'Name' },
                { value: 'created', label: 'Recently Created' }
            ],
            result: {
                single: "project",
                multiple: "projects",
                find: "found"
            },
            retry: "Try adjusting your filters or search terms to find what you're looking for.",
            clear: "Clear filters"
        },
        experience: {
            title: "Experience",
            sub: "Full Stack Developer (4+ years) focused on creating valuable solutions for day to day problems.",
            experiences: PROFILE_DATA
        },
        contact: {
            title: "Contact Me",
            sub: "Open to collaborating or exchanging ideas on complex software problems. I’m interested in conversations about building end-to-end systems, balancing backend architecture with frontend experience",
            container_1: {
                title: "For interviews, technical exercises, or aligning new deliveries.",
                email_button: "Send Email", 
                linkedIn: "https://www.linkedin.com/in/carlosgcampo/?locale=en_US"
              },
            email: "carlosgabrielcampo@gmail.com",
            email_subject: "Let's get in contact",
            container_2: {
                intro: "What I'm great at",
                title: "Building reliable systems for real business problems",
                sub: "Comfortable working independently or aligning with teams during interviews, technical challenges, or early project definition.",
                description: [
                  "Full Stack architecture, APIs and integrations",
                  "Automation flows, complex business logic and edge cases",
                  "Databases, performance considerations and pragmatic refactors"
                ],
                resume_link: "https://docs.google.com/document/d/1gs2qe2-4vzrr2CHzCRg2Pdwq-c3VeH0GeTQC0pfFu0A/edit?usp=sharing",
                resume_button: "Resume",
                project_button: "Current Projects",
            }
        }
    },
    footer: {
      text_right: "View source on GitHub"
    },
    util: {
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        now: 'Present'
    }
}

