import React from "react";
import auv from "./assets/auv.jpeg";
import tinkerers from "./assets/tinkerers.jpg";
import itc from "./assets/ITClogoWhite.png";
import orientation from "./assets/orientation.png";
import wncc from "./assets/wncc.jpg";
import techWeek from "./assets/techweek.jpg";
import techConnect from "./assets/techConnect.png";
const ReEvents = () => {
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
        Recurring Events
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
            name: "Tech Teams Recruitment",
            image: auv,
            organizer: "all tech teams",
          },
          {
            name: "Tinkerers lab workshop",
            image: tinkerers,
            organizer: "Tinkerers Lab",
          },
          {
            name: "Institute Technical Awards",
            image: itc,
            organizer: "ITC Cabinet",
          },
          {
            name: "Freshie orientation",
            image: orientation,
            organizer: "all clubs",
          },
          { name: "hackathons and dev-days", image: wncc, organizer: "WnCC" },
          { name: "PG Tech Week", image: techWeek, organizer: "ITC" },
          {
            name: "Tech Connect",
            image: techConnect,
            organizer: "ITC + TechFest",
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

export default ReEvents;
