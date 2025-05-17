import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  const mockmate = 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww'

  return (
    <div className="services" id="projects">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Projects</span>
        <spane>
          Here are some of the projects I’ve worked on using modern tech stacks.
          <br />
          Each one helped me grow as a developer.
        </spane>

        <button className="button s-button">Hire Me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={mockmate}
            heading={"ElevateHub"}
            detail={"Built ElevateHub, a full-stack mentor booking app with user auth, mentor listings, booking system, and payment gateway integration."}
            // liveDemo={''}
            github={'https://github.com/devoleper-samreen/Elevate-Hub'}
          />
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={mockmate}
            heading={"MockMate"}
            detail={"A full-stack mock interview platform. Features with user login, real-time video calling interview with collaborative code editor."}
            // liveDemo={'#'}
            github={'https://github.com/devoleper-samreen/MockMate'}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={mockmate}
            heading={"Blog App"}
            detail={
              "Built a full-stack blog app with React and Appwrite, featuring user authentication and full CRUD functionality for posts. Handled backend tasks like auth, database, and storage using Appwrite."
            }
            liveDemo={'https://my-blog-app-gamma-five.vercel.app/'}
            github={'https://github.com/devoleper-samreen/Blog-App'}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
