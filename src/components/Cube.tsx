import React from "react";
import { useBox } from "@react-three/cannon";
import textures from "../images/textures";

const Cube = ({ position, texture }: any) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const activeTexture = textures[`${texture}Texture`]
  console.log({ activeTexture, texture, textures });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  );
};

export default Cube;
