import { IconButton, ButtonToolbar } from "rsuite";
import { useState } from "react";
import BuyingModal from "./BuyingModal";
import { useGame } from "../../gameManager/GameContext";
import { CartProvider } from "../../gameManager/CartContext";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import GridIcon from "@rsuite/icons/Grid";
import StockPanel from "./StockPanel";
import ShortCutHoneyPot from "./ShortcutHoneyPot";

const MainGUI = () => {
  const [openBuy, setOpenBuy] = useState(false);
  const [openStock, setOpenStock] = useState(false);
  const { finances } = useGame();

  const openBuyingModal = () => {
    setOpenBuy(true);
  };

  const closeBuyingModal = () => {
    setOpenBuy(false);
  };

  const openStockPanel = () => {
    setOpenStock(true);
  };

  const closeStockPanel = () => {
    setOpenStock(false);
  };

  const abort = (e) => {
    console.log(e);
  };

  return (
    <>
      <ShortCutHoneyPot />
      <div>
        <ButtonToolbar>
          <IconButton icon={<AddOutlineIcon />} onClick={openBuyingModal}>
            Buy
          </IconButton>
          <IconButton icon={<GridIcon />} onClick={openStockPanel}>
            Stock
          </IconButton>
          <p>Finances : {finances}🪙</p>
        </ButtonToolbar>
      </div>

      <CartProvider>
        <BuyingModal open={openBuy} close={closeBuyingModal} />
      </CartProvider>
      <StockPanel open={openStock} close={closeStockPanel} />
    </>
  );
};

export default MainGUI;
