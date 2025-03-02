import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { ModelProvider } from "./gltfManager/ModelContext.jsx";
import { ShopProvider } from "./shopManager/shopContext.jsx";
import { GameProvider } from "./gameManager/GameContext.jsx";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <ModelProvider>
        <ShopProvider>
          <CustomProvider theme="dark">
            <App />
          </CustomProvider>
        </ShopProvider>
      </ModelProvider>
    </GameProvider>
  </StrictMode>
);
