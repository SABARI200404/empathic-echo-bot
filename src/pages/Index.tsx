import HeroSection from "@/components/HeroSection";
import LanguageSupport from "@/components/LanguageSupport";
import EmotionDetection from "@/components/EmotionDetection";
import AuthSection from "@/components/AuthSection";
import PrivateJournal from "@/components/PrivateJournal";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta */}
      <head>
        <title>EmoAI - Your Multilingual Emotional Support Companion</title>
        <meta name="description" content="AI-powered emotional support with voice assistance, face emotion detection, and multilingual chat in Tamil, Hindi, English, Chinese, Japanese and more. Private wellness journal included." />
        <meta name="keywords" content="emotional support, AI companion, multilingual chat, voice therapy, emotion detection, mental wellness, depression support" />
      </head>

      <main>
        <HeroSection />
        <LanguageSupport />
        <EmotionDetection />
        <PrivateJournal />
        <AuthSection />
      </main>
    </div>
  );
};

export default Index;
