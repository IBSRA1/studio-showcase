import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Editor = () => {
  const navigate = useNavigate();
  useEffect(() => { if (!localStorage.getItem("adminPassword")) navigate("/auth"); }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <div className="flex-1 py-10 pb-20">
        <div className="max-w-3xl mx-auto px-6 opacity-0 animate-fade-in">
          <div className="mb-8">
            <Link to="/admin/blogs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back</Link>
          </div>

          <div className="space-y-6">
            <div>
              <input
                type="text"
                className="w-full bg-transparent text-3xl font-bold tracking-tight placeholder:text-muted-foreground/30 focus:outline-none border-none"
                placeholder="Article title…"
              />
            </div>

            <div className="divider" />

            <div>
              <textarea
                className="w-full bg-transparent text-base leading-relaxed text-foreground/85 placeholder:text-muted-foreground/30 focus:outline-none border-none min-h-[400px] resize-none"
                placeholder="Start writing your article…"
              />
            </div>

            <div className="divider" />

            {/* Media uploads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5 shadow-sm">
                <label className="block text-xs font-medium text-muted-foreground mb-3">Cover Video</label>
                <div className="relative rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground hover:border-muted-foreground/30 hover:bg-accent/50 transition-all cursor-pointer">
                  <input type="file" accept="video/*" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto mb-2 text-muted-foreground/50">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Upload video cover
                </div>
              </div>
              <div className="glass rounded-2xl p-5 shadow-sm">
                <label className="block text-xs font-medium text-muted-foreground mb-3">Audio Narration</label>
                <div className="relative rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground hover:border-muted-foreground/30 hover:bg-accent/50 transition-all cursor-pointer">
                  <input type="file" accept="audio/*" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto mb-2 text-muted-foreground/50">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  Upload MP3 narration
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">Status</label>
                <select className="input-clean cursor-pointer">
                  <option value="posted">Live</option>
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">Access</label>
                <select className="input-clean cursor-pointer">
                  <option value="free">Everyone</option>
                  <option value="students">Students</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button className="flex-1 py-3.5 rounded-2xl btn-glow font-semibold text-sm border-none cursor-pointer">
                <span>Publish</span>
              </button>
              <Link to="/admin/blogs" className="py-3.5 px-8 rounded-2xl glass text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all flex items-center">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Editor;
