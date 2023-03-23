import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Tab from "./Tab";
const SocialMedia = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={1}>
        <Tab />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SocialMedia;
