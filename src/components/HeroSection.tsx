import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Mic, Shield } from "lucide-react";
import heroImage from "@/assets/hero-emotional-support.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm shadow-glow">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your AI
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              {" "}Emotional{" "}
            </span>
            Companion
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience multilingual emotional support through AI voice assistance, 
            face emotion detection, and personalized wellness tracking
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Start Talking
            </Button>
            <Button variant="outline-hero" size="lg" className="group">
              <Mic className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Voice Support
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/80">
            <div className="text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Multi-Language Chat</p>
            </div>
            <div className="text-center">
              <Mic className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Voice Analysis</p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Emotion Tracking</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Private & Secure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;