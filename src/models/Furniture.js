import { Product } from "./Product";
import { StorageCase } from "./StorageCase";

export class Furniture extends Product {
  constructor(name, model, inPrice, image, capacity) {
    super(name, model, inPrice, image);
    this.storage = new StorageCase(capacity);
  }
}
