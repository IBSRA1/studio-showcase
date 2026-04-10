import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center opacity-0 animate-fade-in">
        <h1 className="text-6xl font-black tracking-tight mb-4 text-gradient">404</h1>
        <p className="text-muted-foreground text-base mb-8">This page doesn't exist.</p>
        <Link to="/" className="btn-glow px-6 py-3 rounded-2xl text-sm font-semibold inline-block">
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
