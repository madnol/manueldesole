import React, { useRef } from "react";

import Navbar from "./Components/Navbar";
import Me from "./Components/Me";
import Projects from "./Components/Projects";
function App() {
  const projects = useRef();

  const handlePorfolio = e => {
    projects.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar handlePorfolio={handlePorfolio} />
      <Me />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
