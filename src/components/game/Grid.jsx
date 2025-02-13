import { useState } from "react";
import { useShop } from "../../shopManager/shopContext";
import Tile from "./Tiles/Tile";

const Grid = () => {
  const {
    tileList,
    addFurniture,
    placeEditMode,
    abortPlaceEditMode,
    itemToPlace,
  } = useShop();
  const [currentRotation, setCurrentRotation] = useState(0);

  const handleRotation = () => [
    setCurrentRotation(currentRotation + Math.PI / 2),
  ];

  const handlePlace = (tile) => {
    if (placeEditMode) {
      addFurniture(tile.id, itemToPlace, [0, currentRotation, 0]);
      abortPlaceEditMode();
    }
  };

  return (
    <>
      {tileList.map((tile) => (
        <Tile
          key={tile.id}
          tile={tile}
          rotation={[0, currentRotation, 0]}
          handleRotation={handleRotation}
          handlePlace={handlePlace}
        />
      ))}
    </>
  );
};

export default Grid;
