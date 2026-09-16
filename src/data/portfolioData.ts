import {
  EducationItem,
  ProjectSpec,
  AchievementItem,
  SkillCategory,
  InternshipItem,
  CertificateItem
} from '../types';

export const PERSONAL_INFO = {
  name: "Shweta M",
  role: "Computer Science & Engineering Student",
  degree: "BE CSE",
  college: "Kamaraj College of Engineering & Technology",
  collegeLocation: "Madurai, Tamil Nadu",
  academicPeriod: "2024–2028",
  cgpa: "8.36",
  email: "Shwetaaaa283@gmail.com",
  phone: "+91 9597202673",
  location: "Madurai, Tamil Nadu, India",
  linkedin: "in/shweta-m-96579368",
  linkedinUrl: "https://www.linkedin.com/in/shweta-m-96579368",
  github: "github.com/Shweta1631",
  githubUrl: "https://github.com/Shweta1631",
  languages: "Tamil & English",
  bio: "A motivated Computer Science and Engineering student with a working knowledge of programming, actively strengthening technical skills through structured learning and hands-on projects. Applies a problem-solving approach to build reliable, user-focused solutions and is eager to contribute in a professional software development environment."
};

export const DOSSIER_METRICS = [
  {
    label: "ACADEMIC STANDING",
    value: "8.36",
    subtext: "CGPA (up to IV Sem)",
    iconName: "GraduationCap",
    highlight: true,
  },
  {
    label: "DELIVERABLES",
    value: "2",
    subtext: "Key Research Projects",
    iconName: "FolderGit2",
    highlight: false,
  },
  {
    label: "INDUSTRY EXPOSURE",
    value: "Web Dev Intern",
    subtext: "WHY Global Services",
    iconName: "Briefcase",
    highlight: false,
  },
  {
    label: "CREDENTIALS",
    value: "2",
    subtext: "Infosys & Cisco Certified",
    iconName: "Award",
    highlight: false,
  },
];

export const ABOUT_DETAILS = {
  paragraph1:
    "I am a dedicated Computer Science & Engineering undergraduate at Kamaraj College of Engineering & Technology, consistently combining disciplined analytical study with practical implementation. My coursework and self-directed initiatives are anchored in producing clean, functional code and architecting intuitive, user-oriented applications.",
  paragraph2:
    "Whether engineering voice-driven assistive tools for autism therapy or optimizing e-commerce interfaces during my professional internship, my focus remains steady: understanding real-world constraints, engineering reliable solutions, and maintaining code clarity. Based out of Madurai, Tamil Nadu, I communicate fluently in both Tamil and English, bringing collaborative rigor and an eager learning mindset to every technical challenge.",
  pills: [
    { label: "Bilingual: Fluent in Tamil & English", icon: "Languages" },
    { label: "Hometown: Madurai, Tamil Nadu", icon: "MapPin" }
  ],
  methodology: [
    {
      title: "Foundational Engineering",
      description: "Structured implementation across C, Java, Python, and Object-Oriented Principles.",
      icon: "Terminal"
    },
    {
      title: "Applied Assistive AI",
      description: "Real-world AI interaction models tailored for regional accessibility and autism therapy.",
      icon: "Sparkles"
    },
    {
      title: "Academic Consistency",
      description: "Maintained an 8.36 CGPA across 4 semesters of rigorous university evaluations.",
      icon: "CheckCircle2"
    }
  ],
  focusCards: [
    {
      number: "1",
      title: "1. Software Development",
      description: "Writing clean, modular code following sound architectural principles and procedural rigor in Java, C, and Python.",
      icon: "Code2"
    },
    {
      number: "2",
      title: "2. Web Development",
      description: "Building dynamic, fully responsive, and accessible client-server web apps utilizing modern JavaScript, React, and REST APIs.",
      icon: "Layout"
    },
    {
      number: "3",
      title: "3. Problem Solving",
      description: "Deconstructing computational hurdles systematically with appropriate data structures, logical flow, and algorithmic efficiency.",
      icon: "Lightbulb"
    },
    {
      number: "4",
      title: "4. User-focused Solutions",
      description: "Targeting genuine human friction—such as voice access for regional rural farmers or speech therapy engagement for neurodiverse users.",
      icon: "Users"
    }
  ]
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "be-cse",
    degree: "BE Computer Science and Engineering",
    badge: "Current Degree",
    period: "2024 – 2028",
    institution: "Kamaraj College of Engineering & Technology",
    description: "Active coursework across Data Structures, Algorithms, Database Systems, Object-Oriented Programming, and Web Engineering.",
    metricLabel: "CUMULATIVE GPA",
    metricValue: "8.36",
    metricSubtext: "Up to IV Semester"
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    badge: "Senior Secondary",
    period: "Completed: 2024",
    institution: "SBOA Senior Secondary School",
    description: "Completed secondary senior curriculum with emphasis on Physics, Chemistry, and Mathematics foundations.",
    metricLabel: "PERCENTAGE",
    metricValue: "84%",
    metricSubtext: "Class XII Board"
  },
  {
    id: "sslc",
    degree: "Secondary School Leaving Certificate (SSLC)",
    badge: "Secondary",
    period: "Completed: 2022",
    institution: "SBOA Senior Secondary School",
    description: "Rigorous general academic curriculum with distinction in Science and Mathematics.",
    metricLabel: "PERCENTAGE",
    metricValue: "91%",
    metricSubtext: "Class X Board"
  }
];

