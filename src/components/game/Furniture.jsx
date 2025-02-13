import { useModel } from "../../gltfManager/ModelContext";

export default function Furniture({ model, position = [0, 0, 0], rotation }) {
  const gltf = useModel(model);

  if (!gltf) {
    return null;
  }

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group position={position}>
      <mesh>
        <primitive rotation={rotation} object={gltf.scene.clone()} scale={1} />
      </mesh>
    </group>
  );
}
