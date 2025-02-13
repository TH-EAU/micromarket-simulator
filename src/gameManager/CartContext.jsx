import { createContext, useContext, useState } from "react";
import { truncMyNum } from "../utils/numUtils";
import { useGame } from "./GameContext";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const { buy, addToInventory } = useGame();

  const getTotalCartAmount = () => {
    return cart.reduce((total, item) => total + item.product.inPrice, 0);
  };

  const addToCart = (product) => {
    setCart([...cart, { product, lineId: uuidv4() }]);
  };

  const deleteFromCart = (lineId) => {
    setCart((prevCart) => prevCart.filter((item) => item.lineId !== lineId));
  };

  const validateCart = () => {
    buy(getTotalCartAmount());
    addToInventory(cart);
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getTotalCartAmount,
        deleteFromCart,
        validateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
