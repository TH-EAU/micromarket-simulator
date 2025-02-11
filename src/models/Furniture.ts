export interface Furniture {
  name: string;
  position: number[];
  pathToModel: string;
  capacity: number;
  size: number;
  type: FurnitureType;
}

export enum FurnitureType {
  "Storage",
}
