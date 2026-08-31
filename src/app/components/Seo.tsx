import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.handsfreetradie.com.au";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath: string;
  jsonLd?: Record<string, unknown>;
}

export function Seo({ title, description, canonicalPath, jsonLd }: SeoProps) {
  const url = canonicalPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
