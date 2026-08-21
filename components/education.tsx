import { Container, SectionLabel, SectionDivider } from "./primitives";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  current: boolean;
  cgpa?: string;
  coursework?: string[];
}

interface EducationProps {
  education: EducationItem[];
}

export function Education({ education }: EducationProps) {
  const current = education.find((e) => e.current);
  const past = education.filter((e) => !e.current);

  return (
    <section id="education" className="py-16">
      <SectionDivider />
      <Container>
        <SectionLabel>EDUCATION</SectionLabel>

        <h2 className="text-3xl lg:text-4xl font-bold text-primary-text mb-3">
          Education
        </h2>

        <div className="space-y-6">
          {/* Current Education Highlighted */}
          {current && (
            <div className="bg-gradient-to-br from-primary-text/10 to-primary-text/5 rounded-lg p-8 border border-primary-accent/30">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-primary-text mb-1">
                    {current.degree}
                  </h3>
                  <p className="text-primary-muted font-medium">
                    {current.institution}
                  </p>
                </div>
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent font-mono text-xs font-bold uppercase rounded">
                  Current
                </span>
              </div>

              <div className="text-sm text-primary-muted font-mono mb-3">
                {current.startDate} — {current.endDate}
              </div>

              {current.cgpa && (
                <div className="text-sm text-primary-text">
                  <span className="text-primary-muted">CGPA: </span>
                  {current.cgpa}
                </div>
              )}

              {current.coursework && current.coursework.length > 0 && (
                <div className="mt-4 pt-4 border-t border-primary-surface/50">
                  <div className="font-mono text-xs uppercase tracking-widest text-primary-muted mb-2">
                    Relevant Coursework
                  </div>
                  <div className="text-sm text-primary-text">
                    {current.coursework.join(" · ")}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Past Education */}
          {past.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {past.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-primary-card rounded-lg p-6 border border-primary-surface hover:border-primary-accent/30 transition-colors"
                >
                  <h3 className="font-bold text-primary-text mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-primary-muted mb-3 font-medium">
                    {edu.institution}
                  </p>

                  <div className="text-xs text-primary-muted font-mono mb-2">
                    {edu.startDate} — {edu.endDate}
                  </div>

                  {edu.cgpa && (
                    <div className="text-sm text-primary-text">
                      <span className="text-primary-muted">CGPA: </span>
                      {edu.cgpa}
                    </div>
                  )}

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-primary-surface/50">
                      <div className="font-mono text-xs uppercase tracking-widest text-primary-muted mb-1">
                        Coursework
                      </div>
                      <div className="text-xs text-primary-text">
                        {edu.coursework.join(" · ")}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
