import React from "react";
import core_team2022 from "./assets/core_team2022.png";
import Chemistry from "./assets/chemistry.png";
import ChemETL from "./assets/ChemETL.png";
import biox from "./assets/Biox.png";
import aero from "./assets/Aero.png";
import energy from "./assets/Energy.png";
import ERC from "./assets/ERC.png";
import mnp from "./assets/MnP.png";
import pg from "./assets/pg_team_poster.png";
import design from "./assets/team_design.png";
import web from "./assets/team_web.png";
import media from "./assets/team-media.png";
import TL from "./assets/TL.png";
import wncc from "./assets/WnCC.png";

const Team = () => {
  return (
    <div>
      <div
        style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}
      >
        TEAM 2022-2023
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          src={core_team2022}
          alt="Core Team"
          style={{ width: "800px", height: "auto" }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gap: "20px",
          padding: "20px",
        }}
      >
        <img
          src={Chemistry}
          alt="Chemistry Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={ChemETL}
          alt="ChemETL Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={biox}
          alt="Biox Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={aero}
          alt="Aero Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={energy}
          alt="Energy Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={ERC}
          alt="ERC Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={mnp}
          alt="MnP Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={pg}
          alt="PG Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={design}
          alt="Design Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={web}
          alt="Web Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={media}
          alt="Media Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={TL}
          alt="TL Team"
          style={{ width: "700px", height: "auto" }}
        />
        <img
          src={wncc}
          alt="WnCC Team"
          style={{ width: "700px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Team;
