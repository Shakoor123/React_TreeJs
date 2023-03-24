import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Mac from "./Mac";
const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={1}>
        <Mac />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} />
    </Canvas>
  );
};

export default Development;
