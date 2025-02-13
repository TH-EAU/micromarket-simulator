import { useState } from "react";
import { useModel } from "../../gltfManager/ModelContext";
import Furniture from "./Furniture";

const Tile = ({ tile, rotation, handleRotation, handlePlace }) => {
  const [hovered, setHovered] = useState(false);
  const model = useModel("smallFridge");

  if (!tile.furniture) {
    return (
      <>
        <mesh
          position={tile.position}
          onClick={() => handlePlace(tile)}
          // onPointerOver={() => setHovered(true)}
          // onPointerOut={() => setHovered(false)}
          onContextMenu={handleRotation}
          receiveShadow
          castShadow
        >
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial />
        </mesh>
        {hovered && !tile.busy && tile.activated && (
          <mesh
            onPointerOut={() => setHovered(false)}
            onContextMenu={handleRotation}
          >
            <primitive
              position={tile.position}
              rotation={rotation}
              object={model.scene.clone()}
              scale={1}
            />
          </mesh>
        )}
      </>
    );
  }

  return (
    <>
      (
      <Furniture
        model={tile.furniture.model}
        rotation={tile.rotation}
        position={tile.position}
      />
      )
    </>
  );
};

export default Tile;
