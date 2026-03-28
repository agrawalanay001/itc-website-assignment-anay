import React from "react";
import NavBar from "./NavBar.tsx";
import FullLogo from "./assets/ITCLogoWhiteFull.png";
const Home = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "40px",
        }}
      >
        <img
          src={FullLogo}
          alt="itc logo"
          style={{ height: "200px", width: "auto" }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "50px",
          fontWeight: "bold",
          letterSpacing: "2px",
          color: "#ffffff",
        }}
      >
        INSTITUTE TECHNICAL COUNCIL
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "22px",
          letterSpacing: "4px",
          color: "#cfcfcf",
          opacity: 0.9,
        }}
      >
        INNOVATE • TINKER • CREATE
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "80px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "30px",
            borderRadius: "12px",
            width: "320px",
            color: "#dcdcdc",
            textAlign: "left",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            marginRight: "150px",
          }}
        >
          <h3 style={{ color: "#ffffff", marginBottom: "15px" }}>
            Who We Are?
          </h3>

          <p style={{ lineHeight: "1.6" }}>
            We are the 'T' in IIT Bombay.
            <br /> The Institute Technical Council (ITC) is the central student
            body at IIT Bombay that drives all technical activities and
            innovation across campus.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "30px",
            borderRadius: "12px",
            width: "320px",
            color: "#dcdcdc",
            textAlign: "left",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
          }}
        >
          <h3 style={{ color: "#ffffff", marginBottom: "15px" }}>
            What We Do?
          </h3>

          <p style={{ lineHeight: "1.6" }}>
            We organize workshops, hackathons, and competitions while supporting
            student-led projects and fostering a culture of innovation,
            collaboration, and hands-on learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
