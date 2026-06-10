interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <div className={`max-w-[720px] ${center ? "mx-auto text-center" : ""} mb-15`}>
      <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-accent mb-3.5">
        <span className="w-6 h-[2px] bg-gradient-to-r from-accent to-gold rounded-full" />
        {eyebrow}
        <span className="w-6 h-[2px] bg-gradient-to-r from-gold to-accent rounded-full" />
      </span>
      <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight mb-4 text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[17px] text-text-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
