import type { Motif } from "@/data/projects";
import { cn } from "@/lib/utils";

const ACCENT = "var(--color-accent)";
const SIGNAL = "var(--color-signal)";
const LINE = "rgba(237, 237, 230, 0.16)";
const FAINT = "rgba(237, 237, 230, 0.07)";

// Deterministic pseudo-random numbers so covers render identically on server and client.
function seeded(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 10000) / 10000;
  };
}

function Court() {
  // Half court seen from the baseline, with a make arcing into the rim.
  const shot = Array.from({ length: 13 }, (_, i) => {
    const t = i / 12;
    const x = 70 + t * 130;
    const y = 200 - Math.sin(t * Math.PI * 0.92) * 150 + t * 32;
    return { x, y };
  });
  return (
    <>
      <rect x="20" y="20" width="360" height="210" fill="none" stroke={LINE} />
      <path d="M 120 20 L 120 120 L 280 120 L 280 20" fill="none" stroke={LINE} />
      <path d="M 145 120 A 55 55 0 0 0 255 120" fill="none" stroke={LINE} />
      <path d="M 50 20 L 50 70 A 150 150 0 0 0 350 70 L 350 20" fill="none" stroke={LINE} />
      <line x1="175" y1="38" x2="225" y2="38" stroke={LINE} strokeWidth="2" />
      <circle cx="200" cy="52" r="12" fill="none" stroke={ACCENT} strokeWidth="2.5" />
      {shot.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === shot.length - 1 ? 0 : 2.2} fill={ACCENT} opacity={0.25 + i * 0.06} />
      ))}
      <circle cx="70" cy="200" r="11" fill={ACCENT} />
      <path d="M 59 200 L 81 200 M 70 189 L 70 211" stroke="#0b0b0d" strokeWidth="1.5" opacity="0.6" />
      <rect x="186" y="40" width="28" height="24" fill="none" stroke={SIGNAL} strokeDasharray="3 3" />
    </>
  );
}

function ArcGrid({ seed }: { seed: string }) {
  const rand = seeded(seed);
  const palette = [ACCENT, SIGNAL, "#5b8def", "#e8d44d"];
  const cols = 14;
  const rows = 8;
  const size = 22;
  const ox = (400 - cols * size) / 2;
  const oy = (250 - rows * size) / 2;
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const v = rand();
      const fill = v > 0.86 ? palette[Math.floor(rand() * palette.length)] : v > 0.8 ? LINE : "transparent";
      cells.push(
        <rect key={`${r}-${c}`} x={ox + c * size + 1} y={oy + r * size + 1} width={size - 2} height={size - 2} rx="2" fill={fill} stroke={FAINT} />,
      );
    }
  }
  return <>{cells}</>;
}

function Board() {
  const tiles = [];
  const n = 9;
  const s = 22;
  const ox = 101;
  const oy = 26;
  for (let i = 0; i < n; i++) {
    tiles.push([ox + i * s, oy], [ox + i * s, oy + (n - 1) * s], [ox, oy + i * s], [ox + (n - 1) * s, oy + i * s]);
  }
  const owned = new Set([3, 6, 9, 14, 22, 27, 30]);
  return (
    <>
      {tiles.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width={s - 2} height={s - 2} fill={owned.has(i) ? ACCENT : "transparent"} opacity={owned.has(i) ? 0.85 : 1} stroke={LINE} />
      ))}
      <rect x="160" y="85" width="34" height="34" rx="6" fill="none" stroke={SIGNAL} strokeWidth="2" />
      <circle cx="170" cy="95" r="3" fill={SIGNAL} />
      <circle cx="184" cy="109" r="3" fill={SIGNAL} />
      <rect x="204" y="105" width="34" height="34" rx="6" fill="none" stroke={ACCENT} strokeWidth="2" />
      <circle cx="221" cy="122" r="3" fill={ACCENT} />
    </>
  );
}

function Curve() {
  const pts = Array.from({ length: 30 }, (_, i) => {
    const x = 50 + i * 10.5;
    const y = 60 + 130 * Math.exp(-i / 7) * 1 + Math.sin(i * 1.7) * 6 * Math.exp(-i / 12);
    return [x, 250 - y] as const;
  });
  const d = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="50" x2="360" y1={50 + i * 45} y2={50 + i * 45} stroke={FAINT} />
      ))}
      <line x1="50" y1="30" x2="50" y2="200" stroke={LINE} />
      <line x1="50" y1="200" x2="365" y2="200" stroke={LINE} />
      <path d={d} fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinejoin="round" />
      {pts.filter((_, i) => i % 6 === 0).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#0b0b0d" stroke={ACCENT} strokeWidth="2" />
      ))}
      <path d={`M 50 ${250 - 64} L 360 ${250 - 64}`} stroke={SIGNAL} strokeDasharray="5 5" />
    </>
  );
}

