import { Modal, Placeholder, Tabs } from "rsuite";
import Tab from "rsuite/esm/Tabs/Tab";
import FurnitureList from "./FurnitureList";
import ConsomableList from "./ConsomableList";
import CartPage from "./CartPage";
import { useGame } from "../../gameManager/GameContext";
import { CartProvider } from "../../gameManager/CartContext";

const BuyingModal = ({ open, close }) => {
  const { finances } = useGame();

  return (
    <CartProvider>
      <Modal open={open} onClose={close} size="full">
        <Modal.Header>
          <Modal.Title>Catalogue</Modal.Title>
          <p>Finance : {finances}🪙 </p>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="1" appearance="subtle" vertical>
            <Tabs.Tab eventKey="1" title="Products 📦">
              <Tabs defaultActiveKey="1" appearance="subtle">
                <Tabs.Tab eventKey="1" title="Food 🥑">
                  <ConsomableList />
                </Tabs.Tab>
                <Tabs.Tab eventKey="2" title="Furnitures 🪑">
                  <FurnitureList />
                </Tabs.Tab>
                <Tabs.Tab eventKey="3" title="Decorations 🏵️">
                  <Placeholder.Paragraph graph="circle" rows={5} />
                </Tabs.Tab>
              </Tabs>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Cart 👜">
              <CartPage />
            </Tabs.Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </CartProvider>
  );
};

export default BuyingModal;
