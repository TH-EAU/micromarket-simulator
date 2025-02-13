import React, { useEffect } from "react";
import { useShop } from "../../shopManager/shopContext";

const ShortCutHoneyPot = () => {
  const { abortPlaceEditMode } = useShop();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        abortPlaceEditMode();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default ShortCutHoneyPot;
