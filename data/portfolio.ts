export interface ResearchProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  status: "COMPLETED" | "IN_PROGRESS";
}

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
    currentRole: string;
    experience: string;
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
  researchProjects?: ResearchProject[];
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
    name: "Zareen Zia",
    title: "Senior Software Engineer",
    tagline: "SENIOR SOFTWARE ENGINEER · DATA & AI EXPLORER",
    introduction:
      "Senior Software Engineer with 4+ years of experience building enterprise backend systems using Java, Spring Boot, and cloud technologies. I have delivered production solutions across Japanese, Singaporean, and Finnish client environments. Currently pursuing an MSc in Data Science while expanding toward data engineering and AI-powered systems.",
    location: "Uttara, Dhaka, Bangladesh",
    email: "zareenzia801@gmail.com",
    linkedin: "linkedin.com/in/zareenzia801",
    github: "github.com/zareenzia",
    currentRole: "Senior Software Engineer",
    experience: "4.5+ Years",
  },
  keyTechnologies: [
    "Java",
    "Spring Boot",
    "Python",
    "PostgreSQL",
    "Machine Learning",
    "RAG",
  ],
  experience: [
    {
      id: "bjit-limited",
      company: "BJIT Limited",
      role: "Senior Software Engineer",
      location: "Dhaka, Bangladesh",
      startDate: "Apr 2022",
      endDate: "Present",
      current: true,
      status: "ACTIVE",
      responsibilities: [
        "Currently embedded with a Finnish data team, contributing to data engineering and analytics initiatives",
        "Lead feature development, code reviews, and architectural decisions across enterprise projects",
        "Mentor junior developers and drive engineering best practices across the team",
        "Collaborate with 30+ engineers in Agile Scrum teams to deliver client solutions",
      ],
      technologies: ["Java", "Spring Boot", "Python", "PostgreSQL", "BigQuery", "GCP", "AWS", "Docker"],
      promotions: [
        {
          role: "Software Engineer",
          startDate: "Apr 2022",
          endDate: "Jun 2025",
          responsibilities: [
            "Delivered 5 client projects across Japanese, Singaporean, and international client environments",
            "Built 50+ secure RESTful APIs with cloud integrations (GCP, AWS) and Docker deployments",
            "Maintained 90%+ unit test coverage and consistently improved application performance",
            "Key projects: PT Console Ventana (GCP, BigQuery, Cloud SQL, AWS SES), Rakuten ECSG LABO & FMCG (Spring MVC / BFF architecture), Denka digital transformation",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      category: "PROGRAMMING",
      items: ["Java", "Python", "SQL"],
    },
    {
      category: "BACKEND",
      items: ["Spring Boot", "Spring Security", "REST APIs", "Spring Data JPA", "Hibernate", "Microservices"],
    },
    {
      category: "DATA & ANALYTICS",
      items: ["PostgreSQL", "MySQL", "BigQuery", "Google Cloud SQL", "Pandas", "Data Analytics", "Data Mining"],
    },
    {
      category: "AI / ML",
      items: ["Machine Learning", "Classification", "Regression", "Clustering", "NLP", "RAG", "Prompt Engineering"],
    },
    {
      category: "CLOUD & TOOLS",
      items: ["GCP", "AWS", "Docker", "Git", "Maven", "Gradle", "JUnit 5", "Postman"],
    },
    {
      category: "ENGINEERING",
      items: ["System Design", "API Design", "Code Review", "Testing", "Agile / Scrum", "Technical Mentoring"],
    },
  ],
  education: [
    {
      id: "msc",
      degree: "MSc in Data Science",
      institution: "United International University, Dhaka",
      startDate: "2024",
      endDate: "Feb 2027",
      current: true,
      cgpa: "3.70 / 4.00",
    },
    {
      id: "bsc",
      degree: "BSc in Computer Science and Engineering",
      institution: "American International University-Bangladesh (AIUB), Dhaka",
      startDate: "2018",
      endDate: "2022",
      current: false,
      cgpa: "3.58 / 4.00",
      coursework: ["Teaching Assistant — Web Technology (Internship)", "Data Structures & Algorithms", "Database Systems"],
    },
  ],
  projects: [
    {
      id: "fintrack",
      name: "FinTrack — AI-Powered Finance App",
      problem:
        "Managing personal finances across accounts lacks a unified, intelligent system for tracking transactions, budgets, and spending patterns in one place.",
      solution:
        "Building a full-stack application with transaction management, budget tracking, analytics dashboard, notes, and categories. Planned LLM integration for AI-powered financial insights. Uses PostgreSQL on NeonDb, Spring Boot backend, and React frontend — deployed on Railway.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "NeonDb", "React", "REST API", "Railway"],
      github: "https://github.com/zareenzia/FinTrack",
      icon: "💰",
    },
  ],
  exploring: [
    "Data Engineering",
    "Data Science",
    "Machine Learning Systems",
    "Natural Language Processing",
    "Retrieval Augmented Generation",
    "LLM Application Development",
    "AI Agents",
  ],
  researchProjects: [
    {
      id: "pulmorag",
      name: "PulmoRAG — Hybrid RAG System for Pulmonary Disease",
      description:
        "Built a hybrid retrieval-augmented generation pipeline combining dense and sparse retrieval (BM25 + Reciprocal Rank Fusion) with cross-encoder reranking. Indexed 7,409 chunks from 22 clinical guidelines (~60MB). Achieved a 0.858 composite RAGAS score across 102 test queries with 92% accuracy for out-of-scope query detection. Supports local (LLaMA) and cloud (OpenAI, Anthropic) LLM inference; fully containerized with Docker.",
      technologies: ["Python", "ChromaDB", "BM25", "Nomic Embed", "Cross-Encoder Reranking", "LLaMA-3.1", "GPT-4", "Claude", "Streamlit", "Docker"],
      status: "IN_PROGRESS",
    },
    {
      id: "smart-city-nav",
      name: "Smart City Navigation Framework for the Visually Impaired",
      description:
        "Designed a multimodal IoT assistive-navigation system combining real-time object detection, ultrasonic sensing, and audio/haptic feedback for visually impaired users in smart-city environments. Achieved 74.1% mAP@0.5 object detection accuracy across indoor and outdoor scenarios.",
      technologies: ["YOLOv8", "Raspberry Pi", "IoT", "GPS-GSM", "BLE", "NLP", "TTS"],
      status: "IN_PROGRESS",
    },
    {
      id: "doc-restoration",
      name: "Restoration of Old and Faded Documents via Image Processing",
      description:
        "Built an explainable image-restoration pipeline using CLAHE, adaptive thresholding, and morphological operations for degraded and faded documents. Improved OCR confidence from 40.3 to 51.5 and increased contrast by 30.8% on faded receipt images.",
      technologies: ["Python", "OpenCV", "Tesseract OCR", "CLAHE"],
      status: "IN_PROGRESS",
    },
  ],
};

