import Tile from "@/models/Tile";
import { useState, useEffect, useContext } from "react";
import { ShopConfigContext } from "../../contexts/ShopConfigContext";
import AssetLoader from "../loaders/AssetLoader";

const Grid: React.FC = () => {
  const [grid, setGrid] = useState<Tile[]>([]);

  const config = useContext(ShopConfigContext);

  const addFurniture = (position: number[]) => {
    config?.add(position);
  };

  useEffect(() => {
    const newGrid: Tile[] = [];
    const gridSize = 10;

    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        newGrid.push({
          position: [x - gridSize / 2, 0, z - gridSize / 2],
        });
      }
    }

    setGrid(newGrid);
  }, []);

  return (
    <>
      {grid.map((tile, index) => (
        <>
          <mesh
            key={index}
            position={tile.position}
            onClick={() => addFurniture(tile.position)}
          >
            <boxGeometry args={[1, 0.1, 1]} />
            <meshStandardMaterial />
          </mesh>
          <mesh>
            <AssetLoader
              pathToModel="frigogidaire_small"
              position={tile.position}
            />
          </mesh>
        </>
      ))}
    </>
  );
};

export default Grid;
