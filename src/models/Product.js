import { v4 as uuidv4 } from "uuid";

export class Product {
  constructor(name, model, inPrice, image) {
    this.id = uuidv4();
    this.name = name;
    this.inPrice = inPrice;
    this.model = model;
    this.image = image;
  }
}
