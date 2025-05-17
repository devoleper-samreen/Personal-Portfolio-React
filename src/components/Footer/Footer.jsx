import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>samreenmalik52292@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/samreen_malik0909/" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>

          <a href="https://www.linkedin.com/in/samreen-malik-b9484b291" target="_blank">
            <Linkedin color="white" size={"3rem"} />
          </a>

          <a href="https://github.com/devoleper-samreen" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
