import { Container, SectionLabel, SectionDivider } from "./primitives";

interface SkillCategory {
  category: string;
  items: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-16">
      <SectionDivider />
      <Container>
        <SectionLabel>CAPABILITIES</SectionLabel>

        <h2 className="text-3xl lg:text-4xl font-bold text-primary-text mb-3">
          Skills
        </h2>
        <p className="text-primary-muted mb-12">
          Technologies and engineering practices I work with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-primary-card rounded-lg p-6 border border-primary-surface hover:border-primary-accent/30 transition-colors"
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary-accent mb-4">
                {skillGroup.category}
              </h3>

              <div className="space-y-2">
                {skillGroup.items.map((item) => (
                  <div
                    key={item}
                    className="text-sm text-primary-text flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-accent/50 mr-3" />
                    {item}
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
