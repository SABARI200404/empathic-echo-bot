import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LogOut, Plus, Book, BarChart3, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  mood: string | null;
  created_at: string;
}

interface Profile {
  display_name: string | null;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [journals, setJournals] = useState<JournalEntry[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else {
      fetchProfile();
      fetchJournals();
    }
  }, [user, navigate]);

  const fetchProfile = async () => {
    if (!user) return;
    
    const { data } = await supabase
      .from('profiles')
      .select('display_name')
      .eq('user_id', user.id)
      .single();
    
    setProfile(data);
  };

  const fetchJournals = async () => {
    if (!user) return;
    
    const { data } = await supabase
      .from('journals')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(10);
    
    if (data) {
      setJournals(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      const { error } = await supabase
        .from('journals')
        .insert([
          {
            user_id: user.id,
            title: title || 'Untitled Entry',
            content,
            mood: mood || null,
          }
        ]);

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Journal entry saved",
        });
        setTitle("");
        setContent("");
        setMood("");
        fetchJournals();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save journal entry",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-warm p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, {profile?.display_name || user.email}!
            </h1>
            <p className="text-muted-foreground">
              Continue your emotional wellness journey
            </p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* New Journal Entry */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5 text-primary" />
                  New Journal Entry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title (Optional)</Label>
                    <Input
                      id="title"
                      placeholder="How are you feeling today?"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mood">Mood</Label>
                    <Input
                      id="mood"
                      placeholder="e.g., Happy, Anxious, Peaceful"
                      value={mood}
                      onChange={(e) => setMood(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Your thoughts</Label>
                    <Textarea
                      id="content"
                      placeholder="Write about your feelings, experiences, or thoughts..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                      rows={6}
                    />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Saving..." : "Save Entry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Recent Entries */}
          <div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-5 h-5 text-primary" />
                  Recent Entries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {journals.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No journal entries yet. Start writing!
                  </p>
                ) : (
                  journals.map((journal) => (
                    <div
                      key={journal.id}
                      className="p-3 rounded-lg bg-muted/50 border"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-sm">{journal.title}</h4>
                        <span className="text-xs text-muted-foreground">
                          {new Date(journal.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      {journal.mood && (
                        <p className="text-xs text-primary mb-1">
                          Mood: {journal.mood}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {journal.content}
                      </p>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-soft mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Your Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Entries</span>
                  <span className="font-semibold">{journals.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-semibold">
                    {new Date(user.created_at).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;