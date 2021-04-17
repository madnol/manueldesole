import React, { useRef } from "react";

import Navbar from "./Components/Navbar";
import Me from "./Components/Me";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";

function App() {
  const projects = useRef();
  const contacts = useRef();
  const aboutMe = useRef();
  const handlePorfolio = e => {
    projects.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleContacts = e => {
    contacts.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleAbout = e => {
    aboutMe.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar
        handlePorfolio={handlePorfolio}
        handleContacts={handleContacts}
        handleAbout={handleAbout}
      />
      <Me aboutMe={aboutMe} />
      <Projects projects={projects} />
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;
