import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { ModelProvider } from "./gltfManager/ModelContext.jsx";
import { ShopProvider } from "./shopManager/shopContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModelProvider>
      <ShopProvider>
        <App />
      </ShopProvider>
    </ModelProvider>
  </StrictMode>
);
