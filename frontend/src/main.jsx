
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "stream-chat-react/dist/css/v2/index.css";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client outside the component to avoid recreating on re-renders
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Better UX
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);