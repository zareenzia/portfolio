# Professional Portfolio Website

A modern, minimal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed with a professional engineering dossier aesthetic inspired by contemporary design practices.

## 🎯 Design Philosophy

- **Minimal & Technical**: Clean typography, restrained use of color
- **Professional**: Emphasizes credentials, experience, and technical depth
- **Information-Dense**: Organized hierarchy, no wasted space
- **Understated**: Subtle animations, no excessive gradients or effects
- **Credible**: Professional record aesthetic, not flashy

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── navbar.tsx          # Fixed navigation bar
│   ├── hero-profile.tsx    # Profile/hero section
│   ├── experience.tsx      # Career timeline
│   ├── skills.tsx          # Skills/capabilities
│   ├── education.tsx       # Education section
│   ├── projects.tsx        # Project showcase
│   ├── exploring.tsx       # Current interests
│   ├── contact.tsx         # Contact section
│   ├── footer.tsx          # Footer
│   └── primitives.tsx      # Reusable UI primitives
├── data/
│   └── portfolio.ts        # All portfolio content
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Color System

The site uses a sophisticated dark-first color palette:

- **Primary Background**: Very dark navy (`#0a0e27`)
- **Surface Cards**: Slightly lighter dark navy (`#141829`, `#1a1f3a`)
- **Primary Text**: Warm off-white (`#e8e6e1`)
- **Secondary Text**: Muted blue-gray (`#6b7280`)
- **Accent**: Restrained amber/gold (`#d4af37`)

All colors are customizable in `tailwind.config.ts`.

## 📝 Updating Your Information

All content is centralized in `data/portfolio.ts`. Simply update the `portfolioData` object:

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    tagline: "YOUR ROLE · YOUR FOCUS",
    introduction: "Your professional introduction...",
    location: "Your Location",
    email: "your.email@example.com",
    linkedin: "linkedin.com/in/yourprofile",
    github: "github.com/yourprofile",
  },
  keyTechnologies: ["Tech1", "Tech2", "Tech3"],
  experience: [
    {
      id: "unique-id",
      company: "Company Name",
      role: "Your Role",
      location: "Location",
      startDate: "2024",
      endDate: "Present",
      current: true,
      status: "ACTIVE",
      responsibilities: [
        "Built...",
        "Designed...",
      ],
      technologies: ["Tech1", "Tech2"],
    },
  ],
  skills: [
    {
      category: "PROGRAMMING",
      items: ["Language1", "Language2"],
    },
  ],
  education: [
    {
      id: "education-1",
      degree: "Your Degree",
      institution: "University Name",
      startDate: "2024",
      endDate: "Present",
      current: true,
      cgpa: "3.8",
    },
  ],
  projects: [
    {
      id: "project-1",
      name: "Project Name",
      problem: "Problem statement...",
      solution: "What you built...",
      technologies: ["Tech1", "Tech2"],
      github: "https://github.com/...",
      demo: "https://demo.example.com",
    },
  ],
  exploring: ["Topic1", "Topic2"],
};
```

## 🔧 Customization

### Typography

The site uses:
- **Sans-serif**: Inter (for body text)
- **Monospace**: JetBrains Mono (for labels and metadata)

Change fonts in `tailwind.config.ts` or `app/globals.css`.

### Spacing & Layout

- Max content width is set in components using Tailwind's `max-w-4xl`
- Adjust padding and margins in individual components
- Responsive breakpoints use Tailwind's default: `sm`, `md`, `lg`, `xl`

### Animations

Animations are kept minimal and professional:
- Section fade-ins
- Smooth scrolling
- Hover transitions
- Timeline indicators

Respects `prefers-reduced-motion` for accessibility.

## 📱 Responsive Design

The site is fully responsive:
- **Mobile**: Optimized for small screens with stacked layouts
- **Tablet**: Intermediate layouts with 2-column grids
- **Desktop**: Full multi-column layouts with sidebar information

Test responsiveness using browser DevTools.

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

1. **Build**: `npm run build`
2. **Output**: All files in `.next/` directory
3. Deploy static folder or use a Node.js host

## 📊 Performance

The site is optimized for:
- Fast load times (uses Next.js optimizations)
- Accessibility (semantic HTML, ARIA labels, keyboard navigation)
- SEO (metadata, structured content)

Check lighthouse scores in browser DevTools.

## ✨ Features

- ✅ Fixed sticky navigation
- ✅ Professional hero/profile card
- ✅ Career timeline with status indicators
- ✅ Categorized skills/capabilities
- ✅ Education timeline
- ✅ Project showcase with problem/solution format
- ✅ Current interests/exploration section
- ✅ Contact section
- ✅ Decorative barcode (profile identification aesthetic)
- ✅ Mobile-responsive design
- ✅ Accessibility-first approach
- ✅ Dark mode (no light mode toggle needed)
- ✅ Smooth animations with motion preference support

## 🎬 Section Guide

### Navigation Bar
- Compact, sticky header
- Left: Logo + name
- Center/Right: Navigation links
- Far right: "Get in Touch" button
- Mobile: Collapsible menu

### Profile Card
- Large centered card with cream background
- Left: Main content (name, title, introduction, tech tags)
- Right: Info panel with contact details and decorative barcode
- Action buttons: Email and Download Resume
- Status indicators

### Career Timeline
- Vertical timeline with dots and connectors
- Each role shows: position, company, dates, status
- Responsibilities and technologies listed
- Hover effects on cards
- Supports nested promotions

### Skills Section
- Multi-column grid layout
- Categorized by skill type
- No percentage bars or ratings
- Focus on relevant technologies

### Education Section
- Current education highlighted with background
- Past education in grid layout
- Shows degree, institution, dates, CGPA
- Optional coursework listing

### Projects Section
- Large horizontal cards
- Problem/Solution format (not just listing features)
- Technology tags
- Links to GitHub and live demo

### Exploring Section
- Current interests and learning direction
- Shows evolution from software engineering to data/AI
- Simple, scannable layout

### Contact Section
- Left: Contact information and social links
- Right: Additional info panel
- Clear calls to action

## 🔐 Privacy & Security

- No tracking or analytics (add your own if needed)
- All data is client-side
- No server-side processing
- No cookies or local storage

## 📄 License

This portfolio template is provided as-is. Customize it for your own use.

## 💡 Best Practices

1. **Content**: 
   - Keep introduction 2-4 sentences
   - Be specific about responsibilities (avoid generic claims)
   - Show problem → solution for projects
   - Only list actually-used technologies

2. **Design**:
   - Maintain consistent spacing
   - Use accent color sparingly
   - Keep animations subtle
   - Test on multiple devices

3. **SEO**:
   - Update metadata in `app/layout.tsx`
   - Use semantic HTML
   - Keep content fresh

## 🚀 Next Steps

1. Update `data/portfolio.ts` with your information
2. Add your photo (replace `[PHOTO]` placeholder)
3. Create a resume PDF to link in Download Resume button
4. Deploy to your domain
5. Test all links and mobile responsiveness

## 📞 Support

For issues or questions about the implementation, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

Built with precision and care. Designed to communicate professional credibility.
