import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboard";

const TRAVEL = 1;
const JUMP = 5;

const Player = () => {
  const actions = useKeyboard();
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [0, 1, 0],
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

  const movement = (movementType: string | number, callback: Function) => {
    const isCalled = actions[movementType];
    if (isCalled) {
      callback();
    }
  };

  useFrame(() => {
    const [x, y, z] = position.current;
    const { moveBackward, moveForward, moveLeft, moveRight } = actions;
    camera.position.copy(new Vector3(x, y, z));
    const { set } = api.velocity;
    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      Number(!!moveBackward) - Number(!!moveForward)
    )
    const sideVector = new Vector3(
      Number(!!moveLeft) - Number(!!moveRight),
      0,
      0
    )

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(TRAVEL)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    movement("moveForward", () => {
      set(0, 0, -TRAVEL);
    });
    movement("moveBackward", () => {
      set(0, 0, TRAVEL);
    });
    movement("moveLeft", () => {
      set(-TRAVEL, 0, 0);
    });
    movement("moveRight", () => {
      set(TRAVEL, 0, 0);
    });
    movement("jump", () => {
      set(0, JUMP, 0);
    });
  });

  return <mesh ref={ref}></mesh>;
};

export default Player;
