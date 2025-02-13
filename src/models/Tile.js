import { v4 as uuidv4 } from "uuid";

export class Tile {
  constructor(position) {
    this.id = uuidv4();
    this.position = position;
    this.rotation = [0, 0, 0];
    this.busy = false;
    this.activated = true;
    this.furniture = null;
  }
}
