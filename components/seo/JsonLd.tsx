import type { JsonLdGraph } from "@/lib/structured-data";

interface JsonLdProps {
  data: JsonLdGraph;
}

/**
 * Renders structured data as a JSON-LD script tag.
 * "<" is escaped so the payload can never close the script tag (XSS guard).
 */
export function JsonLd({ data }: JsonLdProps): React.JSX.Element {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
