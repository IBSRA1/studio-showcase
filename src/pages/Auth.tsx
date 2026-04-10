import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.toLowerCase() === "admin@storyweaver.education") {
      localStorage.setItem("adminPassword", password);
      navigate("/admin");
    } else {
      localStorage.setItem("readerEmail", email);
      const next = searchParams.get("next") || "/blog";
      navigate(next);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm opacity-0 animate-fade-in">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Welcome <span className="text-gradient">back</span>
            </h1>
            <p className="text-sm text-muted-foreground">Sign in to access the platform</p>
          </div>

          <div className="glass rounded-3xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">Email</label>
                <input
                  type="email"
                  className="input-clean"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">Password</label>
                <input
                  type="password"
                  className="input-clean"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-2xl btn-glow font-semibold text-sm border-none cursor-pointer">
                <span>Continue</span>
              </button>
            </form>
          </div>

          <p className="text-center mt-6 text-sm text-muted-foreground">
            New student?{" "}
            <Link to="/" className="text-primary font-medium hover:underline underline-offset-4">
              Submit portfolio first →
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
