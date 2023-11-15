import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; // Import the About component
// ... other imports (e.g., Navbar, if you have one)

function App() {
  return (
    <Router>
      {/* If you have a Navbar, include it here so it's always visible */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
