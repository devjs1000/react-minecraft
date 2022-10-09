import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboard";

const Player = () => {
  const actions = useKeyboard();
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [0, 5, 0],
    type: "Dynamic",
  }));

  const velocity = useRef([0, 0, 0]);
  const position = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((p) => (position.current = p));
  }, [api.position]);

  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api.velocity]);

  useFrame(() => {
    const [x, y, z] = position.current;
    camera.position.copy(new Vector3(x, y, z));
  });
  return <mesh ref={ref}></mesh>;
};

export default Player;
