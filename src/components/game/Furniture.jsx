import { useModel } from "../../gltfManager/ModelContext";

export default function Furniture({ model, position = [0, 0, 0], rotation }) {
  const gltf = useModel(model);

  if (!gltf) {
    return null;
  }

  return (
    <group position={position}>
      <mesh>
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
