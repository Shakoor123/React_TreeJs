import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Test from "./components/Cube";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <Hero />
      </div>
      <div className="container">
        <Service />
      </div>
      <div className="container">
        <Projects />
      </div>
      <div className="container">
        <Contact />
      </div>
    </div>
  );
}

export default App;
