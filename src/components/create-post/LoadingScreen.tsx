import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { UrbanBackground } from "./UrbanBackground";

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
          <div className="text-center py-20">
            <div className="text-6xl font-permanent-marker transform -rotate-12 drop-shadow-lg mb-4" style={{
              color: 'transparent',
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'pearlescent 3s ease-in-out infinite'
            }}>
              Loading...
            </div>
            <p className="text-brand-black/60 dark:text-brand-cream/60">Setting up your workspace</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};