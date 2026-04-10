import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const demoSubmissions = [
  { id: "1", fullName: "Ahmed Hassan", groupName: "Alpha", whatsapp: "+20 123 456 789", email: "ahmed@example.com", submittedAt: "2026-04-08T14:30:00Z" },
  { id: "2", fullName: "Sara Mohamed", groupName: "Section B", whatsapp: "+20 987 654 321", email: "sara@example.com", submittedAt: "2026-04-07T10:15:00Z" },
  { id: "3", fullName: "Omar Khalil", groupName: "Alpha", whatsapp: "+20 555 444 333", email: "omar@example.com", submittedAt: "2026-04-06T16:45:00Z" },
  { id: "4", fullName: "Nour Ali", groupName: "Section A", whatsapp: "+20 111 222 333", email: "nour@example.com", submittedAt: "2026-04-05T09:00:00Z" },
];

const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => { if (!localStorage.getItem("adminPassword")) navigate("/auth"); }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <div className="flex-1 py-10 pb-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-end justify-between mb-10 opacity-0 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Submissions</h1>
              <p className="text-sm text-muted-foreground mt-1">{demoSubmissions.length} total</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-xl glass transition-all hover:border-primary/20"
            >
              Refresh
            </button>
          </div>

          <div className="glass rounded-2xl overflow-hidden opacity-0 animate-slide-up stagger-2 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    {["Date", "Name", "Group", "WhatsApp", "Email", ""].map((h) => (
                      <th key={h} className="px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground text-left whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {demoSubmissions.map((sub, i) => {
                    const d = new Date(sub.submittedAt);
                    return (
                      <tr key={sub.id} className={`border-b border-border/30 hover:bg-accent/50 transition-colors ${i === demoSubmissions.length - 1 ? "border-b-0" : ""}`}>
                        <td className="px-5 py-4 text-sm text-muted-foreground whitespace-nowrap">
                          {d.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          <span className="ml-1.5 text-muted-foreground/50">{d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                        </td>
                        <td className="px-5 py-4 text-sm font-medium">{sub.fullName}</td>
                        <td className="px-5 py-4 text-sm text-muted-foreground">{sub.groupName}</td>
                        <td className="px-5 py-4 text-sm text-muted-foreground">{sub.whatsapp}</td>
                        <td className="px-5 py-4 text-sm text-primary">{sub.email}</td>
                        <td className="px-5 py-4">
                          <button className="text-xs font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg glass transition-all hover:border-primary/20">
                            Download
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
