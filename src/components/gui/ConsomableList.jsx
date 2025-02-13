import { availableConsomables } from "../../data/AvailableConsomables";
import ProductCard from "./ProductCard";

const ConsomableList = () => {
  return (
    <>
      {availableConsomables.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ConsomableList;
