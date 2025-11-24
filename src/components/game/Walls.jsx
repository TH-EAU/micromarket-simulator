import { useModel } from "../../gltfManager/ModelContext";

const Walls = () => {
  const gltf = useModel("wall");

  if (!gltf) {
    return null;
  }

  return (
    <primitive
      position={[-5.5, 0, -5.5]}
      object={gltf.scene.clone()}
      scale={1}
    />
  );
};

export default Walls;
