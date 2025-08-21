import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Mic, Heart, BarChart3, Calendar, Lock } from "lucide-react";

const PrivateJournal = () => {
  const journalEntries = [
    {
      date: "Today",
      mood: "Calm",
      moodColor: "bg-blue-100 text-blue-800",
      preview: "Had a good conversation with my AI companion...",
      type: "text"
    },
    {
      date: "Yesterday",
      mood: "Anxious",
      moodColor: "bg-orange-100 text-orange-800",
      preview: "Voice recording - 2:30 minutes",
      type: "voice"
    },
    {
      date: "2 days ago",
      mood: "Happy",
      moodColor: "bg-green-100 text-green-800",
      preview: "Feeling much better after the guided meditation...",
      type: "text"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 shadow-soft">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Private
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Emotional Journal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A secure space to record, analyze and track your emotional journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Journal Entries */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Recent Entries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {journalEntries.map((entry, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-gentle">
                    <div className="p-2 rounded-full bg-primary/10">
                      {entry.type === 'voice' ? (
                        <Mic className="w-4 h-4 text-primary" />
                      ) : (
                        <BookOpen className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{entry.date}</span>
                        <Badge className={entry.moodColor}>
                          {entry.mood}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{entry.preview}</p>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  View All Entries
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* New Entry Panel */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  New Entry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="calm" className="flex-1">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Write
                  </Button>
                  <Button variant="warm" className="flex-1">
                    <Mic className="w-4 h-4 mr-2" />
                    Record
                  </Button>
                </div>
                
                <Textarea 
                  placeholder="How are you feeling today? Express your thoughts..."
                  className="min-h-24"
                />
                
                <Button variant="default" className="w-full">
                  Save Entry
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Mood Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">This Week</span>
                    <Badge className="bg-green-100 text-green-800">Improving</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Happy</span>
                      <span>60%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-full w-3/5 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Calm</span>
                      <span>40%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-full w-2/5 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Anxious</span>
                      <span>25%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-full w-1/4 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Privacy Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-gentle">
            <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">End-to-End Encrypted</h3>
            <p className="text-sm text-muted-foreground">Only you can access your entries</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-gentle">
            <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">AI Analysis</h3>
            <p className="text-sm text-muted-foreground">Get insights into your emotional patterns</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-gentle">
            <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Personalized Support</h3>
            <p className="text-sm text-muted-foreground">Tailored recommendations based on your entries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateJournal;