import { OrbitControls, RenderTexture, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Cube = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "1200px",
        scrollSnapAlign: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 3, 1]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial>
            <RenderTexture attach="map">
              <perspectiveCamera makeDefault position={[0, 0, 5]} />
              <color attach={"background"} args={["aqua"]} />
              <Text fontSize={1} color="black">
                Designing
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </div>
  );
};

export default Cube;
