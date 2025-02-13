import { useState, useEffect, useContext } from "react";
import { useShop } from "../../shopManager/shopContext";
import Furniture from "./Furniture";
import Tile from "./Tile";
import DesactivatedTile from "./DesactivatedTile";

const Grid = () => {
  const { tileList, addFurniture, activateTile } = useShop();
  const [grid, setGrid] = useState(tileList || []);
  const [currentRotation, setCurrentRotation] = useState(0);

  const handleRotation = () => [
    setCurrentRotation(currentRotation + Math.PI / 2),
  ];

  const handlePlace = (tile) => {
    addFurniture(tile.id, [0, currentRotation, 0]);
  };

  return (
    <>
      {tileList.map((tile) => (
        <>
          {tile.activated ? (
            <Tile
              key={tile.id}
              tile={tile}
              rotation={[0, currentRotation, 0]}
              handleRotation={handleRotation}
              handlePlace={handlePlace}
            />
          ) : (
            <DesactivatedTile
              key={tile.id}
              tile={tile}
              onActivate={activateTile}
            />
          )}
        </>
      ))}
      {/* {furnitureList.map((furniture, index) => (
        <Furniture
          key={`furniture-${index}`}
          model={furniture.model}
          position={furniture.position}
          rotation={furniture.rotation}
        />
      ))} */}
    </>
  );
};

export default Grid;
