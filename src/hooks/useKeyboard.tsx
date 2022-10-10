import React, { useCallback, useEffect, useState } from "react";

const actionKeys = {
  Space: "jump",
  KeyW: "moveForward",
  KeyA: "moveLeft",
  KeyS: "moveBackward",
  KeyD: "moveRight",
  KeyE: "interact",
  KeyQ: "drop",
  KeyR: "reload",
  KeyF: "use",
  KeyC: "crouch",
  KeyV: "sprint",
  KeyP: "pause",
  KeyM: "map",
  KeyB: "inventory",
  KeyN: "crafting",
  KeyL: "light",
  KeyH: "health",
  KeyT: "chat",
  Digit1: "wood",
  Digit2: "whiteWood",
  Digit3: "grass",
} as any;

const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveLeft: false,
    moveRight: false,
    moveForward: false,
    moveBackward: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
  }) as any;

  const createAction = useCallback((setActionTo: Boolean) => {
    return (event: KeyboardEvent) => {
      const action: any = actionKeys[event.code];
      if (action) {
        setActions((actions: any) => ({ ...actions, [action]: setActionTo }));
      }
    };
  }, []);

  const handleKeyDown = createAction(true);
  const handleKeyUp = createAction(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return actions;
};

export default useKeyboard;
