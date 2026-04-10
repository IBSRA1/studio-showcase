import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast2 } from "@/components/Toast";

const Index = () => {
  const [fileName, setFileName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { showToast } = useToast2();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files?.[0]?.name || "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setProgress(0);

    let pct = 0;
    const interval = setInterval(() => {
      pct += Math.random() * 18;
      if (pct >= 100) {
        pct = 100;
        clearInterval(interval);
        setProgress(100);
        showToast("Portfolio submitted successfully");
        setUploading(false);
        formRef.current?.reset();
        setFileName("");
        setTimeout(() => setProgress(0), 2000);
      } else {
        setProgress(Math.round(pct));
      }
    }, 250);
  };

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center mb-14 opacity-0 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow" />
            <span className="text-xs font-semibold text-primary tracking-wide">IBSR Education</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-5">
            Submit Your<br />
            <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            Upload your project securely. Get instant access to exclusive course content and resources.
          </p>
        </div>

        <div className="w-full max-w-lg opacity-0 animate-slide-up stagger-2">
          <div className="glass rounded-3xl p-8 sm:p-10 shadow-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">Full Name</label>
                <input className="input-clean" type="text" placeholder="Your full name" required />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">Group / Section</label>
                <input className="input-clean" type="text" placeholder="e.g. Alpha, Section A" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">WhatsApp</label>
                  <input className="input-clean" type="tel" placeholder="+20 123 456 789" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">Email</label>
                  <input className="input-clean" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">Project File</label>
                <div
                  className={`relative rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 cursor-pointer ${
                    dragActive
                      ? "border-primary bg-primary/5"
                      : fileName
                        ? "border-primary/30 bg-primary/5"
                        : "border-border hover:border-muted-foreground/30 hover:bg-accent/50"
                  }`}
                  onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={() => setDragActive(false)}
                >
                  <input
                    type="file"
                    accept=".zip"
                    required
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    onChange={handleFileChange}
                  />
                  {fileName ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-foreground font-medium">{fileName}</span>
                      <span className="text-xs text-muted-foreground">Click to change file</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-muted-foreground">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <span className="text-sm text-muted-foreground">Drop .zip file or <span className="text-primary font-medium">browse</span></span>
                    </div>
                  )}
                </div>
              </div>

              {progress > 0 && (
                <div className="flex items-center gap-3 animate-fade-in">
                  <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full rounded-full progress-gradient transition-all duration-300" style={{ width: `${progress}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums w-10 text-right">{progress}%</span>
                </div>
              )}

              <button
                type="submit"
                disabled={uploading}
                className="w-full py-4 rounded-2xl btn-glow font-semibold text-sm flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed border-none cursor-pointer"
              >
                <span>{uploading ? `Uploading… ${progress}%` : "Submit Portfolio"}</span>
                {uploading && (
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                )}
              </button>
            </form>
          </div>

          <p className="text-center mt-8 text-sm text-muted-foreground">
            Already a student?{" "}
            <Link to="/auth" className="text-primary font-medium hover:underline underline-offset-4 transition-all">
              Sign in for articles →
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
