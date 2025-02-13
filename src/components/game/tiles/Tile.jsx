import { useState } from "react";
import { useModel } from "../../../gltfManager/ModelContext";
import Furniture from "../Furniture";
import { useShop } from "../../../shopManager/shopContext";

const Tile = ({ tile, rotation, handleRotation, handlePlace }) => {
  const [hovered, setHovered] = useState(false);
  const { placeEditMode, itemToPlace } = useShop();
  const model = itemToPlace && useModel(itemToPlace.product.model);

  if (!tile.furniture) {
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
        {hovered && placeEditMode && (
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
        model={tile.furniture.product.model}
        rotation={tile.rotation}
        position={tile.position}
      />
      )
    </>
  );
};

export default Tile;
