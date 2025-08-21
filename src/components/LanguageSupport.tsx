import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, Globe, MessageCircle } from "lucide-react";

const LanguageSupport = () => {
  const languages = [
    { name: "English", flag: "🇺🇸", sample: "How are you feeling today?" },
    { name: "Tamil", flag: "🇮🇳", sample: "இன்று உங்கள் உணர்வு எப்படி இருக்கிறது?" },
    { name: "Hindi", flag: "🇮🇳", sample: "आज आप कैसा महसूस कर रहे हैं?" },
    { name: "Chinese", flag: "🇨🇳", sample: "你今天感觉怎么样?" },
    { name: "Japanese", flag: "🇯🇵", sample: "今日の気分はいかがですか？" },
    { name: "Russian", flag: "🇷🇺", sample: "Как вы себя чувствуете сегодня?" },
    { name: "Tanglish", flag: "🇮🇳", sample: "Today epdi feel panniyirukinga?" },
    { name: "Spanish", flag: "🇪🇸", sample: "¿Cómo te sientes hoy?" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-calm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 shadow-soft">
              <Globe className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Speak in Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Native Language</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI understands and responds in multiple languages including regional dialects like Tanglish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((language, index) => (
            <Card key={language.name} className="group hover:shadow-soft transition-gentle hover:-translate-y-1">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">{language.flag}</span>
                    {language.name}
                  </span>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-gentle">
                    <Volume2 className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "{language.sample}"
                </p>
                <Button variant="calm" size="sm" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Try {language.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="group">
            <Globe className="w-5 h-5 mr-2 group-hover:animate-spin" />
            Experience Multilingual Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LanguageSupport;