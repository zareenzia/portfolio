import { Container, SectionLabel, SectionDivider, Tag } from "./primitives";

interface ResearchProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  status: "COMPLETED" | "IN_PROGRESS";
}

interface ResearchProps {
  projects: ResearchProject[];
}

export function Research({ projects }: ResearchProps) {
  return (
    <section id="research" className="py-16">
      <SectionDivider />
      <Container>
        <SectionLabel>RESEARCH PROJECTS</SectionLabel>

        <h2 className="text-3xl lg:text-4xl font-bold text-primary-text mb-3">
          Research
        </h2>
        <p className="text-primary-muted mb-12">
          Applied research in AI, data systems, and intelligent applications.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-primary-card rounded-lg border border-primary-surface hover:border-primary-accent/30 transition-colors overflow-hidden"
            >
              <div className="p-6">
                {/* Number + Status */}
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-3xl font-bold text-primary-surface select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-mono text-xs font-bold uppercase px-2 py-1 rounded ${
                      project.status === "COMPLETED"
                        ? "bg-primary-accent/20 text-primary-accent"
                        : "bg-primary-surface text-primary-muted border border-primary-muted/30"
                    }`}
                  >
                    {project.status === "IN_PROGRESS" ? "IN PROGRESS" : "COMPLETED"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary-text mb-3 leading-snug">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-primary-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
