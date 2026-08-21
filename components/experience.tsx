import { Container, SectionDivider, Tag } from "./primitives";

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

function companyCode(name: string) {
  return name
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase())
    .join("")
    .slice(0, 4);
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-16">
      <SectionDivider />
      <Container>
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-[#d4af37]/60" />
          <span className="font-mono text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
            CAREER TIMELINE
          </span>
        </div>

        <h2 className="text-4xl font-bold text-[#e8e6e1] mb-2">Experience</h2>
        <p className="text-[#6b7280] mb-10 text-sm">
          A chronological log of where I have worked, most recent first.
        </p>

        {/* Column headers */}
        <div className="hidden md:grid grid-cols-[80px_1fr_200px_180px_100px] gap-4 mb-3 px-3">
          {["CODE", "ROLE", "LOCATION", "DATES", "STATUS"].map((h) => (
            <div key={h} className="font-mono text-[10px] uppercase tracking-widest text-[#6b7280]/60">
              {h}
            </div>
          ))}
        </div>

        {/* Entries */}
        <div className="space-y-4">
          {experience.map((job) => (
            <div
              key={job.id}
              className="border border-[#1a1f3a] rounded-lg overflow-hidden hover:border-[#d4af37]/20 transition-colors"
              style={{ borderLeft: "2px solid rgba(212,175,55,0.4)" }}
            >
              {/* Top row */}
              <div className="hidden md:grid grid-cols-[80px_1fr_200px_180px_100px] gap-4 items-center px-4 pt-4 pb-2">
                {/* Code box */}
                <div className="w-12 h-10 bg-[#0a0e27] border border-[#d4af37]/30 rounded flex items-center justify-center">
                  <span className="font-mono text-[10px] font-bold text-[#d4af37]">
                    {companyCode(job.company)}
                  </span>
                </div>
                {/* Role + company */}
                <div>
                  <div className="font-bold text-[#e8e6e1] text-base">{job.role}</div>
                  <div className="font-mono text-xs text-[#6b7280] mt-0.5">{job.company}</div>
                </div>
                {/* Location */}
                <div className="font-mono text-xs text-[#6b7280]">{job.location}</div>
                {/* Dates */}
                <div className="font-mono text-xs text-[#6b7280]">
                  {job.startDate} — {job.endDate}
                </div>
                {/* Status */}
                <div>
                  <span className={`font-mono text-[10px] font-bold uppercase px-2 py-1 rounded ${
                    job.status === "ACTIVE"
                      ? "bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30"
                      : "bg-[#1a1f3a] text-[#6b7280]"
                  }`}>
                    ● {job.status}
                  </span>
                </div>
              </div>

              {/* Mobile top row */}
              <div className="md:hidden px-4 pt-4 pb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[#e8e6e1]">{job.company}</span>
                  <span className={`font-mono text-[10px] font-bold uppercase px-2 py-1 rounded ${
                    job.status === "ACTIVE"
                      ? "bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30"
                      : "bg-[#1a1f3a] text-[#6b7280]"
                  }`}>● {job.status}</span>
                </div>
                <div className="font-mono text-xs text-[#6b7280]">{job.location} · {job.startDate} — {job.endDate}</div>
              </div>

              {/* Inner timeline */}
              <div className="px-4 pb-5">
                <div className="relative ml-2">
                  {/* Dashed vertical line */}
                  {job.promotions && job.promotions.length > 0 && (
                    <div className="absolute left-[5px] top-5 bottom-12 w-px border-l-2 border-dashed border-[#d4af37]/25" />
                  )}

                  {/* Current / top role */}
                  <div className="relative mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-[#d4af37] flex-shrink-0 z-10" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                        {job.role}
                      </span>
                      <span className="font-mono text-[10px] border border-[#d4af37]/50 text-[#d4af37] px-2 py-0.5 rounded">
                        CURRENT
                      </span>
                      {job.promotions && (
                        <span className="font-mono text-[10px] text-[#6b7280]">
                          (Promoted {job.promotions[0].endDate})
                        </span>
                      )}
                    </div>
                    <div className="ml-6 font-mono text-[11px] text-[#6b7280] mb-3">
                      {job.promotions ? job.promotions[0].endDate : job.startDate} — {job.endDate}
                    </div>
                    <ul className="ml-6 space-y-1.5 mb-4">
                      {job.responsibilities.map((r, i) => (
                        <li key={i} className="text-sm text-[#6b7280] flex gap-2">
                          <span className="text-[#6b7280]/40 flex-shrink-0">○</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className="ml-6 flex flex-wrap gap-2">
                      {job.technologies.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>

                  {/* Promoted badge */}
                  {job.promotions && job.promotions.length > 0 && (
                    <div className="ml-6 mb-4">
                      <span className="font-mono text-[10px] border border-[#d4af37]/40 text-[#d4af37]/70 px-3 py-1 rounded-full inline-flex items-center gap-1">
                        ▲ PROMOTED
                      </span>
                    </div>
                  )}

                  {/* Previous roles */}
                  {job.promotions?.map((prev, i) => (
                    <div key={i} className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full border-2 border-[#d4af37]/50 flex-shrink-0 z-10 bg-[#0a0e27]" />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#e8e6e1]/60">
                          {prev.role}
                        </span>
                      </div>
                      <div className="ml-6 font-mono text-[11px] text-[#6b7280] mb-3">
                        {prev.startDate} — {prev.endDate}
                      </div>
                      <ul className="ml-6 space-y-1.5">
                        {prev.responsibilities.map((r, j) => (
                          <li key={j} className="text-sm text-[#6b7280] flex gap-2">
                            <span className="text-[#6b7280]/40 flex-shrink-0">○</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
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


