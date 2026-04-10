import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pay = () => {
  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center opacity-0 animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight mb-3">
            <span className="text-gradient">Premium Access</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-md mx-auto mb-8">
            Unlock all articles and exclusive content with a premium subscription.
          </p>
          <button className="btn-glow px-8 py-3.5 rounded-2xl font-semibold text-sm border-none cursor-pointer">
            <span>Coming Soon</span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pay;
