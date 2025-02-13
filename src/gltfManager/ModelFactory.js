/** Describe every models in this file */

import { GLTFModel } from "./GltfModel";

class StorageModel extends GLTFModel {
  constructor() {
    super("/assets/models/etagere.glb");
  }
}

class SmallFridgeModel extends GLTFModel {
  constructor() {
    super("/assets/models/frigogidaire_small.glb");
  }
}

class FridgeModel extends GLTFModel {
  constructor() {
    super("/assets/models/frigogidaire.glb");
  }
}

class MilkBottle extends GLTFModel {
  constructor() {
    super("/assets/models/bouteille.glb");
  }
}

const keys = {
  storage: new StorageModel(),
  smallFridge: new SmallFridgeModel(),
  fridge: new FridgeModel(),
  bouteille: new MilkBottle(),
};

class ModelFactory {
  static async loadAllModels() {
    const loadedModels = {};
    for (const key in keys) {
      const model = keys[key];
      const gltf = await model.loadModel();
      loadedModels[key] = gltf;
    }
    return loadedModels;
  }

  static createModel(type) {
    try {
      return keys[type];
    } catch (error) {
      throw new Error(`Unknown model type: ${type}`);
    }
  }
}

export default ModelFactory;
