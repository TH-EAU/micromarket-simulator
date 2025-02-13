import { IconButton, ButtonToolbar } from "rsuite";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import { useState } from "react";
import BuyingModal from "./BuyingModal";
import { useGame } from "../../gameManager/GameContext";

const MainGUI = () => {
  const [openBuy, setOpenBuy] = useState(false);
  const { finances } = useGame();

  const openBuyingModal = () => {
    setOpenBuy(true);
  };

  const closeBuyingModal = () => {
    setOpenBuy(false);
  };

  return (
    <div>
      <ButtonToolbar>
        <IconButton icon={<AddOutlineIcon />} onClick={openBuyingModal}>
          Buy
        </IconButton>
        <BuyingModal open={openBuy} close={closeBuyingModal} />
        <p>Finances : {finances}🪙</p>
      </ButtonToolbar>
    </div>
  );
};

export default MainGUI;
