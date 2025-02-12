import { useState } from "react";
import { useModel } from "../../gltfManager/ModelContext";

const Tile = ({ tile, rotation, handleRotation, handlePlace }) => {
  const [hovered, setHovered] = useState(false);
  const model = useModel("smallFridge");

  return (
    <>
      <mesh
        position={tile.position}
        onClick={() => handlePlace(tile)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onContextMenu={handleRotation}
        receiveShadow
        castShadow
      >
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial />
      </mesh>
      {hovered && !tile.busy && (
        <primitive
          position={tile.position}
          rotation={rotation}
          object={model.scene.clone()}
          scale={1}
        />
      )}
    </>
  );
};

export default Tile;
