import type { Skill } from "../types";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const {
    name,
    yearsOfExperience,
    proficiency,
    color,
    icon: Icon,
  } = skill;
  const pct = Math.min(proficiency, 100);

  return (
    <article className="flex flex-col gap-5 rounded-xl border border-edge bg-canvas-elevated p-6">
      {/* Header: icon box + text */}
      <div className="flex items-center gap-4">
        {/* Brand-tinted icon box — inline style justified: dynamic hex per skill */}
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${color}26` }}
          aria-hidden="true"
        >
          <Icon className="h-7 w-7" style={{ color }} />
        </div>
        <div>
          <p className="text-base font-bold text-ink">
            {name}
          </p>
          <p className="text-sm text-ink-muted">
            {yearsOfExperience} Years Experience
          </p>
        </div>
      </div>

      {/* Progress bar + percentage */}
      <div className="flex flex-col gap-1.5">
        <div
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency: ${pct}%`}
          className="h-3 w-full overflow-hidden rounded-full bg-edge"
        >
          {/* Inline style justified: dynamic brand color per skill */}
          <div
            className="h-full rounded-full"
            style={{
              width: `${pct}%`,
              backgroundColor: color,
            }}
          />
        </div>
        <p className="self-end text-sm text-ink-muted">
          {pct}%
        </p>
      </div>
    </article>
  );
}
