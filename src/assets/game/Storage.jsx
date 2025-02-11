import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { getStorageModel } from "../../models/Storage_Enum";

export default function Storage({ model = "storage" }) {
  const [hovered, setHovered] = useState(false);
  const gltf = useLoader(
    GLTFLoader,
    `/assets/models/${getStorageModel(model).path}.glb`
  );
  return (
    <>
      {hovered && (
        <mesh position={[getStorageModel(model).boxPosition, 2, 0]}>
          <boxGeometry args={[getStorageModel(model).emplacement, 3.5, 1]} />
          <meshStandardMaterial emissive="green" transparent opacity={0.5} />
        </mesh>
      )}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => alert("Objet cliqué !")}
      >
        <primitive
          position={[-0.5, 0, -0.5]}
          object={gltf.scene}
          scale={1}
        ></primitive>
      </mesh>
    </>
  );
}
