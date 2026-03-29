import React from "react";
import LogicGC from "./assets/LogicGC.png";
import scicomp from "./assets/scicomp.jpg";
import graviton from "./assets/graviton.jpg";
import mnp from "./assets/mnp.jpg";
import cc from "./assets/cc.jpg";
import pit from "./assets/pit.jpg";
import xlr8 from "./assets/xlr8.jpg";
import iitm from "./assets/inter-iit-tech-meet.jpg";

const PastEvents = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "bold",
          fontSize: "30px",
          color: "#ffffff",
        }}
      >
        Past Events
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "33% 33% 33%",
          gap: "20px",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        {[
          {
            name: "SciComp GC",
            image: scicomp,
            organizer: "WnCC",
          },
          {
            name: "Logic and Math GC",
            image: LogicGC,
            organizer: "MnP",
          },
          {
            name: "The Graviton Crucible",
            image: graviton,
            organizer: "Quant Club",
          },
          {
            name: "Integral Cup",
            image: mnp,
            organizer: "MnP",
          },
          { name: "Coding Circuit", image: cc, organizer: "WnCC" },
          {
            name: "Pit Trading Challenge",
            image: pit,
            organizer: "Quant Club + IMC",
          },
          {
            name: "XLR8",
            image: xlr8,
            organizer: "ERC",
          },
          {
            name: "Inter-IIT Tech Meet 14.0",
            image: iitm,
            organizer: "ALL IIT'S",
          },
        ].map((events) => (
          <div
            style={{
              backgroundColor: "#1a1a1a",
              color: "white",
              padding: "20px",
              marginLeft: "30px",
              marginRight: "30px",
              borderRadius: "8px",
              justifyContent: "center",
              textAlign: "center",
              width: "300px",
            }}
          >
            <img
              src={events.image}
              alt={events.name}
              style={{ width: "230px", height: "230px", objectFit: "cover" }}
            />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {events.name}
            </div>
            <div style={{ fontSize: "14px", color: "#cfcfcf" }}>
              Organized by: {events.organizer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
