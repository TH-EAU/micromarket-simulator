import { Furniture } from "@/models/Furniture";
import AssetLoader from "../loaders/AssetLoader";

const FurnitureEntity: React.FC<Furniture> = ({
  name,
  position,
  pathToModel,
  capacity,
  size,
  type,
}) => {
  return <AssetLoader pathToModel={pathToModel} position={position} />;
};

export default FurnitureEntity;
