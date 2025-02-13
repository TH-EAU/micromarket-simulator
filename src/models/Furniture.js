import { StorageCase } from "./StorageCase";

export class Furniture {
  constructor(model, capacity) {
    this.model = model;
    this.storage = new StorageCase(capacity);
  }
}
