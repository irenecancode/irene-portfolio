const TOOLS = [
  { name: "Claude Code", desc: "Design Implementation", icon: "claude-code" },
  { name: "VS Code", desc: "Building", icon: "vscode" },
  { name: "Figma", desc: "Prototyping", icon: "figma" },
  { name: "GitHub", desc: "Version Control", icon: "github" },
  { name: "Gemini CLI", desc: "Code Review", icon: "gemini-cli" },
  { name: "iTerm", desc: "Environment Control", icon: "iterm" },
  { name: "Lovable", desc: "Rapid Prototyping", icon: "lovable" },
  { name: "Miro", desc: "Strategic Mapping", icon: "miro" },
  { name: "Procreate", desc: "Illustration", icon: "procreate" },
];

export function Stack() {
  return (
    <div className="rounded-md bg-white p-8 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)] sm:p-10">
      <h2 className="font-sans text-[30px] font-semibold text-accent">Stack</h2>
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
        {TOOLS.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center text-center">
            <picture>
              <source srcSet={`/media/stack-${tool.icon}.webp`} type="image/webp" />
              <img
                src={`/media/stack-${tool.icon}.png`}
                alt={`${tool.name} logo`}
                className="h-14 w-14"
                loading="lazy"
              />
            </picture>
            <p className="mt-3 text-lg font-semibold text-ink">{tool.name}</p>
            <p className="text-base text-ink">{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
