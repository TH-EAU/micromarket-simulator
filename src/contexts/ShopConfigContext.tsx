import { createContext, ReactNode, useState } from "react";
import { Furniture, FurnitureType } from "../models/Furniture";
import { useLocalStorage } from "usehooks-ts";

interface ShopConfigContextType {
  config: Furniture[];
  add: Function;
}

export const ShopConfigContext = createContext<ShopConfigContextType | null>(
  null
);

const ShopConfigProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [savedConfig, setSavedConfig] = useLocalStorage<Furniture[]>(
    "shopConfig",
    []
  );
  const [config, setConfig] = useState<Furniture[]>(savedConfig || []);

  const add = (position: number[]) => {
    setSavedConfig((config: Furniture[]) => [
      ...config,
      {
        name: "etagere",
        position: position || [0, 0, 0],
        pathToModel: "frigogidaire_small",
        capacity: 4,
        size: 1,
        type: FurnitureType.Storage,
      },
    ]);
  };
  const save = () => {
    setSavedConfig((config: Furniture[]) => config);
  };

  return (
    <ShopConfigContext.Provider value={{ config, add }}>
      {children}
    </ShopConfigContext.Provider>
  );
};

export default ShopConfigProvider;
