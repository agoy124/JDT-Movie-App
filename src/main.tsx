import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes";
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import { TokenProvider } from "./hooks/movie/useToken";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TokenProvider>
      <RouterProvider router={routes} />
    </TokenProvider>
  </StrictMode>
);
