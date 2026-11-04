import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import VisitorTracker from "./components/VisitorTracker";

// Secondary pages are split into their own chunks so the home page only ships what it renders
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const BachelorThesisDetails = lazy(() => import("./components/Bachelor-thesis"));
const VisitorDashboard = lazy(() => import("./components/VisitorDashboard"));

function App() {
  return (
    <Router>
      {/* Visitor Tracker - invisible component that tracks all visitors */}
      <VisitorTracker />

      <Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/bachelor-thesis" element={<BachelorThesisDetails />} />
          <Route path="/admin/visitors" element={<VisitorDashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
