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
    <div>
      <h2 className="font-display text-[30px] font-normal text-ink sm:text-[36px]">Stack</h2>
      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
        {TOOLS.map((tool) => (
          <div
            key={tool.name}
            className="group flex flex-col items-center bg-white p-6 text-center shadow-[0_4px_14px_-2px_rgba(0,0,0,0.14)]"
          >
            <picture>
              <source srcSet={`/media/stack-${tool.icon}.webp`} type="image/webp" />
              <img
                src={`/media/stack-${tool.icon}.png`}
                alt={`${tool.name} logo`}
                className="h-14 w-14 transition-transform duration-200 group-hover:scale-110"
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