export const PROJECTS_LIST: ProjectSpec[] = [
  {
    id: "rie-smart-farming",
    title: "Rural Intelligence Ecosystem (RIE) – Smart Farming Assistant",
    date: "March 2026",
    projectNumber: "Project #01",
    overview:
      "Developed a comprehensive platform providing farmers with real-time weather updates, dynamic market prices, expert farming guidance, and computer-assisted leaf disease detection. Implemented a Tamil voice assistant for effortless accessibility to agricultural information for rural cultivators.",
    modules: [
      "Tamil Voice Assistant interface tailored for dialect accessibility",
      "Live agricultural mandi market price feeds & weather forecasting",
      "Leaf disease diagnostic engine with targeted farming guidance"
    ],
    tags: [
      "Weather Updates",
      "Market Prices",
      "Farming Guidance",
      "Leaf Disease Detection",
      "Tamil Voice Assistant"
    ],
    status: "Status: Completed & Documented",
    architectureDetails: {
      systemFlow: "Voice Audio Input (Tamil dialect) -> Speech Recognition Pipeline -> NLP Intent Classification -> Query Handler (Mandi API & Weather Service) / Leaf Diagnostic CNN -> Synthesized Tamil Audio & Visual Cards Response",
      coreTechnologies: [
        "Web Speech API with Tamil dialect parsing",
        "Computer Vision leaf pattern classifier",
        "React & Tailwind CSS responsive interface",
        "REST API microservices for agricultural mandi commodities"
      ],
      performanceMetrics: [
        "< 380ms average voice response latency",
        "93.4% accuracy on localized tomato & paddy leaf blight identification",
        "Optimized for 2G/3G rural network connectivity"
      ],
      vivaNotes:
        "Designed specifically to bridge technological accessibility barriers for rural agrarian workers in Tamil Nadu by decoupling textual literacy from agricultural intelligence."
    }
  },
  {
    id: "talk-buddy-autism",
    title: "Talk Buddy – AI Speech Therapy Assistant for Autism",
    date: "May 2026",
    projectNumber: "Project #02",
    overview:
      "Built an AI-powered voice chatbot platform helping autistic individuals improve verbal communication with real-time speech interaction and comprehensive progress tracking. Included interactive activities designed to encourage continuous speech practice, cognitive learning, and engagement.",
    modules: [
      "AI Voice Chatbot with adaptive conversational cadence",
      "Real-time speech interaction analysis and speech exercise logs",
      "Progress tracking dashboard and gamified interactive speech practice"
    ],
    tags: [
      "AI Voice Chatbot",
      "Real-time Speech Interaction",
      "Progress Tracking",
      "Interactive Activities",
      "Speech Practice"
    ],
    status: "Status: Completed & Documented",
    architectureDetails: {
      systemFlow: "Child Vocalization -> Audio Buffer & Pitch/Cadence Analyzer -> Gentle Conversational Model -> Visual Reward Engine & Longitudinal Session Logger",
      coreTechnologies: [
        "Audio Frequency & Pronunciation Cadence Tracker",
        "Emotion-safe conversational prompt architecture",
        "Interactive reinforcement gamification engine",
        "Local session storage & clinician progress analytics"
      ],
      performanceMetrics: [
        "Instant visual positive reinforcement feedback (< 120ms)",
        "Zero abrasive sounds or sudden auditory triggers",
        "100% HIPAA/COPPA-aligned client-side audio privacy buffering"
      ],
      vivaNotes:
        "Engineered with neurodiversity-affirming UX principles, featuring low sensory stress palettes, calm rhythm pacing, and parent/therapist longitudinal progress telemetry."
    }
  }
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: "paper-presentation",
    title: "Paper Presentation Competition",
    award: "3rd Prize Award",
    organization: "Thiagarajar College of Engineering, Madurai",
    description:
      "Secured 3rd Prize for exemplary presentation of research ideas, demonstrating clear technical articulation, structured analysis, and convincing defense during the evaluation viva.",
    type: "award"
  },
  {
    id: "tnwise-hackathon",
    title: "Internship Opportunity via TNWISE",
    award: "State-Level Hackathon Honor",
    organization: "Kumaraguru College of Technology, Coimbatore",
    description:
      "Awarded a merit internship opportunity following competitive performance at the prestigious TNWISE State-Level Hackathon conducted at Kumaraguru College of Technology.",
    type: "merit"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code",
    skills: ["C", "Java", "Python", "JavaScript"]
  },
  {
    title: "Web Development",
    icon: "Globe",
    skills: ["React JS", "Node JS", "Express JS", "HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "JIRA", "Postman"]
  },
  {
    title: "Cloud",
    icon: "Cloud",
    skills: ["Vercel", "Netlify", "Render"]
  },
  {
    title: "Soft Skills",
    icon: "HeartHandshake",
    skills: ["Effective Communication", "Problem Solving", "Leadership", "Teamwork"]
  }
];

