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
  return name.split(" ").map((w) => w.charAt(0)).join("").toUpperCase().slice(0, 4);
}

function BarsIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="flex-shrink-0 mt-[3px]">
      <rect width="14" height="2" rx="1" fill="#d4af37" />
      <rect y="4" width="14" height="2" rx="1" fill="#d4af37" />
    </svg>
  );
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
        <h2 className="text-4xl font-bold text-[#f0ede8] mb-2">Experience</h2>
        <p className="text-[#4b5563] mb-10 text-sm">
          A chronological log of where I have worked, most recent first.
        </p>

        {/* Column headers — desktop only */}
        <div className="hidden lg:grid mb-3 px-3"
          style={{ gridTemplateColumns: "100px 1fr 210px 170px 90px", gap: "1rem" }}>
          {["CODE", "ROLE", "LOCATION", "DATES", "STATUS"].map((h) => (
            <div key={h} className="font-mono text-[10px] uppercase tracking-widest text-[#4b5563]/70">
              {h}
            </div>
          ))}
        </div>

        {/* Entries */}
        <div className="space-y-4">
          {experience.map((job) => (
            <div
              key={job.id}
              className="rounded-lg overflow-hidden"
              style={{
                borderLeft: "2px solid rgba(212,175,55,0.45)",
                border: "1px solid rgba(212,175,55,0.12)",
                borderLeftWidth: "2px",
                borderLeftColor: "rgba(212,175,55,0.45)",
                background: "linear-gradient(135deg, rgba(22,28,56,0.92) 0%, rgba(10,14,39,0.97) 100%)",
              }}
            >
              {/* ── Top summary row (desktop) ── */}
              <div
                className="hidden lg:grid items-start px-4 pt-4 pb-3"
                style={{ gridTemplateColumns: "100px 1fr 210px 170px 90px", gap: "1rem" }}
              >
                {/* Code + indicator */}
                <div className="flex flex-col items-start gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <div
                    className="w-14 h-9 rounded flex items-center justify-center"
                    style={{ border: "1px solid rgba(212,175,55,0.3)", background: "#080d1f" }}
                  >
                    <span className="font-mono text-[10px] font-bold text-[#d4af37]">
                      {companyCode(job.company)}
                    </span>
                  </div>
                </div>

                {/* Role + company name */}
                <div>
                  <div className="font-bold text-[#f0ede8] text-[15px] leading-snug">{job.role}</div>
                  <div className="font-mono text-[11px] text-[#4b5563] mt-1">{job.company}</div>
                </div>

                {/* Location */}
                <div className="font-mono text-xs text-[#4b5563] pt-0.5">{job.location}</div>

                {/* Dates */}
                <div className="font-mono text-xs text-[#4b5563] pt-0.5">
                  {job.startDate} — {job.endDate}
                </div>

                {/* Status */}
                <div className="pt-0.5">
                  <span
                    className="font-mono text-[10px] font-bold uppercase flex items-center gap-1.5"
                    style={{ color: job.status === "ACTIVE" ? "#d4af37" : "#4b5563" }}
                  >
                    <span
                      className={`w-2 h-2 rounded-full inline-block ${job.status === "ACTIVE" ? "dot-amber-glow bg-[#d4af37]" : "bg-[#4b5563]"}`}
                    />
                    {job.status}
                  </span>
                </div>
              </div>

              {/* ── Mobile header ── */}
              <div className="lg:hidden px-4 pt-4 pb-2">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-[#f0ede8]">{job.company}</span>
                  <span className="font-mono text-[10px] font-bold text-[#d4af37]">● {job.status}</span>
                </div>
                <div className="font-mono text-xs text-[#4b5563]">
                  {job.location} · {job.startDate} — {job.endDate}
                </div>
              </div>

              {/* ── Inner role timeline ── */}
              <div className="px-4 pb-6 lg:pl-[116px] pt-1">
                <div className="relative">
                  {/* Animated flowing dashed line */}
                  {job.promotions && job.promotions.length > 0 && (
                    <div
                      className="absolute timeline-dash rounded-sm"
                      style={{ left: "5px", top: "22px", bottom: "48px", width: "2px" }}
                    />
                  )}

                  {/* ── Current role ── */}
                  <div className="flex items-start gap-3 mb-1">
                    {/* Glowing amber dot */}
                    <div
                      className="w-3 h-3 rounded-full bg-[#d4af37] flex-shrink-0 mt-1 z-10 dot-amber-glow"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <BarsIcon />
                        <span className="font-bold text-[#f0ede8] text-sm">{job.role}</span>
                        <span
                          className="font-mono text-[10px] px-2 py-0.5 rounded"
                          style={{ border: "1px solid rgba(212,175,55,0.6)", color: "#d4af37" }}
                        >
                          CURRENT
                        </span>
                        {job.promotions && (
                          <span className="font-mono text-[10px] text-[#4b5563]">
                            (Promoted {job.promotions[0].endDate})
                          </span>
                        )}
                      </div>

                      <div className="font-mono text-[11px] text-[#4b5563] mb-3">
                        {job.promotions ? job.promotions[0].endDate : job.startDate} — {job.endDate}
                      </div>

                      <ul className="space-y-2 mb-4">
                        {job.responsibilities.map((r, i) => (
                          <li key={i} className="flex gap-2 text-sm">
                            <span className="text-[#4b5563] flex-shrink-0 mt-0.5">○</span>
                            <span className="text-[#9ca3af] leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── PROMOTED badge ── */}
                  {job.promotions && job.promotions.length > 0 && (
                    <div className="ml-6 my-5">
                      <span
                        className="font-mono text-[10px] px-3 py-1 rounded-full inline-flex items-center gap-1.5"
                        style={{ border: "1px solid rgba(212,175,55,0.4)", color: "rgba(212,175,55,0.75)" }}
                      >
                        ▲ PROMOTED
                      </span>
                    </div>
                  )}

                  {/* ── Previous roles ── */}
                  {job.promotions?.map((prev, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {/* Green glowing dot for previous role */}
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0 mt-1 z-10 dot-green-glow"
                        style={{ background: "transparent", border: "2px solid #22c55e" }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <BarsIcon />
                          <span className="font-bold text-[#c9c5be] text-sm">{prev.role}</span>
                        </div>

                        <div className="font-mono text-[11px] text-[#4b5563] mb-3">
                          {prev.startDate} — {prev.endDate}
                        </div>

                        <ul className="space-y-2">
                          {prev.responsibilities.map((r, j) => (
                            <li key={j} className="flex gap-2 text-sm">
                              <span className="text-[#4b5563] flex-shrink-0 mt-0.5">○</span>
                              <span className="text-[#6b7280] leading-relaxed">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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



