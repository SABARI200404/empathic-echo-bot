import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Shield, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const AuthSection = () => {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(email, password);
      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <section className="py-20 px-6 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white shadow-warm">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Welcome Back!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            You're already signed in. Access your dashboard to continue your wellness journey.
          </p>
          <Button 
            onClick={() => navigate("/dashboard")} 
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
          >
            Go to Dashboard
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white shadow-warm">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Secure & 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Private Access</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your journey to emotional wellness with secure authentication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mobile Number Login */}
          <Card className="shadow-soft hover:shadow-warm transition-gentle">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Mobile Login</CardTitle>
              <p className="text-muted-foreground">Quick access with your phone number</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="flex">
                  <select className="flex h-10 w-20 rounded-l-md border border-r-0 border-input bg-background px-3 py-2 text-sm">
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                    <option>+86</option>
                  </select>
                  <Input 
                    id="mobile"
                    placeholder="9876543210"
                    className="rounded-l-none"
                  />
                </div>
              </div>
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => navigate("/auth")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Started
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We'll send you a verification code
              </p>
            </CardContent>
          </Card>

          {/* Email Login */}
          <Card className="shadow-soft hover:shadow-warm transition-gentle">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Email Login</CardTitle>
              <p className="text-muted-foreground">Sign in with your Gmail or email</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" variant="default" className="w-full" disabled={loading}>
                  <Mail className="w-4 h-4 mr-2" />
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </form>
              <div className="text-center mt-4">
                <Button 
                  variant="link" 
                  className="text-sm"
                  onClick={() => navigate("/auth")}
                >
                  Need an account? Sign up here
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm">
            <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">End-to-End Encryption</h3>
            <p className="text-sm text-muted-foreground">Your conversations are fully encrypted</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm">
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">HIPAA Compliant</h3>
            <p className="text-sm text-muted-foreground">Medical-grade privacy protection</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Multi-Factor Auth</h3>
            <p className="text-sm text-muted-foreground">Extra security with OTP verification</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;