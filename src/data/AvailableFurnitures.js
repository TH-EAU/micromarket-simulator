import { Furniture } from "../models/Furniture";

export const availableFurnitures = [
  new Furniture(
    "Small Fridge",
    "smallFridge",
    300,
    "/assets/images/frigo.png",
    4
  ),
  new Furniture("Storage", "storage", 150, "assets/images/etagere.png", 4),
  new Furniture(
    "Cash register",
    "cashRegister",
    500,
    "assets/images/caisse.png",
    0
  ),
];
