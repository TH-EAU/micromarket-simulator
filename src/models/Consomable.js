import { Product } from "./Product";

export class Consomable extends Product {
  constructor(name, model, inPrice, image) {
    super(name, model, inPrice, image);
    this.outPrice = 0;
  }
}
