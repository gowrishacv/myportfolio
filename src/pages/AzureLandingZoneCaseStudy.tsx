import { useMemo } from "react";

import CaseStudyMarkdown from "@/components/CaseStudyMarkdown";

const getMarkdownUrl = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}azure-landing-zone-case-study/index.md`;
};

const AzureLandingZoneCaseStudy = () => {
  const mdUrl = useMemo(() => getMarkdownUrl(), []);
  const initialAnchorId = useMemo(
    () => window.location.hash?.slice(1) || "",
    [],
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <CaseStudyMarkdown
              mdUrl={mdUrl}
              initialAnchorId={initialAnchorId}
              scrollMode="window"
              renderHeader
              hideFirstHeading
              hideTableOfContents
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AzureLandingZoneCaseStudy;
