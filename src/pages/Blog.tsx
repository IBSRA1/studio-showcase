import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const demoPosts = [
  {
    id: "1",
    title: "Getting Started with Web Development",
    excerpt: "A comprehensive guide to modern web technologies and frameworks for beginners.",
    date: "Apr 5, 2026",
    readTime: "6 min",
    access: "free",
  },
  {
    id: "2",
    title: "Mastering CSS Grid Layouts",
    excerpt: "Deep dive into CSS Grid with practical examples and responsive design patterns.",
    date: "Apr 3, 2026",
    readTime: "8 min",
    access: "free",
  },
  {
    id: "3",
    title: "JavaScript Best Practices 2026",
    excerpt: "Essential tips and patterns for writing clean, maintainable JavaScript code.",
    date: "Mar 28, 2026",
    readTime: "10 min",
    access: "students",
  },
  {
    id: "4",
    title: "Building Responsive UIs",
    excerpt: "Learn how to create beautiful interfaces that work on every device.",
    date: "Mar 15, 2026",
    readTime: "7 min",
    access: "free",
  },
  {
    id: "5",
    title: "The Future of AI in Education",
    excerpt: "How artificial intelligence is reshaping the way we learn and teach.",
    date: "Mar 10, 2026",
    readTime: "5 min",
    access: "premium",
  },
];

const Blog = () => {
  const email = localStorage.getItem("readerEmail");

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <div className="flex-1 py-10 pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14 opacity-0 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight mb-3">
              <span className="text-gradient">Articles</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Curated insights, tutorials, and resources for students.
            </p>
          </div>

          <div className="space-y-4">
            {demoPosts.map((post, i) => {
              const locked = post.access !== "free" && !email;
              return (
                <div
                  key={post.id}
                  className={`glass rounded-2xl p-6 card-hover opacity-0 animate-slide-up stagger-${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        {post.access !== "free" && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {post.access}
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-semibold tracking-tight mb-1.5">{post.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    </div>
                    <div className="flex-shrink-0">
                      {locked ? (
                        <Link
                          to={`/auth?next=/blog/article/${post.id}`}
                          className="text-xs font-medium px-4 py-2 rounded-xl bg-accent text-accent-foreground hover:bg-primary/10 hover:text-primary transition-all"
                        >
                          Sign in
                        </Link>
                      ) : (
                        <Link
                          to={`/blog/article/${post.id}`}
                          className="text-xs font-medium px-4 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/15 transition-all"
                        >
                          Read →
                        </Link>
                      )}
                    </div>
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

export default Blog;
