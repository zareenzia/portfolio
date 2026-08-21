import { Container, SectionDivider } from "./primitives";

interface FooterProps {
  name: string;
  email: string;
  linkedin?: string;
  github?: string;
}

export function Footer({ name, email, linkedin, github }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <SectionDivider />
      <Container>
        <div className="py-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="font-mono text-sm text-primary-muted">
            © {year} {name}
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${email}`}
              className="font-mono text-xs uppercase tracking-widest text-primary-muted hover:text-primary-accent transition-colors"
            >
              Email
            </a>
            {linkedin && (
              <a
                href={`https://${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-primary-muted hover:text-primary-accent transition-colors"
              >
                LinkedIn
              </a>
            )}
            {github && (
              <a
                href={`https://${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-primary-muted hover:text-primary-accent transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
