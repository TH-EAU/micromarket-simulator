import { Canvas } from "@react-three/fiber";
import CameraControls from "./components/controls/CameraControls";
import { Suspense } from "react";
import "./styles/App.css";
import Grid from "./components/game/Grid";

function App() {
  return (
    <div id="canvas-container" style={{ width: "90vw", height: "89vh" }}>
      <Canvas
        shadows
        orthographic
        camera={{ zoom: 50, position: [10, 10, 10] }}
      >
        <Suspense fallback={null}>
          <Grid />
          <ambientLight intensity={0.2} color="blue" position={[5, 5, 5]} />
          <directionalLight color="white" position={[1, 2, 5]} />
          <CameraControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
