import { Button, Table } from "rsuite";
import { useCart } from "../../gameManager/CartContext";
import { useGame } from "../../gameManager/GameContext";
import { Stat, StatGroup } from "rsuite";
import { truncMyNum } from "../../utils/numUtils";
const { Column, HeaderCell, Cell } = Table;

const CartPage = () => {
  const { cart, getTotalCartAmount, deleteFromCart, validateCart } = useCart();
  const { finances } = useGame();

  return (
    <>
      <Table height={300} data={cart}>
        <Column align="center" width={200} fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column align="center" fixed>
          <HeaderCell>Price</HeaderCell>
          <Cell dataKey="inPrice" />
        </Column>

        <Column align="center" width={300}>
          <HeaderCell>...</HeaderCell>
          <Cell>
            {(rowData) => (
              <Button
                appearance="link"
                onClick={() => deleteFromCart(rowData.lineId)}
              >
                Delete
              </Button>
            )}
          </Cell>
        </Column>
      </Table>
      <StatGroup spacing={20}>
        <Stat>
          <Stat.Label>Finances</Stat.Label>
          <Stat.Value value={finances} />
        </Stat>

        <Stat>
          <Stat.Label>Total</Stat.Label>
          <Stat.Value
            style={{ color: "tomato" }}
            value={getTotalCartAmount()}
          />
        </Stat>
        <Stat>
          <Stat.Value> {">"} </Stat.Value>
        </Stat>
        <Stat>
          <Stat.Label>Result</Stat.Label>
          <Stat.Value
            style={{
              color:
                finances - getTotalCartAmount() > 0 ? "greenyellow" : "tomato",
            }}
            value={finances - getTotalCartAmount()}
          />
        </Stat>
      </StatGroup>
      <Button
        style={{ margin: "20px 10px" }}
        onClick={validateCart}
        disabled={finances - getTotalCartAmount() > 0 ? false : true}
      >
        Valider le panier
      </Button>
    </>
  );
};

export default CartPage;
