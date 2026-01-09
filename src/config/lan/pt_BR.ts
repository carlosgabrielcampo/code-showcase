import { Experience } from '@/types/profile';

const PROFILE_DATA: Experience[] = [
  {
    id: 'exp-1',
    title: 'Desenvolvedor Full Stack',
    company: 'BR+ Promotora',
    companyUrl: 'https://www.brmaispromotora.com.br/',
    location: 'Florianópolis, Brasil (Presencial)',
    startDate: '2025-01',
    endDate: '2025-11',
    description: [
      'Criei automações de aquisição de clientes utilizando APIs bancárias, permitindo a identificação de mais de 5.000 leads elegíveis para contratos.',
      'Implementei fluxos de automação via WhatsApp que permitem aos clientes assinarem contratos diretamente pelo aplicativo — aproximadamente 25% dos clientes concluíram contratos de forma autônoma.',
      'Projetei e gerenciei bancos de dados PostgreSQL e MongoDB para compor análises de funil de vendas, capacitando o time comercial a identificar campanhas e canais de maior impacto.',
      'Assumi todo o ciclo de vida do produto — desde backend, automações e integrações financeiras sensíveis até frontend e deploy — atuando de forma autônoma e colaborando com múltiplos departamentos.',
      'Demonstrei forte adaptabilidade, autonomia, desempenho sob pressão e comunicação clara com stakeholders, garantindo entregas confiáveis mesmo sob prazos apertados.'
    ],
    skills: ['Javascript', 'Node.js', 'React', 'Typescript', 'Python'],
    logoPath: '/BR+_logo.avif',
  },
  {
    id: 'exp-2',
    title: 'Desenvolvedor Full Stack',
    company: 'VMD Crédito',
    companyUrl: 'https://www.vmdcredito.com.br/',
    location: 'São José, Brasil (Presencial)',
    startDate: '2024-04',
    endDate: '2025-11',
    description: [
      'Projetei e implementei bots baseados em Node.js, automatizando processos repetitivos para aumentar a eficiência dos fluxos de trabalho.',
      'Desenvolvi ferramentas internas utilizando Node.js e Puppeteer.js para automação de web scraping, fornecendo dados e insights relevantes para tomadas de decisão.',
      'Criei diversas APIs para troca de dados entre nossos softwares e instituições financeiras.',
      'Desenvolvi bancos de dados utilizando MongoDB e Mongoose, integrando-os a todas as nossas aplicações.'
    ],
    skills: ['Javascript', 'Node.js', 'React', 'MongoDB', 'PostgresSQL', 'Puppeteer'],
    logoPath: '/vmd_logo.jpeg',
  },
  {
    id: 'exp-3',
    title: 'Professor de Programação',
    company: 'Serviço Nacional de Aprendizagem Industrial',
    companyUrl: 'https://www.vmdcredito.com.br/',
    location: 'Florianópolis, Brasil (Presencial)',
    startDate: '2022-11',
    endDate: '2023-10',
    description: [
      'Planejei e ministrei cursos de JavaScript para alunos iniciantes, com foco em aprendizado prático e aplicação no mundo real.',
      'Ensinei conceitos centrais de desenvolvimento web, incluindo JavaScript (ES6+), HTML5, CSS3, Node.js, manipulação de DOM, módulos, programação assíncrona e ferramentas básicas como Webpack.',
      'Priorizei projetos práticos para ajudar os alunos a transformar conceitos teóricos em soluções funcionais.',
      'Fortaleci habilidades de comunicação técnica ao adaptar explicações para diferentes níveis de aprendizado e perfis.'
    ],
    skills: ['Javascript', 'Node.js', 'React', 'MongoDB', 'PostgresSQL', 'Puppeteer'],
    logoPath: '/senai_logo.jpeg',
  },
  {
    id: 'exp-4',
    title: 'Desenvolvedor Full Stack',
    company: 'PEG DE VOLTA',
    companyUrl: 'https://www.instagram.com/pegdevolta/',
    location: 'São José, Brasil (Presencial)',
    startDate: '2021-11',
    endDate: '2023-09',
    description: [
      'Desenvolvi um chatbot responsável por todo o processo de vendas de serviços financeiros.',
      'O chatbot cobria toda a jornada do cliente, desde a captação inicial até a assinatura final do contrato.',
      'Implementei a biblioteca whatsapp-web.js como componente central do chatbot.',
      'Integrei o chatbot com plataformas bancárias para viabilizar a assinatura de contratos.'
    ],
    skills: ['Node.js', 'React', 'MongoDB', 'PostgresSQL', 'Javascript'],
    logoPath: '/peg_logo.jpg',
  },
]

export const PAGE_DATA = {
  hero: {
    title: 'Alto Impacto',
    position: 'Desenvolvedor Full Stack',
    description:
      'Tenho experiência em desenvolvimento full stack, APIs e automações, com foco na construção de soluções escaláveis e de alto impacto.',
    project_button: 'Projetos Atuais',
    contact_button: 'Entrar em Contato',
    skills: ['React', 'Node.js', 'MongoDB', 'Puppeteer', 'APIs REST', 'Typescript', 'Tailwind'],
  },
  sections: {
    projects: {
      title: 'Projetos em destaque',
      sub: 'Projetos reais, decisões reais e trade-offs intencionais',
      placeholder: 'Buscar...',
      filter: 'Filtros',
      dropdown: [
        { value: 'updated', label: 'Data atualização' },
        { value: 'stars', label: 'Mais estrelas' },
        { value: 'name', label: 'Nome' },
        { value: 'created', label: 'Criados recentemente' }
      ],
      result: {
        single: 'projeto',
        multiple: 'projetos',
        find: 'encontrados'
      },
      retry: "Tente ajustar seus filtros o termos de busca para encontrar o que você está buscando",
      clear: 'Limpar filtros'
    },
    experience: {
      title: 'Experiência',
      sub: 'Desenvolvedor Full Stack (4+ anos) focado na criação de soluções para problemas do dia a dia.',
      experiences: PROFILE_DATA
    },
    contact: {
      title: 'Entre em Contato',
      sub: 'Aberto a colaborações ou troca de ideias sobre problemas complexos de software. Tenho interesse em conversas sobre a construção de sistemas ponta a ponta, equilibrando arquitetura de backend e experiência de frontend.',
      container_1: {
        title: 'Para entrevistas, exercícios técnicos ou alinhamento de novas entregas.',
        email_button: 'Enviar e-mail',
        linkedIn: "https://www.linkedin.com/in/carlosgcampo/?locale=pt_BR"
      },
      email: "carlosgabrielcampo@gmail.com",
      email_subject: "Vamos entrar em contato",
      container_2: {
        intro: 'No que sou bom',
        title: 'Construção de sistemas confiáveis para problemas reais de negócio',
        sub: 'Confortável trabalhando de forma independente ou alinhado com times durante entrevistas, desafios técnicos ou definição inicial de projetos.',
        description: [
          'Arquitetura Full Stack, APIs e integrações',
          'Fluxos de automação, lógica de negócio complexa e casos extremos',
          'Bancos de dados, considerações de performance e refatorações pragmáticas'
        ],
        resume_link: "https://docs.google.com/document/d/1OYwM3b3qW5qVSjxn1y3KmGAQEnGCOsYTLqsIro7M5Lw/edit?usp=sharing",
        resume_button: 'Currículo',
        project_button: 'Projetos Atuais',
      }
    }
  },
  footer: {
    text_right: "Verifique no GitHub"
  },
  util: {
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    now: 'Atual'
  }
}
