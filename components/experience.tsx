import { Container, SectionLabel, SectionDivider, Tag } from "./primitives";

interface ExperienceItem {
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
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-16">
      <SectionDivider />
      <Container>
        <SectionLabel>CAREER TIMELINE</SectionLabel>

        <h2 className="text-3xl lg:text-4xl font-bold text-primary-text mb-3">
          Experience
        </h2>
        <p className="text-primary-muted mb-12">
          A chronological record of where I have worked and what I have built.
        </p>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={job.id} className="relative">
              {/* Timeline Connector */}
              {index !== experience.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary-accent to-primary-accent/20" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-primary-card border-2 border-primary-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary-accent" />
              </div>

              {/* Content */}
              <div className="ml-20 bg-primary-card rounded-lg border border-primary-surface hover:border-primary-accent/30 transition-colors overflow-hidden">
                {/* Company Header */}
                <div className="p-6 border-b border-primary-surface/50">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-lg font-bold text-primary-text">{job.company}</span>
                    <span className="text-xs text-primary-muted font-mono">{job.location}</span>
                    <span className="text-xs text-primary-muted font-mono">
                      {job.startDate} — {job.endDate}
                    </span>
                    <span
                      className={`font-mono text-xs font-bold uppercase px-2 py-0.5 rounded ${
                        job.status === "ACTIVE"
                          ? "bg-primary-accent/20 text-primary-accent"
                          : "bg-primary-surface text-primary-muted"
                      }`}
                    >
                      ● {job.status}
                    </span>
                  </div>
                </div>

                {/* Current / Most Recent Role */}
                <div className="p-6 border-b border-primary-surface/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-accent" />
                    <span className="font-mono text-sm font-bold text-primary-accent uppercase tracking-wide">
                      {job.role}
                    </span>
                    {job.promotions && job.promotions.length > 0 && (
                      <span className="font-mono text-xs text-primary-muted">
                        (Promoted Jun 2025)
                      </span>
                    )}
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-primary-muted pl-3">
                        • {resp}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>

                {/* Previous Roles (Promotions) */}
                {job.promotions && job.promotions.map((prev, i) => (
                  <div key={i} className="p-6 bg-primary-bg/30">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-muted/50" />
                      <span className="font-mono text-sm font-semibold text-primary-muted uppercase tracking-wide">
                        {prev.role}
                      </span>
                      <span className="font-mono text-xs text-primary-muted/70">
                        {prev.startDate} — {prev.endDate}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {prev.responsibilities.map((resp, j) => (
                        <li key={j} className="text-sm text-primary-muted/70 pl-3">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

