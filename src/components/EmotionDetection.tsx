import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Mic, Brain, Activity, Heart } from "lucide-react";

const EmotionDetection = () => {
  const emotions = [
    { name: "Happy", color: "bg-yellow-100 text-yellow-800", level: 85 },
    { name: "Calm", color: "bg-blue-100 text-blue-800", level: 70 },
    { name: "Anxious", color: "bg-orange-100 text-orange-800", level: 30 },
    { name: "Sad", color: "bg-gray-100 text-gray-800", level: 15 },
  ];

  const features = [
    {
      icon: Camera,
      title: "Face Emotion Detection",
      description: "Advanced ML algorithms analyze facial expressions in real-time",
      tech: "TensorFlow Lite + ML Kit"
    },
    {
      icon: Mic,
      title: "Voice Emotion Analysis",
      description: "Detect emotional states through voice tone and speech patterns",
      tech: "Spectrogram-based CNN"
    },
    {
      icon: Brain,
      title: "Text Sentiment Analysis",
      description: "Understanding emotions in written communication across languages",
      tech: "BERT + IndicNLP Models"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 shadow-soft">
              <Activity className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Advanced
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Emotion Detection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzes your emotions through multiple channels to provide personalized support
          </p>
        </div>

        {/* Live Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-6 h-6 text-primary" />
                Live Emotion Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
                  <p className="text-muted-foreground">Camera would be active here</p>
                  <p className="text-sm text-muted-foreground">Real-time face emotion detection</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {emotions.map((emotion) => (
                  <div key={emotion.name} className="flex items-center justify-between">
                    <Badge variant="secondary" className={emotion.color}>
                      {emotion.name}
                    </Badge>
                    <div className="flex-1 mx-3">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-1000 ease-out"
                          style={{ width: `${emotion.level}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{emotion.level}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="hover:shadow-soft transition-gentle">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground mb-3">{feature.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {feature.tech}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="group">
            <Activity className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Try Emotion Detection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmotionDetection;