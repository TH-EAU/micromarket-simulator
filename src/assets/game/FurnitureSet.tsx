import { useContext } from "react";
import { ShopConfigContext } from "../../contexts/ShopConfigContext";
import FurnitureEntity from "./Furniture";
import { useFurnitures } from "../../services/furnitures.service";
import { Furniture, FurnitureType } from "../../models/Furniture";
import { UseQueryResult } from "react-query";

const FurnitureSet: React.FC = () => {
  const { data } = useFurnitures();

  return (
    <>
      <FurnitureEntity
        position={[2, 0, 4]}
        pathToModel="frigogidaire_small"
        capacity={4}
        size={1}
        type={FurnitureType.Storage}
        name="ta mere"
      />
      <FurnitureEntity
        position={[1, 0, 2]}
        pathToModel="frigogidaire_small"
        capacity={4}
        size={1}
        type={FurnitureType.Storage}
        name="ta mere"
      />
      {/* {data?.map((furniture) => {
        return (
          <FurnitureEntity
            name={furniture.name}
            position={furniture.position}
            pathToModel={furniture.pathToModel}
            capacity={furniture.capacity}
            type={furniture.type}
            size={furniture.size}
          />
        );
      })} */}
    </>
  );
};

export default FurnitureSet;
