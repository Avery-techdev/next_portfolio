const MAX_YEARS = 5;
// 24px matches h-6 (bar height) → gives a true 45° angle on both ends
const ANGLE_OFFSET = 24;

interface SkillBarProps {
  years: number;
  label: string;
  /** Hex brand color for the skill, e.g. "#E34F26" */
  color: string;
}

export function SkillBar({
  years,
  label,
  color,
}: SkillBarProps) {
  const percent = Math.min(
    Math.round((years / MAX_YEARS) * 100),
    100,
  );

  return (
    <div
      role="progressbar"
      aria-valuenow={years}
      aria-valuemin={0}
      aria-valuemax={MAX_YEARS}
      aria-label={`${label}: ${years} von ${MAX_YEARS} Jahren Erfahrung`}
      className="relative h-6 bg-edge"
      style={{
        // Parallelogram: both left and right ends angled at 45°.
        // clip-path on parent clips all children — no overflow-hidden needed.
        clipPath: `polygon(${ANGLE_OFFSET}px 0, 100% 0, calc(100% - ${ANGLE_OFFSET}px) 100%, 0 100%)`,
      }}
    >
      {/* Brand-colored fill — dark left edge fading to full brand color.
          Inline style justified: dynamic hex value per skill, not a static Tailwind token.
          clip-path angles the right edge to match the track parallelogram. */}
      <div
        className="absolute inset-y-0 left-0"
        style={{
          width: `${percent}%`,
          background: `linear-gradient(to right, ${color}44, ${color})`,
          clipPath: `polygon(0 0, 100% 0, calc(100% - ${ANGLE_OFFSET}px) 100%, 0 100%)`,
        }}
      >
        {/* Glossy shine overlay — top half */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/25 to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
