import { useState, useEffect, createContext, useContext, useCallback } from "react";

type ToastType = "success" | "error";

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export const useToast2 = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<{ message: string; type: ToastType; visible: boolean }>({
    message: "",
    type: "success",
    visible: false,
  });

  const showToast = useCallback((message: string, type: ToastType = "success") => {
    setToast({ message, type, visible: true });
  }, []);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className={`fixed bottom-6 right-6 px-5 py-3.5 rounded-2xl glass-strong z-[9999] text-sm max-w-[360px] transition-all duration-500 flex items-center gap-3 ${
          toast.visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full flex-shrink-0 ${
            toast.type === "success" ? "bg-success" : "bg-destructive"
          }`}
        />
        <span className="text-foreground">{toast.message}</span>
      </div>
    </ToastContext.Provider>
  );
};
