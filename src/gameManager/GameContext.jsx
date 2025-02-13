import { createContext, useContext, useEffect, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [availableTiles, setAvailableTiles] = useState(
    localStorage.getItem("availableTiles") || 10
  );

  const lvlUp = () => {
    setAvailableTiles((prev) => {
      const newValue = prev + 10;
      localStorage.setItem("availableTiles", newValue);
      return newValue;
    });
  };

  const consumeTile = () => {
    setAvailableTiles((prev) => {
      const newValue = prev - 1;
      localStorage.setItem("availableTiles", newValue);
      return newValue;
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("availableTiles")) {
      localStorage.setItem("availableTiles", availableTiles);
    }
  });

  return (
    <GameContext.Provider value={{ availableTiles, consumeTile }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  return useContext(GameContext);
};
