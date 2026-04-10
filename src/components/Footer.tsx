import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative z-[1] mt-auto">
    <div className="divider" />
    <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">
        © 2026 IBSR Education
      </span>
      <div className="flex gap-6">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Submit</Link>
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
        <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portal</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
