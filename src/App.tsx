import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastProvider } from "@/components/Toast";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Admin from "./pages/Admin";
import AdminBlogs from "./pages/AdminBlogs";
import Editor from "./pages/Editor";
import Pay from "./pages/Pay";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/article/:id" element={<Article />} />
            <Route path="/blog/pay" element={<Pay />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/blogs" element={<AdminBlogs />} />
            <Route path="/admin/editor" element={<Editor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
