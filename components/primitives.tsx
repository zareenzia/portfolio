export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-6 h-px bg-primary-accent/60" />
      <span className="font-mono text-xs font-semibold tracking-widest text-primary-accent uppercase">
        {children}
      </span>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 text-xs bg-primary-card rounded border border-primary-surface text-primary-text">
      {children}
    </span>
  );
}

export function SectionDivider() {
  return <div className="h-px bg-primary-surface/60 my-8" />;
}

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
}
