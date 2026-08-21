import { Container, SectionDivider } from "./primitives";

interface ContactProps {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export function Contact({ email, phone, location, linkedin, github }: ContactProps) {
  return (
    <section id="contact" className="py-16">
      <SectionDivider />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#d4af37]/60" />
            <span className="font-mono text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              CONTACT
            </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#f0ede8] mb-8">
            {"Let's talk"}
            </h2>

            {/* Contact values — no labels, monospace, stacked */}
            <div className="space-y-4">
            <a
              href={`mailto:${email}`}
              className="block font-mono text-sm text-[#9ca3af] hover:text-[#d4af37] transition-colors"
            >
              {email}
            </a>

            {phone && (
              <a
                href={`tel:${phone}`}
                className="block font-mono text-sm text-[#9ca3af] hover:text-[#d4af37] transition-colors"
              >
                {phone}
              </a>
            )}

            <div className="font-mono text-sm text-[#6b7280]">{location}</div>

            <div className="flex items-center gap-3 font-mono text-sm text-[#9ca3af] pt-1">
              {linkedin && (
                <a
                  href={`https://${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {linkedin && github && (
                <span className="text-[#4b5563]">·</span>
              )}
              {github && (
                <a
                  href={`https://${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

