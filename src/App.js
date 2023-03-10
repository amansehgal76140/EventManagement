import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
       <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes> 
    </div>
  );
}

export default App;
