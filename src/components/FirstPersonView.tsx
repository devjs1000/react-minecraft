import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";

const FirstPersonView = () => {
  const { camera, gl } = useThree();
    return (
        <PointerLockControls
            camera={camera}
            domElement={gl.domElement}    />
    );
};

export default FirstPersonView;
