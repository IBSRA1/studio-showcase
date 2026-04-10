import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const email = localStorage.getItem("readerEmail");
  const isAdmin = location.pathname.startsWith("/admin");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-[1200px] px-6 py-4">
        <div className="glass-strong rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
          <Link to="/" className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors">
            Story<span className="text-gradient">Weaver</span>
          </Link>

          <div className="hidden md:flex gap-1 items-center">
            {isAdmin ? (
              <>
                <NavItem to="/admin" label="Submissions" active={location.pathname === "/admin"} />
                <NavItem to="/admin/blogs" label="Articles" active={location.pathname === "/admin/blogs"} />
                <NavItem to="/admin/editor" label="New Post" active={location.pathname === "/admin/editor"} />
                <div className="w-px h-5 bg-border mx-2" />
                <ThemeToggle />
                <button
                  onClick={() => {
                    localStorage.removeItem("adminPassword");
                    window.location.href = "/auth";
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-destructive px-3 py-2 rounded-xl transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <NavItem to="/" label="Submit" active={location.pathname === "/"} />
                <NavItem to="/blog" label="Blog" active={location.pathname.startsWith("/blog")} />
                <div className="w-px h-5 bg-border mx-2" />
                <ThemeToggle />
                {email ? (
                  <button
                    onClick={() => {
                      if (confirm("Sign out?")) {
                        localStorage.removeItem("readerEmail");
                        window.location.reload();
                      }
                    }}
                    className="text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-xl hover:bg-primary/15 transition-all"
                  >
                    {email.split("@")[0]}
                  </button>
                ) : (
                  <Link
                    to="/auth"
                    className="text-sm font-semibold btn-glow px-5 py-2 rounded-xl"
                  >
                    <span>Sign In</span>
                  </Link>
                )}
              </>
            )}
          </div>

          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="text-muted-foreground hover:text-foreground p-2 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {mobileOpen ? (
                  <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                ) : (
                  <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-fade-in shadow-lg">
            {isAdmin ? (
              <>
                <MobileNavItem to="/admin" label="Submissions" onClick={() => setMobileOpen(false)} />
                <MobileNavItem to="/admin/blogs" label="Articles" onClick={() => setMobileOpen(false)} />
                <MobileNavItem to="/admin/editor" label="New Post" onClick={() => setMobileOpen(false)} />
              </>
            ) : (
              <>
                <MobileNavItem to="/" label="Submit" onClick={() => setMobileOpen(false)} />
                <MobileNavItem to="/blog" label="Blog" onClick={() => setMobileOpen(false)} />
                <MobileNavItem to="/auth" label="Sign In" onClick={() => setMobileOpen(false)} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
      active
        ? "bg-primary/10 text-primary"
        : "text-muted-foreground hover:text-foreground hover:bg-accent"
    }`}
  >
    {label}
  </Link>
);

const MobileNavItem = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl hover:bg-accent transition-all"
  >
    {label}
  </Link>
);

export default Navbar;
