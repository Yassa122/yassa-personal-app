// src/Home.js
import Navbar from "./Navbar";
import ProjectPreview from "./ProjectPreview";
import preview from "./logo/CairoMetroImg.png";
import preview2 from "./logo/Ecs-help-desk.png";
//import preview3 from "./logo/PlasticPalletsImg.png"; // Import the new project preview image
import "./styles/Home.css";

function Projects() {
  return (
    <div
      className="custom-gradient2 min-h-screen"
      style={{ background: "linear-gradient(135deg, #050000 0%, #070C39 0.01%, #000 55.21%)", minHeight: "100vh" }}
    >
      <div className="flex flex-col min-h-fit z-10 relative">
        <Navbar />

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-gray-custom text-40px font-inter font-bold p-14 pb-8">
            MY PROJECTS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 lg:mt-12 mt-6 max-w-7xl mx-auto px-4">
            <ProjectPreview
              imageUrl={preview}
              projectLink="https://cairometrosystem.onrender.com/"
              title="Cairo Metro Reservation Tickets"
              description="The Cairo Metro Reservation Ticket Website streamlines ticket booking and management for Cairo's Metro system, offering real-time updates, secure transactions, and personalized user accounts."
            />

            <ProjectPreview
              imageUrl={preview2}
              projectLink="https://ecs-project-omega.vercel.app/#/Home"
              title="ECS Help Desk"
              description="The ECS Help Desk streamlines support with an efficient ticketing system, comprehensive user assistance, a self-service knowledge base, automated query responses, and detailed performance analytics."
            />

            <ProjectPreview
              imageUrl={preview2}
              projectLink="https://ecs-project-omega.vercel.app/#/Home"
              title="ECS Help Desk"
              description="The ECS Help Desk streamlines support with an efficient ticketing system, comprehensive user assistance, a self-service knowledge base, automated query responses, and detailed performance analytics."
            />

            <ProjectPreview
              imageUrl={preview2} // Use the new project preview image
              projectLink="https://plasticpallets.onrender.com/" // Link to the new project
              title="E-commerce Website for Plastic Pallets"
              description="An e-commerce platform designed for purchasing plastic pallets, featuring seamless navigation, real-time inventory updates, secure transactions, and a user-friendly interface."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
