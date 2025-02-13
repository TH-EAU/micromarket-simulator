import { Image, InputGroup, Panel } from "rsuite";
import { InputNumber } from "rsuite";
import { IconButton } from "rsuite";
import PlusIcon from "@rsuite/icons/Plus";
import { useState } from "react";
import { useCart } from "../../gameManager/CartContext";
import { v4 as uuidv4 } from "uuid";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useCart();

  const handleChange = (value) => {
    setQuantity(isNaN(value) ? 0 : Number(value));
  };

  const handleAdd = () => {
    addToCart({
      product,
      quantity,
      lineId: uuidv4(),
    });
  };

  return (
    <Panel
      style={{
        background: "#FFF1",
        boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
        textAlign: "center",
        width: 200,
        borderRadius: 0,
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        rounded
        width={64}
        height={128}
      />
      <h5>{product.name}</h5>

      <p>PU : {product.inPrice}🪙</p>
      <p>PT : {Math.trunc(product.inPrice * quantity * 100) / 100}🪙</p>

      <InputGroup>
        <InputNumber
          min={0}
          placeholder="0"
          value={quantity}
          onChange={handleChange}
        />
        <IconButton icon={<PlusIcon />} onClick={handleAdd}></IconButton>
      </InputGroup>
    </Panel>
  );
};

export default ProductCard;
