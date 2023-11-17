// src/Home.js
import Navbar from "./Navbar";
import TextComponent from "./TextComponent";
import rocketAnimation from "./logo/SpaceRocket.json"; // Import the Lottie file
import glowys from "./logo/glowy.json";
import MyProjects from "./myProjects";
import ProjectPreview from "./ProjectPreview";
import preview from "./logo/CairoMetroImg.png";
import "./styles/Home.css";
import Lottie from "lottie-react"; // Import Lottie

function Home() {
  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const glowy = {
    loop: true,
    autoplay: true,
    animationData: glowys,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom right, #070547, #020004, #1B033A)",
      }}
      className="Home relative"
    >
      {/* Lottie Logo */}
      <div className="absolute mt-[30%] sm:mt-0"
        style={{
          zIndex: 1,
          height:1000
        }}
      >
        <Lottie {...glowy} />
      </div>

      <div
        style={{
          position: "absolute",
          right: "0",
          top: "120px",
          maxWidth: "80%",
          maxHeight: "100%",
          zIndex: 1,
        }}
      >
        <Lottie {...defaultOptions} />
      </div>

      <div className="flex flex-col min-h-fit z-10 relative">
        <div className="flex-1 flex flex-col items-center justify-center">
          <Navbar />

          {/* Use flex-col here */}
          <TextComponent
            text1="Developing intelligent, seamless "
            text2=" software."
            subText="Innovation leaps from student's code."
          />

          {/* Added "My Projects" text here */}
          <MyProjects />

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

export default Home;
