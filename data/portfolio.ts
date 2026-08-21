export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    introduction: string;
    location: string;
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    photo?: string;
  };
  keyTechnologies: string[];
  experience: Array<{
    id: string;
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    status: "ACTIVE" | "COMPLETED";
    responsibilities: string[];
    technologies: string[];
    promotions?: Array<{
      role: string;
      startDate: string;
      endDate: string;
      responsibilities: string[];
    }>;
  }>;
  skills: {
    category: string;
    items: string[];
  }[];
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    current: boolean;
    cgpa?: string;
    coursework?: string[];
  }>;
  projects: Array<{
    id: string;
    name: string;
    problem: string;
    solution: string;
    technologies: string[];
    github?: string;
    demo?: string;
    icon?: string;
  }>;
  exploring: string[];
  publications?: Array<{
    id: string;
    title: string;
    publication: string;
    date: string;
    description: string;
    status: "PUBLISHED" | "IN_PROGRESS";
  }>;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "[YOUR NAME]",
    title: "Software Engineer",
    tagline: "SOFTWARE ENGINEER · DATA & AI EXPLORER",
    introduction:
      "I am a software engineer with experience building backend systems and production applications. My current work and studies are expanding toward data, machine learning and AI-oriented systems.",
    location: "Dhaka, Bangladesh",
    email: "your.email@example.com",
    linkedin: "linkedin.com/in/yourprofile",
    github: "github.com/yourprofile",
  },
  keyTechnologies: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Python",
    "Data Science",
  ],
  experience: [
    {
      id: "senior-engineer",
      company: "[COMPANY]",
      role: "Senior Software Engineer",
      location: "[LOCATION]",
      startDate: "2025",
      endDate: "Present",
      current: true,
      status: "ACTIVE",
      responsibilities: [
        "Built and maintained backend systems handling [scale]",
        "Designed [system/architecture]",
        "Improved [metric] by [value]",
        "Worked with [team/technologies]",
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    },
  ],
  skills: [
    {
      category: "PROGRAMMING",
      items: ["Java", "Python", "SQL", "JavaScript"],
    },
    {
      category: "BACKEND",
      items: ["Spring Boot", "Spring Security", "REST APIs", "Hibernate"],
    },
    {
      category: "DATA",
      items: ["PostgreSQL", "Pandas", "Data Analytics", "Machine Learning"],
    },
    {
      category: "AI / INTELLIGENT SYSTEMS",
      items: ["RAG", "Embeddings", "NLP", "LLM APIs"],
    },
    {
      category: "TOOLS",
      items: ["Git", "Docker", "Gradle", "Postman"],
    },
    {
      category: "ENGINEERING",
      items: ["System Design", "API Design", "Testing", "Code Review", "Agile"],
    },
  ],
  education: [
    {
      id: "msc",
      degree: "MSc in [Field]",
      institution: "[University Name]",
      startDate: "2024",
      endDate: "Present",
      current: true,
      cgpa: "[Your CGPA]",
    },
    {
      id: "bsc",
      degree: "BSc in [Field]",
      institution: "[University Name]",
      startDate: "2020",
      endDate: "2024",
      current: false,
      cgpa: "[Your CGPA]",
    },
  ],
  projects: [
    {
      id: "project-1",
      name: "[PROJECT NAME]",
      problem: "Describe the problem this project solves.",
      solution:
        "Describe what you built and the key technical decisions made.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
      github: "https://github.com/yourprofile/project",
      demo: "https://project-demo.example.com",
    },
  ],
  exploring: [
    "Data Science",
    "Data Engineering",
    "Machine Learning",
    "NLP",
    "RAG Systems",
    "AI Systems Architecture",
  ],
};
