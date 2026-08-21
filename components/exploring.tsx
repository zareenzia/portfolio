import { Container, SectionLabel, SectionDivider } from "./primitives";

interface ExploringProps {
  items: string[];
}

export function Exploring({ items }: ExploringProps) {
  return (
    <section className="py-16">
      <SectionDivider />
      <Container>
        <SectionLabel>CURRENTLY EXPLORING</SectionLabel>

        <h2 className="text-3xl lg:text-4xl font-bold text-primary-text mb-3">
          Data, AI & Intelligent Systems
        </h2>
        <p className="text-primary-muted mb-8">
          Evolving from software engineering toward data science and AI systems
          architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item}
              className="bg-primary-card rounded-lg p-4 border border-primary-surface/50 hover:border-primary-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-accent/50 flex-shrink-0" />
                <span className="text-sm text-primary-text">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
