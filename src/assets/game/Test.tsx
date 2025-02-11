import { useState } from "react";
import AssetLoader from "../loaders/AssetLoader";

interface Elem {
  path: string;
  position: number[];
}

const Test: React.FC = () => {
  const [list, setList] = useState<Elem[]>([]);

  const addElement = (e: Elem) => {
    setList([...list, e]);
  };

  return (
    <>
      <div
        onClick={() =>
          addElement({
            path: "frigogidaire_small",
            position: [0, 0, list.length],
          })
        }
      >
        add
      </div>

      <mesh>
        {list.map((e) => {
          return <AssetLoader pathToModel={e.path} position={e.position} />;
        })}
      </mesh>
    </>
  );
};

export default Test;
