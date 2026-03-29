import React from "react";
import ITSP from "./assets/ITSP.png";
import SOC from "./assets/SOC.jpg";
import orientation from "./assets/orientation.png";

const ActiveEvents = () => {
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
        Active Events
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
            name: "ITSP 2026",
            image: ITSP,
            organizer: "ITC",
          },
          {
            name: "SoC 2026",
            image: SOC,
            organizer: "WnCC",
          },
          {
            name: "Conveners Orientation",
            image: orientation,
            organizer: "ITC",
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

export default ActiveEvents;
