import { useEffect, useState } from "react";
import { useModel } from "../../gltfManager/ModelContext";
import { useShop } from "../../shopManager/shopContext";
import { useGame } from "../../gameManager/GameContext";

const MAXIMUM_IN_CASE = 9;

export default function Furniture({
  furniture,
  position = [0, 0, 0],
  rotation,
}) {
  const [hovered, setHovered] = useState(false);
  const [storage, setStorage] = useState(
    furniture.product.storage.getStorageArray()
  );
  const gltf = useModel(furniture.product.model);
  const { placeEditMode, itemToPlace, abortPlaceEditMode } = useShop();
  const { deleteFromInventory } = useGame();

  if (!gltf) {
    return null;
  }

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  const addToStorageCase = (storageIndex = 0) => {
    if (!itemToPlace) {
      abortPlaceEditMode();
      throw new Error("No item to place!");
    }

    try {
      if (storageIndex >= storage.length) {
        throw new Error("Invalid storage index!");
      }

      if (storage[storageIndex].length >= MAXIMUM_IN_CASE) {
        addToStorageCase(storageIndex + 1);
      } else {
        const st = [...storage[storageIndex], itemToPlace];
        storage[storageIndex] = st;

        setStorage(storage);
        deleteFromInventory(itemToPlace.lineId);
        abortPlaceEditMode();
      }
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    console.log(storage);
  }, [storage]);

  return (
    <group position={position}>
      {hovered && placeEditMode && (
        <mesh>
          <boxGeometry args={[1.2, 7.5, 1.2]} />
          <meshStandardMaterial color="yellow" transparent opacity={0.2} />
        </mesh>
      )}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => addToStorageCase(0)}
      >
        <primitive rotation={rotation} object={gltf.scene.clone()} scale={1} />
      </mesh>
    </group>
  );
}
