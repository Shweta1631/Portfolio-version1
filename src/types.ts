export interface AcademicMetric {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
  highlight?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  badge: string;
  period: string;
  institution: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  metricSubtext: string;
}

export interface ProjectSpec {
  id: string;
  title: string;
  date: string;
  projectNumber: string;
  overview: string;
  modules: string[];
  tags: string[];
  status: string;
  architectureDetails?: {
    systemFlow: string;
    coreTechnologies: string[];
    performanceMetrics: string[];
    vivaNotes: string;
  };
}

export interface AchievementItem {
  id: string;
  title: string;
  award: string;
  organization: string;
  description: string;
  type: 'award' | 'merit';
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface InternshipItem {
  id: string;
  role: string;
  company: string;
  period: string;
  status: string;
  outcomes: string[];
}

export interface CertificateItem {
  id: string;
  issuer: string;
  title: string;
  description: string;
  verified: boolean;
  credentialId?: string;
  issueDate?: string;
  skillsCovered?: string[];
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}
