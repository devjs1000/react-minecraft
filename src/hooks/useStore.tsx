import create from "zustand";
import { nanoid } from "nanoid";
import useKeyboard from "./useKeyboard";
import { useEffect } from "react";

export const useStore = create((set): object => {
  return {
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
    removeCube: (x: number, y: number, z: number): void => {
      set((state: store) => ({
        cubes: state.cubes.filter((cube: Cube) => {
          const [X, Y, Z] = cube.position;
          return X !== x || Y !== y || Z !== z;
        }),
      }));
    },
    setTexture: (texture: string): void => {
      set((state: store) => ({ ...state, texture }));
    },
    saveWorld: (): void => {},
    resetWorld: (): void => {},
  };
});

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
