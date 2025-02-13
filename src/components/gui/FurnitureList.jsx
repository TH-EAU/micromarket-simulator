import { availableFurnitures } from "../../data/AvailableFurnitures";
import ProductCard from "./ProductCard";

const FurnitureList = () => {
  return (
    <>
      {availableFurnitures.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default FurnitureList;
