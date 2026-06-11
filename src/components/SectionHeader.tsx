interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <div className={`max-w-[720px] ${center ? "mx-auto text-center" : ""} mb-15`}>
      <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-[#ce8f5b] mb-3.5">
        <span className="w-6 h-[2px] bg-gradient-to-r from-[#ce8f5b] to-[#feb880] rounded-full" />
        {eyebrow}
        <span className="w-6 h-[2px] bg-gradient-to-r from-[#feb880] to-[#ce8f5b] rounded-full" />
      </span>
      <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4 text-[#181d3a]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[17px] text-[#46464d] leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
