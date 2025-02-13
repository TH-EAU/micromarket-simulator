import React, { createContext, useContext, useEffect, useState } from "react";
import { Grid } from "../models/Grid";
import { useGame } from "../gameManager/GameContext";

const BASIC_GRID_SIZE = 10;

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [placeEditMode, setPlaceEditMode] = useState(false);
  const [itemToPlace, setItemToPlace] = useState(null);
  const [tileList, setTileList] = useState(() => {
    const savedList = localStorage.getItem("tileList");
    return savedList
      ? JSON.parse(savedList)
      : Grid.generateGrid(BASIC_GRID_SIZE);
  });
  const { deleteFromInventory } = useGame();

  const activePlaceEditMode = (item) => {
    if (!item) {
      throw new Error("Edit mode must have item to place !");
    }
    setPlaceEditMode(true);
    setItemToPlace(item);
  };

  const abortPlaceEditMode = () => {
    setPlaceEditMode(false);
  };

  const addFurniture = (tileId, furniture, rotation) => {
    if (!furniture) {
      throw new Error("You must provide a furniture !");
    }

    setTileList((prevList) => {
      const newList = prevList.map((tile) =>
        tile.id === tileId
          ? {
              ...tile,
              furniture,
              rotation,
              busy: true,
            }
          : tile
      );

      localStorage.setItem("tileList", JSON.stringify(newList));
      return newList;
    });
    setPlaceEditMode(false);
    setItemToPlace(null);
    deleteFromInventory(furniture.lineId);
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
        abortPlaceEditMode,
        itemToPlace,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};
