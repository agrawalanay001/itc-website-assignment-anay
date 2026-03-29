import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#111",
        padding: "20px 40px",
        marginTop: "60px",
        color: "#dcdcdc",
        opacity: 0.8,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontSize: "14px" }}>© 2026 ITC, IIT Bombay</div>

        <div style={{ display: "flex", gap: "20px", fontSize: "22px" }}>
          <a href="https://www.instagram.com/tech.iitb/">
            <IoLogoInstagram style={{ cursor: "pointer" }} />
          </a>
          <a href="https://www.facebook.com/tech.iitb/">
            <MdOutlineFacebook style={{ cursor: "pointer" }} />
          </a>
          <a href="https://x.com/tech_iitb/">
            <FaTwitter style={{ cursor: "pointer" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
