import { FridgeModel, SmallFridgeModel, StorageModel } from "./GltfModel";

export class AssetFactory {
  static createAsset(type) {
    try {
      const model = keys[type];
      return model;
    } catch (error) {
      throw new Error(`Unknown model type: ${type}`);
    }
  }
}

const keys = {
  storage: new StorageModel(),
  smallFridge: new SmallFridgeModel(),
  fridge: new FridgeModel(),
};
