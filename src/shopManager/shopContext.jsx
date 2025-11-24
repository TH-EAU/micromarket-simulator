/** Gestion of the tiles, visual elements of the shop */
import React, { createContext, useContext, useEffect, useState } from "react";
import { Grid } from "../models/Grid";
import { useGame } from "../gameManager/GameContext";
import { Furniture } from "../models/Furniture";

const BASIC_GRID_SIZE = 10;

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [placeEditMode, setPlaceEditMode] = useState(false);
  const [itemToPlace, setItemToPlace] = useState(null);
  const [tileList, setTileList] = useState(Grid.generateGrid(BASIC_GRID_SIZE));

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
    setItemToPlace(null);
  };

  const addFurniture = (tileId, furniture, rotation) => {
    if (!furniture) {
      throw new Error("You must provide a furniture !");
    }

    if (!(furniture.product instanceof Furniture)) {
      abortPlaceEditMode();
      throw new Error("You must provide an Instance of Furniture !");
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
      return newList;
    });
    abortPlaceEditMode();
    deleteFromInventory(furniture.lineId);
  };

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
