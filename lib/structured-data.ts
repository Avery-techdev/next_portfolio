import { profileUrls, siteUrl } from "@/lib/site";

type JsonLdNode = Record<string, unknown>;

export interface JsonLdGraph {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
}

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

const homeUrl = `${siteUrl}/`;
const siteName = "Avery Hauschild";
const description =
  "Frontend developer passionate about building beautiful, accessible web apps that users love.";

const sameAs = [
  profileUrls.github,
  profileUrls.linkedIn,
  profileUrls.devTo,
  profileUrls.averyLabs,
];

/** Structured data for the homepage: who the site owner is and what the site is. */
export const homeJsonLd: JsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Avery Hauschild",
      jobTitle: "Frontend Developer",
      description,
      url: homeUrl,
      image: `${siteUrl}/Avery.jpeg`,
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Vue.js",
        "Web accessibility",
        "Supabase",
      ],
      sameAs,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteName,
      url: homeUrl,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${homeUrl}#profile`,
      url: homeUrl,
      name: "Portfolio | Avery Hauschild — Frontend Developer",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
  ],
};
