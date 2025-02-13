/** Tiles can be desactivated. But it's a future feature that i'm just thinking */
const DesactivatedTile = ({ tile, onActivate }) => {
  const handleClick = () => {
    onActivate(tile.id);
  };

  return (
    <mesh position={tile.position} onClick={handleClick}>
      <boxGeometry args={[1, 0.01, 1]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
};

export default DesactivatedTile;
