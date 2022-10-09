import { TextureLoader } from "three";
import { greenGrass, brownWood, whiteWood } from ".";

export const grassTexture = new TextureLoader().load(greenGrass);
export const woodTexture = new TextureLoader().load(brownWood);
export const whiteWoodTexture = new TextureLoader().load(whiteWood);
