import create from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
  texture: "whiteWood",
  cubes: [],
  addCube: (x: number, y: number, z: number) => {
    set((state: store) => ({
      cubes: [
        ...state.cubes,
        {
          position: [x, y, z],
          texture: state.texture,
          key: nanoid(),
        },
      ],
    }));
  },
  removeCube: (x:number, y:number, z:number) => {
    set((state: store) => ({
      cubes: state.cubes.filter((cube:Cube)=>{
        const [X, Y, Z] = cube.position;
        return X !== x || Y !== y || Z !== z;
      })
    }));
  },
  setTexture: () => {

  },
  saveWorld: () => {},
  resetWorld: () => {},
}));

interface Cube {
  key: string;
  position: [number, number, number];
  texture: string;
}

type store = {
  texture: string;
  cubes: Cube[];
  addCube: (x: number, y: number, z: number) => void;
  removeCube: () => void;
  setTexture: () => void;
  saveWorld: () => void;
  resetWorld: () => void;
};
