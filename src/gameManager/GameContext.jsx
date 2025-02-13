import { createContext, useContext, useEffect, useState } from "react";

const BASIC_FINANCES = 10000;

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [finances, setFinances] = useState(BASIC_FINANCES);
  const [inventory, setInventory] = useState([]);

  const buy = (amount) => {
    const total = finances - amount;
    if (total < 0) {
      throw new Error("You don't have enough money for this operation !");
    }
    setFinances(total);
  };

  const addToInventory = (items) => {
    setInventory([...inventory, ...items]);
  };

  const deleteFromInventory = (lineId) => {
    setInventory((prevInventory) =>
      prevInventory.filter((item) => item.lineId !== lineId)
    );
  };

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
