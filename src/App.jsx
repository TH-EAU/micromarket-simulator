import { Canvas } from "@react-three/fiber";
import CameraControls from "./assets/controls/CameraControls";
import { Suspense, useContext, useEffect, useState } from "react";
import FurnitureSet from "./assets/game/FurnitureSet";
import Grid from "./assets/game/Grid";
import { ShopConfigContext } from "./contexts/ShopConfigContext";
import "./App.css";
import Test from "./assets/game/Test";

function App() {
  const shop = useContext(ShopConfigContext);

  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setFlag(!flag);
    console.log("helo");
  }, [shop.config]);

  return (
    <div id="canvas-container" style={{ width: "90vw", height: "89vh" }}>
      <button onClick={shop?.add}>add +</button>
      <Canvas
        shadows
        orthographic
        camera={{ zoom: 50, position: [10, 10, 10] }}
      >
        <Suspense fallback={null}>
          <Test />
          <ambientLight intensity={0.2} color="blue" position={[5, 5, 5]} />
          <directionalLight color="white" position={[1, 2, 5]} />
          <CameraControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
