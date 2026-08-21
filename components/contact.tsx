import { Container, SectionDivider } from "./primitives";

interface ContactProps {
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export function Contact({ email, location, linkedin, github }: ContactProps) {
  return (
    <section id="contact" className="py-16">
      <SectionDivider />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary-accent mb-3">
              Contact
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-text mb-8">
              Let us talk
            </h2>

            <div className="space-y-4">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-primary-muted mb-2">
                  Email
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-lg text-primary-accent hover:underline"
                >
                  {email}
                </a>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-primary-muted mb-2">
                  Location
                </div>
                <p className="text-lg text-primary-text">{location}</p>
              </div>

              <div className="pt-4 flex flex-wrap gap-6">
                {linkedin && (
                  <a
                    href={`https://${linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-semibold text-primary-accent hover:text-primary-accent/80 transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.893v4.038h-2.57V9.25h2.47v.905h.034c.345-.62 1.19-1.275 2.45-1.275 2.623 0 3.107 1.726 3.107 3.972v4.386zM5.337 7.433c-.821 0-1.585-.321-2.139-.881a3.066 3.066 0 01-.88-2.138c0-.822.32-1.585.88-2.139A3.066 3.066 0 015.337 1.27c.822 0 1.585.32 2.139.88.56.554.88 1.317.88 2.139 0 .821-.32 1.584-.88 2.138-.554.56-1.317.88-2.139.88zm11.066 9.605h-2.667V9.25h2.667v7.788zM17.668 1H2.331A1.326 1.326 0 001 2.331v15.338A1.327 1.327 0 002.331 19h15.337A1.327 1.327 0 0019 17.669V2.331A1.328 1.328 0 0017.668 1z" />
                    </svg>
                    LinkedIn
                  </a>
                )}

                {github && (
                  <a
                    href={`https://${github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-semibold text-primary-accent hover:text-primary-accent/80 transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.194.092-.927.35-1.559.636-1.92-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C17.138 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="bg-primary-card rounded-lg p-8 border border-primary-surface">
            <div className="font-mono text-xs uppercase tracking-widest text-primary-muted mb-4">
              Additional Info
            </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary-muted mb-3">
              Feel free to reach out for inquiries about projects, collaborations, or just to discuss software engineering, data systems, and AI applications.
            </div>
          </div>

            <div className="mt-6 pt-6 border-t border-primary-surface/50">
              <div className="text-xs text-primary-muted font-mono">
                Response time: 24-48 hours
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
