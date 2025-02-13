import { createContext, useContext, useEffect, useState } from "react";

const BASIC_FINANCES = 10000;

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [finances, setFinances] = useState(
    localStorage.getItem("finances") || BASIC_FINANCES
  );
  const [inventory, setInventory] = useState(() => {
    const savedList = localStorage.getItem("inventory");
    return savedList ? JSON.parse(savedList) : [];
  });

  const buy = (amont) => {
    const total = finances - amont;
    if (total < 0) {
      throw new Error("You don't have enough money for this operation !");
    }
    setFinances(() => {
      localStorage.setItem("finances", total);
      return total;
    });
  };

  const addToInventory = (items) => {
    setInventory((prevList) => {
      const newList = [...prevList, ...items];
      localStorage.setItem("inventory", JSON.stringify(newList));
      return newList;
    });
  };

  const deleteFromInventory = (lineId) => {
    setInventory((prevInventory) => {
      const newList = prevInventory.filter((item) => item.lineId !== lineId);
      localStorage.setItem("inventory", JSON.stringify(newList));
      return newList;
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("finances")) {
      localStorage.setItem("finances", JSON.stringify(finances));
    }
    if (!localStorage.getItem("inventory")) {
      localStorage.setItem("inventory", JSON.stringify(inventory));
    }
  });

  return (
    <GameContext.Provider
      value={{ finances, buy, inventory, addToInventory, deleteFromInventory }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  return useContext(GameContext);
};
