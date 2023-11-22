// src/Home.js
import Navbar from "./Navbar";

import ProjectPreview from "./ProjectPreview";
import preview from "./logo/CairoMetroImg.png";
import "./styles/Home.css";

function Projects() {
  // Lottie options

  return (
    <div
      style={{
        background: "bg-custom-gradient2",
      }}
      
    >
      <div className="flex flex-col min-h-fit z-10 relative">
        <div className="flex-1 flex flex-col items-center justify-center">
          <Navbar />
          {/* Added "My Projects" text here */}-
          <div className="lg:ml-[-780px] lg:mt-[50px] mt-[20px]">
            <ProjectPreview
              imageUrl={preview}
              projectLink="https://cairometrosystem.onrender.com/"
              title="Cairo metro reservation tickets"
              description="The Cairo Metro Reservation Ticket Website streamlines ticket booking and management for Cairo's Metro system, offering real-time updates, secure transactions, and personalized user accounts."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
