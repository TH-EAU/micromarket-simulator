import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [furnitureList, setFurnitureList] = useState(() => {
    const savedList = localStorage.getItem("furnitureList");
    return savedList ? JSON.parse(savedList) : [];
  });

  const addFurniture = (model, position, rotation) => {
    const newList = [...furnitureList, { model, position, rotation }];
    setFurnitureList(newList);
    localStorage.setItem("furnitureList", JSON.stringify(newList));
  };

  return (
    <ShopContext.Provider value={{ furnitureList, addFurniture }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};
