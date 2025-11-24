import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Ensure root exists before rendering
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Check index.html");
}

createRoot(rootElement).render(<App />);
