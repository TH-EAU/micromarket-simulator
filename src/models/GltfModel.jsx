import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export class GLTFModel {
  constructor(path) {
    this.path = path;
    this.gltf = null;
  }

  loadModel() {
    const loader = new GLTFLoader();
    return new Promise((resolve, reject) => {
      loader.load(
        this.path,
        (gltf) => {
          this.gltf = gltf;
          resolve(gltf);
        },
        undefined,
        (error) => {
          reject(error);
        }
      );
    });
  }
}

export class StorageModel extends GLTFModel {
  constructor() {
    super("/assets/models/etagere.glb");
  }
}

export class SmallFridgeModel extends GLTFModel {
  constructor() {
    super("/assets/models/frigogidaire_small.glb");
  }
}

export class FridgeModel extends GLTFModel {
  constructor() {
    super("/assets/models/frigogidaire.glb");
  }
}
