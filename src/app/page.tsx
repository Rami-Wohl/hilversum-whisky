// import { TextLink } from "~/components/nav/text-link";
import { ContentSection } from "~/components/ui/content-section";
// import { ResponsiveImage } from "~/components/ui/responsive-image";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <ContentSection title="welkom">
        <p>
          Welkom op de website van de <b>Whiskey Club Hilversum</b>. Deze site
          is onder constructie, zoals je ziet. Nog even geduld...
        </p>
      </ContentSection>
    </div>
  );
}
