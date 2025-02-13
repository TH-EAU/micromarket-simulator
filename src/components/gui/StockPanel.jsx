import { Button, Drawer, Image, VStack } from "rsuite";
import { useGame } from "../../gameManager/GameContext";
import { useShop } from "../../shopManager/shopContext";

const StockPanel = ({ open, close }) => {
  const { inventory } = useGame();
  const { activePlaceEditMode } = useShop();

  const handleSelect = (item) => {
    activePlaceEditMode(item);
    close();
  };

  return (
    <Drawer size="xs" open={open} onClose={close}>
      <Drawer.Header title="Stock"></Drawer.Header>
      <Drawer.Body>
        <VStack>
          {inventory.map((item) => {
            return (
              <Button key={item.id} onClick={() => handleSelect(item)}>
                <Image src={item.image} />
              </Button>
            );
          })}
        </VStack>
      </Drawer.Body>
    </Drawer>
  );
};

export default StockPanel;
