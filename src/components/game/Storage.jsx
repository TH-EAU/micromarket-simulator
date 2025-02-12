import { useState } from "react";
import { useModel } from "../../gltfManager/ModelContext";

export default function Furniture({ model, position = [0, 0, 0], rotation }) {
  const gltf = useModel(model);
  const [hovered, setHovered] = useState(false);

  if (!gltf) {
    return null;
  }

  return (
    <group position={position}>
      {/* {hovered && (
        <mesh position={[0.5, 2, 0]}>
          <boxGeometry args={[2, 3.5, 1]} />
          <meshStandardMaterial emissive="green" transparent opacity={0.5} />
        </mesh>
      )} */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        // onClick={() => alert("Objet cliqué !")}
        receiveShadow
        castShadow
      >
        <primitive
          receiveShadow
          castShadow
          rotation={rotation}
          object={gltf.scene.clone()}
          scale={1}
        />
      </mesh>
    </group>
  );
}
