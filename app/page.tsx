import { HeroProfile } from "@/components/hero-profile";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Exploring } from "@/components/exploring";
import { Research } from "@/components/research";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <HeroProfile
        name={portfolioData.personal.name}
        tagline={portfolioData.personal.tagline}
        title={portfolioData.personal.title}
        introduction={portfolioData.personal.introduction}
        location={portfolioData.personal.location}
        email={portfolioData.personal.email}
        keyTechnologies={portfolioData.keyTechnologies}
        currentRole={portfolioData.personal.currentRole}
        experience={portfolioData.personal.experience}
        linkedin={portfolioData.personal.linkedin}
        github={portfolioData.personal.github}
      />

      {portfolioData.experience.length > 0 && (
        <Experience experience={portfolioData.experience} />
      )}

      {portfolioData.skills.length > 0 && (
        <Skills skills={portfolioData.skills} />
      )}

      {portfolioData.education.length > 0 && (
        <Education education={portfolioData.education} />
      )}

      {portfolioData.projects.length > 0 && (
        <Projects projects={portfolioData.projects} />
      )}

      {portfolioData.exploring.length > 0 && (
        <Exploring items={portfolioData.exploring} />
      )}

      {portfolioData.researchProjects && portfolioData.researchProjects.length > 0 && (
        <Research projects={portfolioData.researchProjects} />
      )}

      <Contact
        email={portfolioData.personal.email}
        location={portfolioData.personal.location}
        linkedin={portfolioData.personal.linkedin}
        github={portfolioData.personal.github}
      />

      <Footer
        name={portfolioData.personal.name}
        email={portfolioData.personal.email}
        linkedin={portfolioData.personal.linkedin}
        github={portfolioData.personal.github}
      />
    </>
  );
}
