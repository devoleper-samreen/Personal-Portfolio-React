import { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="skills">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            All Thinks
          </span>
          <span>Skills & Tools</span>
          <span>
            I work across the full stack – from building smooth UIs with React and
            <br />
            Tailwind to creating REST APIs using Node.js and Express.
            text
            <br />
            I manage data with MongoDB, and push code with Git and GitHub.
            <br />
            I also use tools like Postman, VS Code, and sometimes Figma for
            <br />
            UI planning.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <FaNodeJs size={60} color="green" />
            {/* <img src={Upwork} alt="" /> */}
          </div>
          <div className="w-secCircle">
            <FaJsSquare size={60} color="green" />
            {/* <img src={Fiverr} alt="" /> */}
          </div>
          <div className="w-secCircle">
            <FaReact size={70} color="orange" />
            {/* <img src={Amazon} alt="" /> */}
          </div>{" "}
          <div className="w-secCircle">
            <SiExpress size={60} color="green" />
            {/* <img src={Shopify} alt="" /> */}
          </div>
          <div className="w-secCircle">
            <SiMongodb size={60} color="green" />
            {/* <img src={Facebook} alt="" /> */}
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