function Swerve() {
  const modules = [
    [130, 70, -30],
    [270, 70, -30],
    [130, 180, -30],
    [270, 180, -30],
  ] as const;
  return (
    <>
      <rect x="110" y="50" width="180" height="150" rx="10" fill="none" stroke={LINE} strokeWidth="2" />
      <rect x="160" y="95" width="80" height="60" rx="4" fill="none" stroke={FAINT} />
      {modules.map(([x, y, a], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${a})`}>
          <rect x="-8" y="-17" width="16" height="34" rx="4" fill={ACCENT} />
          <line x1="0" y1="0" x2="0" y2="-44" stroke={SIGNAL} strokeWidth="2" />
          <path d="M -5 -38 L 0 -46 L 5 -38" fill="none" stroke={SIGNAL} strokeWidth="2" />
        </g>
      ))}
      <circle cx="200" cy="125" r="6" fill="none" stroke={ACCENT} strokeWidth="2" />
    </>
  );
}

function Phone() {
  return (
    <>
      <rect x="150" y="18" width="100" height="214" rx="16" fill="none" stroke={LINE} strokeWidth="2" />
      <rect x="185" y="26" width="30" height="5" rx="2.5" fill={LINE} />
      <circle cx="200" cy="105" r="38" fill="none" stroke={FAINT} strokeWidth="8" />
      <path d="M 200 67 A 38 38 0 1 1 164 117" fill="none" stroke={ACCENT} strokeWidth="8" strokeLinecap="round" />
      <rect x="166" y="160" width="68" height="8" rx="4" fill={LINE} />
      <rect x="166" y="176" width="46" height="8" rx="4" fill={FAINT} />
      <rect x="166" y="198" width="68" height="18" rx="6" fill={ACCENT} opacity="0.85" />
    </>
  );
}

function Browser() {
  return (
    <>
      <rect x="45" y="30" width="310" height="190" rx="10" fill="none" stroke={LINE} strokeWidth="2" />
      <line x1="45" y1="56" x2="355" y2="56" stroke={LINE} />
      {[62, 76, 90].map((x) => (
        <circle key={x} cx={x} cy="43" r="4" fill={LINE} />
      ))}
      <rect x="66" y="74" width="110" height="12" rx="3" fill={ACCENT} />
      <rect x="66" y="96" width="160" height="6" rx="3" fill={LINE} />
      <rect x="66" y="108" width="130" height="6" rx="3" fill={FAINT} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={66 + i * 96} y="132" width="82" height="66" rx="6" fill="none" stroke={i === 0 ? ACCENT : LINE} />
      ))}
    </>
  );
}

function Track() {
  return (
    <>
      <path
        d="M 70 180 C 40 120, 90 50, 170 60 S 270 120, 320 70 S 380 170, 300 195 S 120 230, 70 180 Z"
        fill="none"
        stroke={LINE}
        strokeWidth="18"
        strokeLinejoin="round"
      />
      <path
        d="M 70 180 C 40 120, 90 50, 170 60 S 270 120, 320 70 S 380 170, 300 195 S 120 230, 70 180 Z"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeDasharray="10 8"
      />
      <rect x="140" y="196" width="6" height="22" fill={SIGNAL} />
      <circle cx="320" cy="70" r="6" fill={ACCENT} />
    </>
  );
}

function Tiles({ seed }: { seed: string }) {
  const rand = seeded(seed);
  const colors = [ACCENT, SIGNAL, "#e05a4f", LINE];
  return (
    <>
      {Array.from({ length: 7 }, (_, i) => {
        const x = 52 + i * 44;
        const lift = i === 3 ? -16 : 0;
        const color = colors[Math.floor(rand() * colors.length)];
        return (
          <g key={i} transform={`translate(${x} ${92 + lift})`}>
            <rect width="38" height="56" rx="5" fill="#16161a" stroke={i === 3 ? ACCENT : LINE} strokeWidth={i === 3 ? 2 : 1} />
            <text x="19" y="34" textAnchor="middle" fontSize="20" fontWeight="700" fill={color} fontFamily="var(--font-archivo)">
              {1 + Math.floor(rand() * 13)}
            </text>
          </g>
        );
      })}
      <line x1="40" y1="166" x2="360" y2="166" stroke={LINE} />
    </>
  );
}

function Terminal() {
  const lines = [140, 210, 90, 180, 120];
  return (
    <>
      <rect x="55" y="35" width="290" height="180" rx="10" fill="none" stroke={LINE} strokeWidth="2" />
      {lines.map((w, i) => (
        <g key={i}>
          <text x="75" y={78 + i * 26} fontSize="14" fill={i === lines.length - 1 ? ACCENT : SIGNAL} fontFamily="var(--font-mono)">
            ›
          </text>
          <rect x="92" y={68 + i * 26} width={w} height="8" rx="4" fill={i === lines.length - 1 ? ACCENT : LINE} />
        </g>
      ))}
    </>
  );
}

export default function ProjectCover({
  motif,
  seed,
  className,
}: {
  motif: Motif;
  seed: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 250"
      role="presentation"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
      preserveAspectRatio="xMidYMid meet"
    >
      {motif === "court" && <Court />}
      {motif === "arcgrid" && <ArcGrid seed={seed} />}
      {motif === "board" && <Board />}
      {motif === "curve" && <Curve />}
      {motif === "swerve" && <Swerve />}
      {motif === "phone" && <Phone />}
      {motif === "browser" && <Browser />}
      {motif === "track" && <Track />}
      {motif === "tiles" && <Tiles seed={seed} />}
      {motif === "terminal" && <Terminal />}
    </svg>
  );
}
