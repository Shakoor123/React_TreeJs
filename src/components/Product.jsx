import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Mars from "./Mars";
const Product = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={1}>
        <Mars />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Product;
