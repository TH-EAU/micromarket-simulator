import { createContext, useContext, useEffect, useState } from "react";

const BASIC_FINANCES = 10000;

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [finances, setFinances] = useState(
    localStorage.getItem("finances") || BASIC_FINANCES
  );
  const [inventory, setInventory] = useState([]);

  const buy = (amont) => {
    const total = finances - amont;
    if (total < 0) {
      throw new Error("You don't have enough money for this operation !");
    }
    setFinances(total);
  };

  const addToInventory = (items) => {
    setInventory([...inventory, items]);
  };

  useEffect(() => {
    if (!localStorage.getItem("finances")) {
      localStorage.setItem("finances", JSON.stringify(finances));
    }
  });

  return (
    <GameContext.Provider value={{ finances, buy, inventory, addToInventory }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  return useContext(GameContext);
};
