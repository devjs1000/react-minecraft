import { useStore } from "../hooks/useStore";
import Cube from "./Cube";

const Cubes = () => {
  const [cubes] = useStore((state: any) => [state.cubes]);
  console.log(cubes);
  return cubes.map((cube: any) => {
    return (
      <Cube key={cube.key} position={cube.position} texture={cube.texture} />
    );
  });
};

export default Cubes;