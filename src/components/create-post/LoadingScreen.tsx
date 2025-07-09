import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { UrbanBackground } from "./UrbanBackground";
import { ContentSkeleton } from "@/components/ui/skeleton";

interface LoadingScreenProps {
  textureImageUrl?: string;
}

export const LoadingScreen = ({ textureImageUrl }: LoadingScreenProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <UrbanBackground textureImageUrl={textureImageUrl} />

      <Navigation />
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="py-20">
            <ContentSkeleton />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};