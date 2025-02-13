import React, { createContext, useContext, useEffect, useState } from "react";
import { Grid } from "../models/Grid";
import { Furniture } from "../models/Furniture";
import { useGame } from "../gameManager/GameContext";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [tileList, setTileList] = useState(() => {
    const savedList = localStorage.getItem("tileList");
    return savedList ? JSON.parse(savedList) : Grid.generateGrid(40);
  });

  const { availableTiles, consumeTile } = useGame();

  const addFurniture = (tileId, rotation) => {
    setTileList((prevList) => {
      const newList = prevList.map((tile) =>
        tile.id === tileId
          ? {
              ...tile,
              furniture: new Furniture("smallFridge", 4),
              rotation,
              busy: true,
            }
          : tile
      );

      localStorage.setItem("tileList", JSON.stringify(newList));
      return newList;
    });
  };

  const activateTile = (tileId) => {
    if (availableTiles < 1) {
      throw new Error("You don't have enough tiles");
    }

    setTileList((prevList) => {
      const newList = prevList.map((tile) =>
        tile.id === tileId ? { ...tile, activated: true } : tile
      );

      localStorage.setItem("tileList", JSON.stringify(newList));
      return newList;
    });

    consumeTile();
  };

  useEffect(() => {
    if (!localStorage.getItem("tileList")) {
      localStorage.setItem("tileList", JSON.stringify(tileList));
    }
  }, []);

  return (
    <ShopContext.Provider value={{ tileList, addFurniture, activateTile }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};
