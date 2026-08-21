# Portfolio Content Guide

This guide explains how to fill in your actual information in the portfolio template.

## 📋 Before You Start

Gather the following information:
- Your name, title, and professional tagline
- Current location and contact email
- LinkedIn and GitHub profiles
- List of technologies you actually use
- Work experience with dates and responsibilities
- Education information
- 3-5 significant projects you've worked on
- Areas you're currently learning/exploring

## 🏠 Personal Information

Location: `data/portfolio.ts` → `personal` object

```typescript
personal: {
  name: "John Doe",                           // Your full name
  title: "Senior Backend Engineer",           // Your current job title
  tagline: "BACKEND ENGINEER · ML SYSTEMS",  // Your role + current focus
  introduction: "I build scalable backend systems and ML pipelines. Currently exploring large-scale data infrastructure and AI systems.",
  location: "San Francisco, CA",              // Your city/region
  email: "john@example.com",                  // Your email
  linkedin: "linkedin.com/in/johndoe",        // LinkedIn URL (without https://)
  github: "github.com/johndoe",               // GitHub URL (without https://)
}
```

**Tips:**
- Tagline should be SHORT and specific
- Introduction should be 2-4 sentences, factual, not self-promotional
- Use actual contact info (email is essential)
- LinkedIn/GitHub URLs should be in format shown (without https://)

## 🛠️ Key Technologies

Location: `data/portfolio.ts` → `keyTechnologies` array

```typescript
keyTechnologies: [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Python",
  "Docker",
]
```

**Tips:**
- Show 5-8 key technologies only
- Order by importance to your current work
- Include languages, frameworks, and databases
- These appear in the hero profile card

## 💼 Experience

Location: `data/portfolio.ts` → `experience` array

```typescript
experience: [
  {
    id: "senior-engineer-2024",              // Unique identifier
    company: "TechCorp",                     // Company name
    role: "Senior Software Engineer",        // Your job title
    location: "San Francisco, CA",           // Work location
    startDate: "2023",                       // Year or "Month Year"
    endDate: "Present",                      // "Present" or end date
    current: true,                           // Is this your current job?
    status: "ACTIVE",                        // "ACTIVE" or "COMPLETED"
    responsibilities: [
      "Architected microservices handling 10M+ daily requests",
      "Led team of 4 engineers on payment processing system",
      "Reduced database query time by 60% through optimization",
      "Implemented automated testing increasing coverage to 85%",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
  },
  // Previous jobs...
]
```

**Tips:**
- Use actual dates (years are fine, doesn't need exact dates)
- Responsibilities should be specific and metric-oriented where possible
- Avoid generic statements like "worked with team"
- Include quantifiable impact (but only if true)
- Add promotions as additional entries or nested array if promoted within same company
- Show progression in responsibility and seniority

## 🎓 Education

Location: `data/portfolio.ts` → `education` array

```typescript
education: [
  {
    id: "msc-2024",                          // Unique identifier
    degree: "MSc in Computer Science",       // Your degree
    institution: "Stanford University",      // University name
    startDate: "2023",                       // Start year
    endDate: "2025",                         // End year (or "Present" if ongoing)
    current: true,                           // Is this ongoing?
    cgpa: "3.85",                            // Optional: your GPA
    coursework: [                            // Optional: relevant courses
      "Advanced Machine Learning",
      "Distributed Systems",
      "Natural Language Processing",
    ],
  },
  {
    id: "bsc-2023",
    degree: "BSc in Computer Engineering",
    institution: "UC Berkeley",
    startDate: "2019",
    endDate: "2023",
    current: false,
    cgpa: "3.78",
  },
]
```

**Tips:**
- Current education is automatically highlighted
- Show most recent first
- CGPA is optional (include if you're proud of it)
- Coursework is optional but helps show specialization
- Include any relevant honors or awards as separate entries if desired

## 🚀 Projects

Location: `data/portfolio.ts` → `projects` array

This is where you showcase your best work. Use the Problem → Solution format.

```typescript
projects: [
  {
    id: "fintech-app",
    name: "FinTrack - Personal Finance Platform",
    problem: "Tracking personal finances across multiple accounts and investment portfolios is fragmented and error-prone. Users need a unified system for real-time financial overview.",
    solution: "Built a full-stack application with secure authentication, transaction management, and AI-powered spending insights. Implemented PostgreSQL for transactional data, Redis for caching, and Spring Boot for scalable backend.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "Redis", "Docker"],
    github: "https://github.com/johndoe/fintrack",
    demo: "https://fintrack-demo.example.com",
    icon: "💰",  // Optional: single emoji for visual identification
  },
  {
    id: "recommendation-engine",
    name: "E-Commerce Recommendation Engine",
    problem: "E-commerce platform had low engagement - recommendations were basic and not personalized. Average engagement rate was 2.3%.",
    solution: "Developed ML-based recommendation system using collaborative filtering and content-based algorithms. Integrated with Elasticsearch for fast retrieval. Achieved 8.7% engagement lift in A/B testing.",
    technologies: ["Python", "TensorFlow", "Elasticsearch", "PostgreSQL", "Apache Spark"],
    github: "https://github.com/johndoe/rec-engine",
    // demo is optional
  },
]
```

**Tips:**
- Limit to 3-5 of your BEST projects
- Use Problem → Solution format (not just feature listing)
- Be specific about the challenge and your solution
- Include quantifiable impact if available (but be honest)
- github and demo links are optional
- icon is optional (any single emoji is fine)
- Don't overclaim - be accurate about what you built

## 🎯 Skills / Capabilities

Location: `data/portfolio.ts` → `skills` array

```typescript
skills: [
  {
    category: "PROGRAMMING",
    items: ["Java", "Python", "Go", "TypeScript", "SQL"],
  },
  {
    category: "BACKEND",
    items: ["Spring Boot", "Spring Security", "REST APIs", "gRPC", "Hibernate"],
  },
  {
    category: "DATA & SYSTEMS",
    items: ["PostgreSQL", "MongoDB", "Apache Kafka", "Apache Spark", "Elasticsearch"],
  },
  {
    category: "AI / ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "LLMs", "RAG Systems"],
  },
  {
    category: "TOOLS & INFRASTRUCTURE",
    items: ["Docker", "Kubernetes", "Git", "Jenkins", "AWS", "GCP"],
  },
  {
    category: "ENGINEERING PRACTICES",
    items: ["System Design", "Microservices", "Testing", "CI/CD", "Code Review", "Agile"],
  },
]
```

**Tips:**
- Focus on skills relevant to your current career
- 5-7 categories is ideal
- List items in order of proficiency/relevance
- Don't include every technology you've ever touched
- Be honest about skill level - employers will verify
- Avoid skill percentages or ratings (not professional)

## 🔍 Currently Exploring

Location: `data/portfolio.ts` → `exploring` array

```typescript
exploring: [
  "Data Engineering",
  "Machine Learning Systems",
  "Large Language Models",
  "Prompt Engineering",
  "Vector Databases",
  "RAG Applications",
  "ML Operations (MLOps)",
]
```

**Tips:**
- Shows direction of your career growth
- 5-8 topics is good
- These should be areas you're actively learning/interested in
- Helps position you for future opportunities
- Don't claim expertise in these - these are explorations

## 📚 Publications (Optional)

Location: `data/portfolio.ts` → `publications` array (optional)

Only include this if you have published papers or significant technical articles.

```typescript
publications: [
  {
    id: "paper-001",
    title: "Efficient Indexing Strategies for Time-Series Data in Distributed Systems",
    publication: "IEEE Transactions on Data Engineering · 2024",
    date: "2024",
    description: "Research on optimizing query performance in time-series databases using novel indexing techniques.",
    status: "PUBLISHED",
  },
  {
    id: "paper-002",
    title: "Advances in Retrieval Augmented Generation for Knowledge-Intensive Tasks",
    publication: "arXiv · 2024",
    date: "2024",
    description: "Preprint on improving RAG systems with semantic reranking and dynamic chunk sizing.",
    status: "IN_PROGRESS",  // Mark if not yet published
  },
]
```

**Tips:**
- Only include if you have actual publications
- Clearly mark if paper is "IN_PROGRESS"
- Include publication venue/journal
- Brief, factual description (1-2 sentences)

## 🎨 Photo / Avatar

To add your photo:
1. Replace the `[PHOTO]` text in `components/hero-profile.tsx`
2. Or create an `public/` folder and add your image
3. Update the placeholder div to use an actual image

```typescript
// Instead of placeholder:
<div className="w-full aspect-square bg-primary-surface rounded-lg mb-6 flex items-center justify-center border border-primary-surface/50">
  <Image 
    src="/your-photo.jpg" 
    alt="Your Name"
    width={400}
    height={400}
    className="rounded-lg"
  />
</div>
```

## 📝 Writing Tips

### For Introductions
❌ "Passionate developer with a love for coding"
✅ "Backend engineer focused on distributed systems and data infrastructure"

❌ "Full-stack developer experienced in many technologies"
✅ "Building scalable applications using Java, Spring Boot, and PostgreSQL"

### For Responsibilities
❌ "Did various backend tasks"
✅ "Designed and implemented payment processing microservice handling 500K+ daily transactions"

❌ "Worked with team on project"
✅ "Led architecture review and code optimization that improved API response time by 40%"

### For Project Solutions
❌ "Created app using React and Node.js"
✅ "Built full-stack platform with React frontend, Node.js backend, PostgreSQL database. Implemented JWT authentication and achieved 99.9% uptime. Used Docker for deployment and Kubernetes for orchestration."

## 🔗 Social Links Format

Make sure you use correct format:

```
LinkedIn: linkedin.com/in/yourprofile  (NOT: https://linkedin.com/in/yourprofile)
GitHub: github.com/yourprofile         (NOT: https://github.com/yourprofile)
```

The URLs are prefixed with `https://` automatically in components.

## ✅ Checklist Before Publishing

- [ ] All placeholder text replaced with real information
- [ ] Email address is correct and monitored
- [ ] Social links are valid and public
- [ ] Project descriptions focus on problem/solution
- [ ] Technologies listed are ones you actually use
- [ ] No obvious spelling or grammar errors
- [ ] Information is accurate (employers will verify)
- [ ] Resume PDF is ready (if linking download button)
- [ ] Photo is professional (if adding one)
- [ ] Current status (job, education) is clearly marked
- [ ] Mobile preview looks good

## 🌐 Publishing

Once your content is ready:

1. Commit all changes: `git add . && git commit -m "Add personal portfolio content"`
2. Deploy: 
   - Vercel: `vercel`
   - Or push to GitHub and deploy to Vercel/Netlify
3. Test all links and forms
4. Share your portfolio URL

---

**Remember**: Your portfolio is your professional document. Be honest, specific, and let your work speak for itself.
