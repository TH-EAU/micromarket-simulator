import React, { createContext, useContext, useEffect, useState } from "react";
import ModelFactory from "./ModelFactory";

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const [models, setModels] = useState({});

  useEffect(() => {
    const loadModels = async () => {
      const loadedModels = await ModelFactory.loadAllModels();
      setModels(loadedModels);
    };

    loadModels();
  }, []);

  return (
    <ModelContext.Provider value={models}>{children}</ModelContext.Provider>
  );
};

export const useModel = (modelName) => {
  const models = useContext(ModelContext);
  return models[modelName];
};
