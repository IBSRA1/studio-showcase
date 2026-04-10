import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Article = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <div className="flex-1 py-10 pb-20">
        <div className="max-w-3xl mx-auto px-6 opacity-0 animate-fade-in">
          <div className="mb-8">
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to articles
            </Link>
          </div>

          <article>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-muted-foreground">Apr 5, 2026</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">6 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Getting Started with Web Development
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A comprehensive guide to modern web technologies and frameworks.
              </p>
            </div>

            {/* Video Cover */}
            <div className="rounded-2xl overflow-hidden bg-accent mb-8 aspect-video flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto mb-2 opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Video cover – Article #{id}</span>
              </div>
            </div>

            {/* Audio Player */}
            <div className="glass rounded-2xl p-5 mb-8 flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/15 transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-primary ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="flex-1">
                <div className="text-xs font-medium mb-1.5">Listen to narration</div>
                <div className="h-1 bg-accent rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-primary rounded-full" />
                </div>
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">3:24</span>
            </div>

            <div className="divider mb-8" />

            {/* Article Body */}
            <div className="prose-custom space-y-5 text-foreground/85 leading-relaxed">
              <p>
                Web development has evolved dramatically over the past decade. Modern tools and frameworks have made it easier
                than ever to build powerful, responsive applications that work across all devices.
              </p>
              <p>
                In this article, we'll explore the fundamentals of HTML, CSS, and JavaScript — the three pillars of the web.
                We'll also look at modern frameworks like React and how they've changed the way we think about building user interfaces.
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">Getting Started</h2>
              <p>
                The best way to learn web development is by doing. Start with small projects, experiment with different
                technologies, and don't be afraid to make mistakes. The web development community is incredibly supportive
                and there are countless resources available to help you on your journey.
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">Modern Tooling</h2>
              <p>
                Today's developers have access to incredible tools: TypeScript for type safety, Vite for lightning-fast builds,
                Tailwind CSS for utility-first styling, and React for building component-based interfaces. Together, these
                technologies form a powerful and productive development stack.
              </p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
