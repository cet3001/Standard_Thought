
interface RobotsDirectivesProps {
  noIndex: boolean;
}

export const RobotsDirectives = ({ noIndex }: RobotsDirectivesProps) => {
  // Enhanced robots content - ENSURE INDEXING for public pages
  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  return (
    <>
      {/* CRITICAL: Ensure proper indexing directives */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
    </>
  );
};
