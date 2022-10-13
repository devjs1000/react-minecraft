import React from "react";
import { usePlane } from "@react-three/cannon";
import { grassTexture } from "../images/textures";
import { RepeatWrapping, NearestFilter } from "three";
import { useStore } from "../hooks/useStore";

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0.5, 0],
  }));
  grassTexture.magFilter = NearestFilter;
  grassTexture.wrapS = grassTexture.wrapT = RepeatWrapping;
  grassTexture.repeat.set(100, 100);

  const [addCube, removeCube] = useStore((state: any) => [state.addCube, state.removeCube]);

  const handleClick = (e: any) => {
    e.stopPropagation();
    const [x, y, z] = e.point.toArray().map((a: number) => Math.floor(a));
    addCube(x, y+1, z);
  };
  return (
    <mesh onClick={handleClick} ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={grassTexture} />
    </mesh>
  );
};

export default Ground;
