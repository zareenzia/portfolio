import { Container, SectionLabel, SectionDivider, Tag } from "./primitives";

interface ProjectItem {
  id: string;
  name: string;
  problem: string;
  solution: string;
  technologies: string[];
  github?: string;
  demo?: string;
  icon?: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-16">
      <SectionDivider />
      <Container>
        <SectionLabel>SELECTED BUILDS</SectionLabel>

        <h2 className="text-3xl lg:text-4xl font-bold text-primary-text mb-3">
          Projects
        </h2>
        <p className="text-primary-muted mb-12">
          Things I have designed, developed and worked on.
        </p>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-primary-card rounded-lg overflow-hidden border border-primary-surface hover:border-primary-accent/50 transition-all hover:shadow-lg"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  {project.icon && (
                    <div className="w-12 h-12 rounded-lg bg-primary-surface flex items-center justify-center flex-shrink-0 border border-primary-surface/50 text-xl">
                      {project.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary-text mb-1">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Problem and Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-primary-accent mb-2">
                      Problem
                    </div>
                    <p className="text-sm text-primary-muted leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-primary-accent mb-2">
                      Solution
                    </div>
                    <p className="text-sm text-primary-muted leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6 pb-6 border-b border-primary-surface/50">
                  <div className="font-mono text-xs uppercase tracking-widest text-primary-muted mb-3">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-primary-accent hover:text-primary-accent/80 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-primary-accent hover:text-primary-accent/80 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
