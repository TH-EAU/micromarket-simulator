import { Canvas } from "@react-three/fiber";
import CameraControls from "./assets/controls/CameraControls";
import { Suspense, useEffect, useState } from "react";
import Storage from "./assets/game/Storage";
import "./App.css";
import { useLoadModel } from "./context/AssetContext";

function App() {
  const [list, setList] = useState([
    { model: "storage1", position: [0, 0, 0] },
    { model: "storage1", position: [2, 0, 0] },
    { model: "storage3", position: [4, 0, 0] },
  ]);
  const loadModel = useLoadModel();

  const add = (model = "storage1") => {
    setList([...list, { model, position: [list.length, 0, 0] }]);
    console.log(list);
  };

  useEffect(() => {
    loadModel("storage", "storage1");
    loadModel("fridge", "storage2");
    loadModel("smallFridge", "storage3");
  }, []);

  return (
    <div id="canvas-container" style={{ width: "90vw", height: "89vh" }}>
      <button onClick={() => add("storage3")}>add</button>
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
          {list.map((e, i) => {
            return <Storage key={i} model={e.model} position={e.position} />;
          })}
          <ambientLight intensity={0.2} color="blue" position={[5, 5, 5]} />
          <directionalLight color="white" position={[1, 2, 5]} />
          <CameraControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
