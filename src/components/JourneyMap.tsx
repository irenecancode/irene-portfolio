const ORANGE = "#CC513B";
const NAVY = "#3C5889";
const BLUE = "#D1DCF0";
const STROKE = 10;

function Tick({
  x,
  y,
  angle = 0,
  color,
}: {
  x: number;
  y: number;
  angle?: number;
  color: string;
}) {
  return (
    <rect
      x={x - 4}
      y={y - 14}
      width={8}
      height={28}
      rx={4}
      fill={color}
      transform={`rotate(${angle} ${x} ${y})`}
    />
  );
}

function Station({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r={13} fill="white" stroke="black" strokeWidth={6} />;
}

export function JourneyMap() {
  return (
    <svg
      viewBox="0 0 1440 800"
      className="h-auto w-full"
      role="img"
      aria-label="A subway-map style diagram connecting Irene's location, field of study, cross-disciplinary experience, skills, and specialties: San Francisco; Human-computer Interaction Design; Psychological Research (cross-disciplinary experience); Internal Tools, Accessibility Design, Inclusive UX Research (specialty/skills); 0-to-1 Product Design, Agentic AI, Design System (specialty); Enterprise Platform, Physical AI, Front-end Implementation, Data-dense Dashboard, Rapid Prototyping"
    >
      {/* Light blue line: Enterprise Platform -> ... -> Rapid Prototyping */}
      <path
        d="M 80 710 L 955 710 L 1035 630 L 1035 610"
        fill="none"
        stroke={BLUE}
        strokeWidth={STROKE}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Navy line: (start) -> Psychological Research -> into dumbbell */}
      <path
        d="M 80 340 L 390 340 L 430 315 L 596 315"
        fill="none"
        stroke={NAVY}
        strokeWidth={STROKE}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Orange line A: San Francisco -> HCI Design -> into dumbbell -> Accessibility Design -> Inclusive UX Research */}
      <path
        d="M 80 190 L 640 190 L 640 445 L 1035 445"
        fill="none"
        stroke={ORANGE}
        strokeWidth={STROKE}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Orange line B: Design System -> Agentic AI -> 0-to-1 Product Design */}
      <path
        d="M 1035 500 L 1035 245 L 1360 245"
        fill="none"
        stroke={ORANGE}
        strokeWidth={STROKE}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Capsule connector: Design System <-> Rapid Prototyping */}
      <path d="M 1035 500 L 1035 610" fill="none" stroke="white" strokeWidth={22} />
      <path d="M 1035 500 L 1035 610" fill="none" stroke="black" strokeWidth={6} />

      {/* Ticks */}
      <Tick x={235} y={190} color={ORANGE} />
      <Tick x={495} y={190} color={ORANGE} />
      <Tick x={890} y={445} color={ORANGE} angle={90} />
      <Tick x={1185} y={245} color={ORANGE} />
      <Tick x={1035} y={350} color={ORANGE} angle={90} />
      <Tick x={260} y={710} color={BLUE} />
      <Tick x={490} y={710} color={BLUE} />
      <Tick x={720} y={710} color={BLUE} />

      {/* Stations */}
      <circle cx={596} cy={315} r={13} fill="white" stroke="black" strokeWidth={6} />
      <circle cx={640} cy={315} r={13} fill="white" stroke="black" strokeWidth={6} />
      <line x1={596} y1={315} x2={640} y2={315} stroke="black" strokeWidth={6} />
      <Station x={640} y={445} />
      <Station x={1035} y={500} />
      <Station x={1035} y={610} />

      {/* Labels */}
      <g fontFamily="var(--font-roboto), sans-serif" fill="black">
        <text x={235} y={130} fontSize={15} textAnchor="middle">Location</text>
        <text x={235} y={160} fontSize={26} fontWeight={600} textAnchor="middle">San Francisco</text>

        <text x={495} y={75} fontSize={15} textAnchor="middle">Field of Study</text>
        <text fontSize={26} fontWeight={600} textAnchor="middle">
          <tspan x={495} y={102}>Human-computer</tspan>
          <tspan x={495} y={132}>Interaction Design</tspan>
        </text>

        <text fontSize={15} textAnchor="middle">
          <tspan x={460} y={370}>Cross-disciplinary</tspan>
          <tspan x={460} y={388}>experience</tspan>
        </text>
        <text x={460} y={415} fontSize={26} fontWeight={600} textAnchor="middle">Psychological Research</text>

        <text x={745} y={288} fontSize={15} textAnchor="middle">Specialty</text>
        <text x={745} y={312} fontSize={26} fontWeight={600} textAnchor="middle">Internal Tools</text>

        <text x={680} y={495} fontSize={15} textAnchor="middle">Skills</text>
        <text fontSize={26} fontWeight={600} textAnchor="middle">
          <tspan x={680} y={521}>Accessibility</tspan>
          <tspan x={680} y={551}>Design</tspan>
        </text>

        <text fontSize={26} fontWeight={600} textAnchor="middle">
          <tspan x={898} y={521}>Inclusive UX</tspan>
          <tspan x={898} y={551}>Research</tspan>
        </text>

        <text fontSize={26} fontWeight={600} textAnchor="middle">
          <tspan x={1184} y={175}>0-to-1</tspan>
          <tspan x={1184} y={205}>Product Design</tspan>
        </text>

        <text x={1153} y={356} fontSize={26} fontWeight={600} textAnchor="start">Agentic AI</text>
        <text x={1060} y={496} fontSize={26} fontWeight={600} textAnchor="start">Design System</text>

        <text x={1098} y={655} fontSize={15} textAnchor="middle">Specialty</text>
        <text fontSize={26} fontWeight={600} textAnchor="middle">
          <tspan x={1098} y={681}>Rapid</tspan>
          <tspan x={1098} y={711}>Prototyping</tspan>
        </text>

        <text fontSize={26} fontWeight={600} textAnchor="middle">
          <tspan x={260} y={745}>Enterprise</tspan>
          <tspan x={260} y={775}>Platform</tspan>
        </text>
        <text x={490} y={760} fontSize={26} fontWeight={600} textAnchor="middle">Physical AI</text>
        <text fontSize={26} fontWeight={600} textAnchor="middle">
          <tspan x={720} y={745}>Front-end</tspan>
          <tspan x={720} y={775}>Implementation</tspan>
        </text>
        <text fontSize={26} fontWeight={600} textAnchor="middle">
          <tspan x={953} y={745}>Data-dense</tspan>
          <tspan x={953} y={775}>Dashboard</tspan>
        </text>
      </g>
    </svg>
  );
}
