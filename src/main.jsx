import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";


import "modern-normalize";
import "./index.css";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right" />
    <App />
  </StrictMode>
);
