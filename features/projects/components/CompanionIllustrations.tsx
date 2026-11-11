/**
 * SVG graphic for the Avery Trading Companion project card.
 * Colors come from the @theme tokens (text-white, text-companion-line).
 */

/** Avery Trading Companion — logo mark: rising price line with trailing stop */
export function CompanionIllustration(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
    >
      <polyline
        points="8,66 36,38 56,56 92,18"
        stroke="currentColor"
        className="text-white"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="8,86 36,58 56,76 92,38"
        stroke="currentColor"
        className="text-companion-line"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
