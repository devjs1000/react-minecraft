import React from "react";
import { usePlane } from "@react-three/cannon";
import { grassTexture } from "../images/textures";
import { RepeatWrapping, NearestFilter } from "three";

const Ground = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI/2, 0, 0], position: [0, 0, 0] }));
  grassTexture.magFilter = NearestFilter;
  grassTexture.wrapS = grassTexture.wrapT = RepeatWrapping;
  grassTexture.repeat.set(100, 100);

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={grassTexture} />
    </mesh>
  );
};

export default Ground;
