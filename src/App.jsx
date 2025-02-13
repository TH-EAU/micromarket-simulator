import { Canvas } from "@react-three/fiber";
import CameraControls from "./components/controls/CameraControls";
import { Suspense } from "react";
import "./styles/App.css";
import Grid from "./components/game/Grid";
import MainGUI from "./components/gui/mainGUI";

function App() {
  return (
    <>
      <MainGUI />
      <div id="canvas-container" style={{ width: "90vw", height: "89vh" }}>
        <Canvas
          shadows
          orthographic
          camera={{ zoom: 50, position: [10, 10, 10] }}
        >
          <Suspense fallback={null}>
            <Grid />
            <ambientLight intensity={0.2} color="blue" position={[5, 5, 5]} />
            <directionalLight
              color="white"
              position={[2, 5, 5]}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
              shadow-bias={-0.005}
              shadow-radius={100}
            />
            <CameraControls />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
