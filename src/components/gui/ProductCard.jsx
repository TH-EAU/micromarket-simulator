import { Image, InputGroup, Panel } from "rsuite";
import { InputNumber } from "rsuite";
import { IconButton } from "rsuite";
import PlusIcon from "@rsuite/icons/Plus";
import { useState } from "react";
import { useCart } from "../../gameManager/CartContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const handleChange = (value) => {
    setQuantity(isNaN(value) ? 0 : Number(value));
  };

  const handleAdd = () => {
    addToCart(product);
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
        width={80}
        height={128}
      />
      <h5>{product.name}</h5>

      <p>PU : {product.inPrice}🪙</p>

      <IconButton icon={<PlusIcon />} onClick={handleAdd}></IconButton>
    </Panel>
  );
};

export default ProductCard;
