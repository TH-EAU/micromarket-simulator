import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const AssetLoader = ({ pathToModel, position = [-0.5, 0, -0.5] }) => {
  const gltf = useLoader(GLTFLoader, `/assets/models/${pathToModel}.glb`);

  return (
    <>
      <mesh>
        <primitive position={position} object={gltf.scene} scale={1} />;
      </mesh>
      <mesh>
        <primitive position={[0, 0, 0]} object={gltf.scene} scale={1} />;
        <primitive position={[0, 0, 2]} object={gltf.scene} scale={1} />;
      </mesh>
    </>
  );
};

export default AssetLoader;
