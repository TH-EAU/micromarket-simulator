import { useModel } from "../../gltfManager/ModelContext";

const Consomable = ({ consomable, index }) => {
  const gltf = useModel(consomable.product.model);

  if (!gltf) {
    return null;
  }

  return (
    <mesh position={[0, 0.7 * (index + 1), 0]}>
      <primitive object={gltf.scene.clone()} scale={1} />
    </mesh>
  );
};

export default Consomable;
