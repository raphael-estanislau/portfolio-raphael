export function SectionLabel({
  num,
  title,
  className = "mb-8",
}: {
  num: string;
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={`flex items-center gap-3 text-lg font-semibold text-lightest lg:hidden ${className}`}
    >
      <span className="font-mono text-base text-accent">{num}.</span>
      {title}
      <span className="ml-2 h-px flex-1 bg-line" aria-hidden />
    </h2>
  );
}
