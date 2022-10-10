import create from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [
    {
      key: nanoid(),
      position: [2, .5, 0],
      texture: "whiteWood",
    },
    {
        key: nanoid(),
        position: [1, .5, 0],
        texture: "whiteWood",
      },
  ],
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
  removeCube: () => {},
  setTexture: () => {},
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
