/**
 * FlowForge — logo mark (two workflow nodes connected by an elbow line),
 * taken from the FlowForge favicon. White via the text-white token.
 */
export function FlowForgeIllustration(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
    >
      <g
        stroke="currentColor"
        className="text-white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
      </g>
    </svg>
  );
}
