import { Tile } from "./Tile";

export class Grid {
  static generateGrid(size = 20) {
    const newGrid = [];
    const gridSize = size;

    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        newGrid.push(new Tile([x - gridSize / 2, 0, z - gridSize / 2]));
      }
    }
    return newGrid;
  }
}
