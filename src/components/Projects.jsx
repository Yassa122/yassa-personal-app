// src/Home.js
import Navbar from "./Navbar";
import ProjectPreview from "./ProjectPreview";
import preview from "./logo/CairoMetroImg.png";
import "./styles/Home.css";

function Projects() {
  // Lottie options

  return (
    <div
      className="custom-gradient2 min-h-screen"
      // If you're not using Tailwind, you can use inline styles:
       style={{ background: "linear-gradient(135deg, #050000 0%, #070C39 0.01%, #000 55.21%)", minHeight: "100vh" }}
    >
      <div className="flex flex-col min-h-fit z-10 relative">
      <Navbar />

        <div className="flex-1 flex flex-col items-center justify-center">

          <div className=" text-gray-custom text-40px font-inter font-bold p-14 pb-16">
          MY PROJECTS

          </div>
          <div className=" lg:mt-[50px] mt-[20px]">
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
