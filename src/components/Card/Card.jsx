import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color, liveDemo, github }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" style={{
        width: "100%",
        height: "200px",
        objectFit: "cover",
      }} />
      <span>{heading}</span>
      <span>{detail}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
      <div style={{ display: "flex", gap: "10px" }}>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            textDecoration: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            transition: "0.3s ease",
          }}
        >
          Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            textDecoration: "none",
            backgroundColor: "#333",
            color: "#fff",
            transition: "0.3s ease",
          }}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
