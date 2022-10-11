import React from "react";
import { useBox } from "@react-three/cannon";
import textures from "../images/textures";
import { useStore } from "../hooks/useStore";

const Cube = ({ position, texture }: any) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const activeTexture = textures[`${texture}Texture`];
  console.log({ activeTexture, texture, textures });
  const [removeCube, addCube] = useStore((state: any) => [state.removeCube, state.addCube]);
  const handleRemove=(e:any)=>{
    e.stopPropagation();
    const clickedFace = Math.floor(e.faceIndex /2 )
    const [x, y, z] = ref.current.position;
    if(e.altKey){
      removeCube(x, y, z);
      return;
    }
    switch(clickedFace){
      case 0: 
        addCube(x+1, y, z);
        break;
      case 1:
        addCube(x-1, y, z);
        break;
      case 2:
        addCube(x, y+1, z);
        break;
      case 3:
        addCube(x, y-1, z);
        break;
      case 4:
        addCube(x, y, z+1);
        break;
      case 5:
        addCube(x, y, z-1);
    }
  }
  return (
    <mesh onClick={handleRemove} ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  );
};

export default Cube;
