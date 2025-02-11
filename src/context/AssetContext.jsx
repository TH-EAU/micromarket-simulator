import React, { createContext, useContext, useEffect, useState } from "react";
import { AssetFactory } from "../models/AssetFactory";

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const [models, setModels] = useState({});
  const [modelsToLoad, setModelsToLoad] = useState([]);

  useEffect(() => {
    const loadModels = async () => {
      const loadedModels = {};
      for (const { type, modelName } of modelsToLoad) {
        const model = AssetFactory.createAsset(type);
        try {
          const gltf = await model.loadModel();
          loadedModels[modelName] = gltf;
        } catch (error) {
          console.error(`Failed to load model ${modelName}:`, error);
        }
      }
      setModels((prevModels) => ({ ...prevModels, ...loadedModels }));
    };

    loadModels();
  }, [modelsToLoad]);

  const loadModel = (type, modelName) => {
    setModelsToLoad((prevModelsToLoad) => [
      ...prevModelsToLoad,
      { type, modelName },
    ]);
  };

  return (
    <ModelContext.Provider value={{ models, loadModel }}>
      {children}
    </ModelContext.Provider>
  );
};

export const useModel = (modelName) => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error("useModel must be used within a ModelProvider");
  }
  return context.models[modelName];
};

export const useLoadModel = () => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error("useLoadModel must be used within a ModelProvider");
  }
  return context.loadModel;
};