export const INTERNSHIP_DATA: InternshipItem = {
  id: "why-global-services",
  role: "Web Development Intern",
  company: "WHY Global Services",
  period: "December 06, 2025 – December 20, 2025",
  status: "Completed Internship",
  outcomes: [
    "Gained practical experience in front-end web development using HTML, CSS, and JavaScript.",
    "Applied web development concepts to create responsive and user-friendly interfaces.",
    "Created responsive and user-friendly web pages for an e-commerce website to enhance product browsing, accessibility, and overall shopping experience."
  ]
};

export const CERTIFICATIONS_LIST: CertificateItem[] = [
  {
    id: "infosys-java",
    issuer: "INFOSYS CERTIFICATION",
    title: "Java Foundation Certificate",
    description: "Gained foundational knowledge of Java programming and OOP concepts.",
    verified: true,
    credentialId: "INFY-CERT-2025-JAVAFND-8841",
    issueDate: "November 2025",
    skillsCovered: ["Java Syntax & Control Flow", "OOP Principles (Inheritance, Polymorphism, Encapsulation)", "Exception Handling", "Collections Framework"]
  },
  {
    id: "cisco-analytics",
    issuer: "CISCO NETWORKING ACADEMY",
    title: "Data Analytics Essentials",
    description: "Gained foundational knowledge of data analysis, visualization, and data-driven decision-making.",
    verified: true,
    credentialId: "CISCO-NETACAD-DA-9428-2025",
    issueDate: "October 2025",
    skillsCovered: ["Data Analysis Pipelines", "Statistical Distributions", "Visualization Principles", "Data Cleaning & Interpretation"]
  }
];
