import { createContext, useContext, useState } from "react";
import { truncMyNum } from "../utils/numUtils";
import { useGame } from "./GameContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const { buy, addToInventory } = useGame();

  const getTotalCartAmount = () => {
    return cart.reduce(
      (total, item) => total + truncMyNum(item.quantity * item.product.inPrice),
      0
    );
  };

  const addToCart = (products) => {
    if (!cart.find((i) => i.product.id === products.product.id)) {
      setCart([...cart, products]);
      return;
    }

    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.product.id === products.product.id
          ? {
              ...item,
              quantity: item.quantity + products.quantity,
            }
          : item
      );
    });
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
