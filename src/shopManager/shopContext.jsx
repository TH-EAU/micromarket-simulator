import React, { createContext, useContext, useEffect, useState } from "react";
import { Grid } from "../models/Grid";
import { Furniture } from "../models/Furniture";

const BASIC_GRID_SIZE = 10;

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [placeEditMode, setPlaceEditMode] = useState(false);
  const [modelToPlace, setModelToPlace] = useState(null);
  const [tileList, setTileList] = useState(() => {
    const savedList = localStorage.getItem("tileList");
    return savedList
      ? JSON.parse(savedList)
      : Grid.generateGrid(BASIC_GRID_SIZE);
  });

  const activePlaceEditMode = (item) => {
    if (!item) {
      throw new Error("Edit mode must have item to place !");
    }

    setPlaceEditMode(true);
    setModelToPlace(item.model);
  };

  const tooglePlaceEditMode = () => {
    setPlaceEditMode(!placeEditMode);
  };

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

  useEffect(() => {
    if (!localStorage.getItem("tileList")) {
      localStorage.setItem("tileList", JSON.stringify(tileList));
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        tileList,
        addFurniture,
        placeEditMode,
        activePlaceEditMode,
        modelToPlace,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};
