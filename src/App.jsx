import { Canvas } from "@react-three/fiber";
import CameraControls from "./assets/controls/CameraControls";
import { Suspense } from "react";
import Storage from "./assets/game/Storage";
import "./App.css";

function App() {
  return (
    <div id="canvas-container" style={{ width: "90vw", height: "89vh" }}>
      <Canvas
        shadows
        orthographic
        camera={{ zoom: 50, position: [10, 10, 10] }}
      >
        <Suspense fallback={null}>
          <mesh>
            <boxGeometry args={[1, 0.1, 1]} />
            <meshStandardMaterial />
          </mesh>
          <Storage />
          <ambientLight intensity={0.2} color="blue" position={[5, 5, 5]} />
          <directionalLight color="white" position={[1, 2, 5]} />
          <CameraControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
