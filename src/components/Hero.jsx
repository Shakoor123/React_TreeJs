import React from "react";
import "./Hero.css";
import hero from "../assets/hero.jpg";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="heroBody">
        <div className="heroLeft">
          <span className="title">Full Stack Developer</span>
          <span className="text">
            ━ I design and code beautifully simple things,<br></br> and I love
            what I do.
          </span>
          <button className="contactUs">Know More</button>
        </div>
        <div className="heroRight">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#1C3094"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img src={hero} alt="" className="heroImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
