import React from "react";

const About = () => {
  return (
    <div>
      <div
        style={{
          fontSize: "45px",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "35px",
        }}
      >
        About Us
      </div>
      <div
        style={{
          fontSize: "18px",
          margin: "30px",
          lineHeight: "1.6",
          textAlign: "center",
        }}
      >
        The Institute Technical Council caters to the needs for everything
        related to tech happening in the institute. Student Tech is one of the
        pillars of IIT Bombay, which fosters a culture of motivating young minds
        to pursue innovative ideas. We make sure that your ideas are heard and
        help you turn these ideas into reality in every way possible.
      </div>

      <div
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          margin: "30px",
          marginTop: "50px",
          marginBottom: "0px",
        }}
      >
        Our Mission
      </div>
      <div
        style={{
          fontSize: "18px",
          margin: "30px",
          lineHeight: "1.6",
          marginTop: "0px",
        }}
      >
        The Institute Technical Council (ITC) at IIT Bombay is dedicated to
        fostering a vibrant culture of technical innovation, creativity, and
        hands-on learning across the institute. Its mission is to empower
        students to explore emerging technologies, develop practical solutions
        to real-world problems, and cultivate a mindset of continuous learning
        and experimentation. ITC strives to create an inclusive and
        collaborative ecosystem where students from diverse disciplines can
        engage with technology, exchange ideas, and push the boundaries of
        innovation. By providing access to resources, mentorship, and platforms
        for execution, ITC ensures that every student has the opportunity to
        transform their ideas into impactful outcomes.
      </div>
      <div
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          margin: "30px",
          marginTop: "50px",
          marginBottom: "0px",
        }}
      >
        Our Goals
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "33% 33% 33%" }}>
        <div
          style={{
            fontSize: "18px",
            margin: "30px",
            lineHeight: "1.6",
            backgroundColor: "#1a1a1a",
            padding: "20px",
            borderRadius: "10px",
            marginRight: "15px",
          }}
        >
          To promote a strong technical culture within the institute by
          encouraging participation in innovative and project-based activities.
        </div>
        <div
          style={{
            fontSize: "18px",
            margin: "30px",
            lineHeight: "1.6",
            backgroundColor: "#1a1a1a",
            padding: "20px",
            borderRadius: "10px",
            marginRight: "15px",
          }}
        >
          To provide students with opportunities to enhance their technical
          skills through workshops, competitions, and hands-on experiences.
        </div>
        <div
          style={{
            fontSize: "18px",
            margin: "30px",
            lineHeight: "1.6",
            backgroundColor: "#1a1a1a",
            padding: "20px",
            borderRadius: "10px",
            marginRight: "15px",
          }}
        >
          To support and nurture student-led initiatives and projects, enabling
          them to grow from conceptual ideas to fully realized implementations.
        </div>
        <div
          style={{
            fontSize: "18px",
            margin: "30px",
            lineHeight: "1.6",
            backgroundColor: "#1a1a1a",
            padding: "20px",
            borderRadius: "10px",
            marginRight: "15px",
          }}
        >
          To facilitate collaboration across different domains and disciplines,
          fostering interdisciplinary innovation.
        </div>
        <div
          style={{
            fontSize: "18px",
            margin: "30px",
            lineHeight: "1.6",
            backgroundColor: "#1a1a1a",
            padding: "20px",
            borderRadius: "10px",
            marginRight: "15px",
          }}
        >
          To connect students with industry trends, emerging technologies, and
          real-world challenges.
        </div>
        <div
          style={{
            fontSize: "18px",
            margin: "30px",
            lineHeight: "1.6",
            backgroundColor: "#1a1a1a",
            padding: "20px",
            borderRadius: "10px",
            marginRight: "15px",
          }}
        >
          To build a sustainable ecosystem of learning, mentorship, and
          knowledge-sharing within the institute.
        </div>
      </div>
      <div style={{ maxWidth: "1100px", margin: "0 auto", lineHeight: "1.8" }}>
        <h2
          style={{
            color: "#ffffff",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Our Activities
        </h2>

        <h3 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Professional Technical Teams
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {[
            {
              name: "IITB Racing",
              text: "Designs and manufactures high-performance electric formula-style race cars for international Formula Student competitions.",
            },
            {
              name: "AUV-IITB",
              text: "Builds autonomous underwater vehicles (Matsya series) capable of navigation and task execution without human control.",
            },
            {
              name: "Team Shunya",
              text: "Designs net-zero energy, solar-powered houses for the Solar Decathlon competition.",
            },
            {
              name: "Mars Rover Team",
              text: "Develops semi-autonomous rovers for Martian terrain with robotic arms and soil analysis systems.",
            },
            {
              name: "IITB Rocket Team",
              text: "Designs sounding rockets, propulsion systems, and recovery mechanisms targeting specific altitudes.",
            },
            {
              name: "iGEM IITB",
              text: "Engineers biological systems using DNA to address environmental and medical challenges.",
            },
          ].map((team) => (
            <div
              style={{
                backgroundColor: "#1a1a1a",
                padding: "20px",
                borderRadius: "10px",
                width: "320px",
              }}
            >
              <h4 style={{ color: "#ffffff" }}>{team.name}</h4>
              <p style={{ marginTop: "10px" }}>{team.text}</p>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Technical Clubs
        </h3>

        <div style={{ marginBottom: "40px" }}>
          <p>
            ITC’s technical clubs focus on structured, hands-on learning through
            competitions, workshops, and mentorship-driven programs.
          </p>

          <ul style={{ marginTop: "15px" }}>
            <li>
              <b>ERC:</b> XLR8 robotics competition and embedded systems
              workshops.
            </li>
            <li>
              <b>WnCC:</b> Seasons of Code (SoC) and dev-focused hackathons.
            </li>
            <li>
              <b>Krittika:</b> Telescope-based astronomy and space data
              analysis.
            </li>
            <li>
              <b>MnP:</b> Advanced reading groups and problem-solving
              competitions.
            </li>
          </ul>
        </div>

        <h3 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Council-Wide Initiatives
        </h3>

        <div style={{ marginBottom: "40px" }}>
          <p>
            ITC organizes institute-level programs that engage a large number of
            students and provide structured pathways for innovation.
          </p>

          <ul style={{ marginTop: "15px" }}>
            <li>
              <b>ITSP:</b> Summer projects with funding, mentorship, and final
              exhibitions.
            </li>
            <li>
              <b>Inter-IIT Tech Meet:</b> National competition involving AI,
              robotics, and engineering challenges.
            </li>
            <li>
              <b>Tinkerers’ Lab:</b> 24/7 maker space with 3D printers, CNC
              machines, and electronics.
            </li>
            <li>
              <b>Summer of Science:</b> Research-oriented theoretical
              exploration projects.
            </li>
          </ul>
        </div>

        <h3 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Specialized Communities
        </h3>

        <div>
          <ul>
            <li>
              <b>CSeC:</b> Cybersecurity training and CTF competitions.
            </li>
            <li>
              <b>Quant Community:</b> Algorithmic trading and financial
              modeling.
            </li>
            <li>
              <b>AI Community:</b> Research paper discussions and ML
              competitions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
