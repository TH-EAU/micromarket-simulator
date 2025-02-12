import { useState, useEffect, useContext } from "react";
import { useShop } from "../../shopManager/shopContext";
import Furniture from "./Storage";
import Tile from "./Tile";

const Grid = () => {
  const { furnitureList, addFurniture } = useShop();
  const [grid, setGrid] = useState([]);
  const [currentRotation, setCurrentRotation] = useState(0);

  const handleRotation = () => [
    setCurrentRotation(currentRotation + Math.PI / 2),
  ];

  const handlePlace = (tile) => {
    addFurniture("smallFridge", tile.position, [0, currentRotation, 0]);
    const t = grid.find((e) => e.id === tile.id);
    t.busy = true;
  };

  useEffect(() => {
    const newGrid = [];
    const gridSize = 10;

    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        newGrid.push({
          // un peu trop critique pour être laissé ici je trouve
          id: `${x}${z}`,
          position: [x - gridSize / 2, 0, z - gridSize / 2],
          busy: false,
        });
      }
    }

    setGrid(newGrid);
  }, []);

  return (
    <>
      {grid.map((tile, index) => (
        <Tile
          key={index}
          tile={tile}
          rotation={[0, currentRotation, 0]}
          handleRotation={handleRotation}
          handlePlace={handlePlace}
        />
      ))}
      {furnitureList.map((furniture, index) => (
        <Furniture
          key={`furniture-${index}`}
          model={furniture.model}
          position={furniture.position}
          rotation={furniture.rotation}
        />
      ))}
    </>
  );
};

export default Grid;
