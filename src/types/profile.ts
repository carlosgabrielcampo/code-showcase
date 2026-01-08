// Profile types - reflecting that LinkedIn API only provides basic identity
// Extended data (experience, skills, education) comes from local config

export interface ProfileIdentity {
  name: string;
  headline: string;
  avatarUrl: string;
  linkedInUrl: string;
  email?: string;
  location?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string;
  endDate?: string; // undefined = present
  description: string[];
  skills?: string[];
  logoPath?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  description?: string;
  logoPath?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  logoPath: string;
  credentialCode?: string;
}

export interface ProfileData {
  identity: ProfileIdentity;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  certifications?: Certification[];
}
