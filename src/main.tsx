import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import HomeScreen from "./features/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomeScreen />
  </StrictMode>
);
