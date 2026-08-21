import { Container, Tag } from "./primitives";

interface HeroProfileProps {
  name: string;
  tagline: string;
  title: string;
  introduction: string;
  location: string;
  email: string;
  keyTechnologies: string[];
  currentRole: string;
  experience: string;
  linkedin?: string;
  github?: string;
}

export function HeroProfile({
  name,
  tagline,
  title,
  introduction,
  location,
  email,
  keyTechnologies,
  currentRole,
  experience,
  linkedin,
  github,
}: HeroProfileProps) {
  return (
    <section id="about" className="pt-32 pb-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-primary-text/5 rounded-lg p-8 lg:p-12 border border-primary-text/10">
              {/* Tagline */}
              <div className="font-mono text-xs tracking-widest text-primary-muted mb-4 uppercase">
                {tagline}
              </div>

              {/* Name */}
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-text mb-3 leading-tight">
                {name}
              </h1>

              {/* Title */}
              <div className="text-lg text-primary-muted mb-6 font-medium">
                {title}
              </div>

              {/* Introduction */}
              <p className="text-primary-muted leading-relaxed mb-8 text-sm lg:text-base max-w-2xl">
                {introduction}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {keyTechnologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              {/* Info Row */}
              <div className="grid grid-cols-3 gap-4 border-t border-primary-surface/50 pt-6 mb-8">
                <div>
                  <div className="font-mono text-xs text-primary-muted uppercase tracking-widest mb-1">
                    Based In
                  </div>
                  <div className="text-primary-text font-medium">{location}</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-primary-muted uppercase tracking-widest mb-1">
                    Current Role
                  </div>
                  <div className="text-primary-text font-medium">{currentRole}</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-primary-muted uppercase tracking-widest mb-1">
                    Experience
                  </div>
                  <div className="text-primary-text font-medium">{experience}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${email}`}
                  className="px-6 py-3 bg-primary-accent text-primary-bg font-mono font-semibold text-sm uppercase tracking-widest rounded border border-primary-accent hover:bg-primary-accent/90 transition-colors text-center"
                >
                  Email Me
                </a>
                <button className="px-6 py-3 border border-primary-accent/50 text-primary-accent font-mono font-semibold text-sm uppercase tracking-widest rounded hover:bg-primary-accent/10 transition-colors">
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-primary-card rounded-lg p-6 border border-primary-surface">
              {/* Photo Placeholder */}
              <div className="w-full aspect-square bg-primary-surface rounded-lg mb-6 flex items-center justify-center border border-primary-surface/50">
                <div className="text-center">
                  <div className="text-4xl mb-2">👤</div>
                  <div className="text-xs text-primary-muted font-mono">
                    [PHOTO]
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div>
                  <div className="font-mono text-xs text-primary-muted uppercase tracking-widest mb-1">
                    Based In
                  </div>
                  <div className="text-sm text-primary-text">{location}</div>
                </div>

                <div>
                  <div className="font-mono text-xs text-primary-muted uppercase tracking-widest mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-primary-accent hover:underline break-all"
                  >
                    {email}
                  </a>
                </div>

                {linkedin && (
                  <div>
                    <div className="font-mono text-xs text-primary-muted uppercase tracking-widest mb-1">
                      LinkedIn
                    </div>
                    <a
                      href={`https://${linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-accent hover:underline break-all"
                    >
                      {linkedin}
                    </a>
                  </div>
                )}

                {github && (
                  <div>
                    <div className="font-mono text-xs text-primary-muted uppercase tracking-widest mb-1">
                      GitHub
                    </div>
                    <a
                      href={`https://${github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-accent hover:underline break-all"
                    >
                      {github}
                    </a>
                  </div>
                )}
              </div>

              {/* Decorative Barcode */}
              <div className="mt-8 pt-6 border-t border-primary-surface/50">
                <div className="flex justify-center">
                  <div className="space-y-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="flex gap-1 justify-center"
                        style={{ opacity: 0.3 + Math.random() * 0.4 }}
                      >
                        {[...Array(12)].map((_, j) => (
                          <div
                            key={j}
                            className={`h-3 ${
                              Math.random() > 0.5 ? "w-0.5" : "w-1"
                            } bg-primary-muted`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-2 font-mono text-xs text-primary-muted/50">
                  PORT · 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
