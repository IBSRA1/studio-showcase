import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const demoBlogs = [
  { id: "1", title: "Getting Started with Web Development", status: "posted", date: "Apr 5, 2026" },
  { id: "2", title: "Mastering CSS Grid Layouts", status: "posted", date: "Apr 3, 2026" },
  { id: "3", title: "JavaScript Best Practices 2026", status: "posted", date: "Mar 28, 2026" },
  { id: "4", title: "Introduction to TypeScript", status: "draft", date: "Mar 22, 2026" },
  { id: "5", title: "Building Responsive UIs", status: "posted", date: "Mar 15, 2026" },
  { id: "6", title: "The Future of AI in Education", status: "scheduled", date: "Mar 10, 2026" },
];

const statusConfig: Record<string, { label: string; dotClass: string; bgClass: string }> = {
  posted: { label: "Live", dotClass: "bg-success", bgClass: "bg-success/10 text-success" },
  draft: { label: "Draft", dotClass: "bg-muted-foreground", bgClass: "bg-muted text-muted-foreground" },
  scheduled: { label: "Scheduled", dotClass: "bg-warning", bgClass: "bg-warning/10 text-warning" },
};

const AdminBlogs = () => {
  const navigate = useNavigate();
  useEffect(() => { if (!localStorage.getItem("adminPassword")) navigate("/auth"); }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <div className="flex-1 py-10 pb-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-end justify-between mb-10 opacity-0 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Articles</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage your published content</p>
            </div>
            <Link to="/admin/editor" className="text-sm font-semibold px-5 py-2.5 rounded-xl btn-glow">
              <span>New Article</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {demoBlogs.map((blog, i) => {
              const status = statusConfig[blog.status] || statusConfig.draft;
              return (
                <div key={blog.id} className={`glass rounded-2xl p-5 flex flex-col gap-4 card-hover shadow-sm opacity-0 animate-slide-up stagger-${i + 1}`}>
                  <div className="flex justify-between items-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${status.bgClass}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dotClass}`} />
                      {status.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{blog.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug flex-1">{blog.title}</h3>
                  <div className="flex gap-2">
                    <Link
                      to={`/admin/editor?id=${blog.id}`}
                      className="flex-1 text-center text-xs font-medium py-2 rounded-xl glass hover:border-primary/20 transition-all"
                    >
                      Edit
                    </Link>
                    <button className="text-xs font-medium py-2 px-3 rounded-xl text-destructive/70 hover:bg-destructive/10 hover:text-destructive transition-all">
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminBlogs;
