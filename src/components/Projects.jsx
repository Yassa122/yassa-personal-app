// src/Home.js
import Navbar from "./Navbar";
import ProjectPreview from "./ProjectPreview";
import preview from "./logo/CairoMetroImg.png";
import preview2 from "./logo/Ecs-help-desk.png
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
          
            <div className="flex flex-col sm:flex-row justify-center items-center lg:mt-[50px] mt-[20px] sm:space-x-24 space-y-4 sm:space-y-0">
            <ProjectPreview
              imageUrl={preview}
              projectLink="https://cairometrosystem.onrender.com/"
              title="Cairo metro reservation tickets"
              description="The Cairo Metro Reservation Ticket Website streamlines ticket booking and management for Cairo's Metro system, offering real-time updates, secure transactions, and personalized user accounts."
            />

            <ProjectPreview
              imageUrl={preview2}
              projectLink="https://ecs-project-omega.vercel.app/#/Home"
              title="ECS-Help-Desk"
              description="The ECS Help Desk streamlines support with an efficient ticketing system, comprehensive user assistance, a self-service knowledge base, automated query responses, and detailed performance analytics."
            />
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Projects;
