interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <span className="text-xs uppercase tracking-[0.25em] text-primary font-sans font-medium">
      {label}
    </span>
  );
}
