import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Social from "./Social";
const SocialMedia = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={1}>
        <Social />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} />
    </Canvas>
  );
};

export default SocialMedia;
