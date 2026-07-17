export function Lead({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`font-display max-w-3xl text-[28px] font-medium text-ink ${className}`}>
      {children}
    </h3>
  );
}
