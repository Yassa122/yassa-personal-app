import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"; // Import the About component
import Projects from "./components/Projects";
// ... other imports (e.g., Navbar, if you have one)
import BachelorThesisDetails from "./components/Bachelor-thesis";
function App() {
  return (
    <Router>
      {/* If you have a Navbar, include it here so it's always visible */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/bachelor-thesis" element={<BachelorThesisDetails />} />

        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
