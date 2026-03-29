import React, { useState } from "react";
import ReEvents from "./ReEvents";
import ActiveEvents from "./ActiveEvents";
import PastEvents from "./PastEvents";

const Events = () => {
  const [x, setX] = useState(0);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-dark"
        style={{ color: "white" }}
      >
        <div
          className="container-fluid"
          style={{ marginTop: "20px", marginBottom: "25px" }}
        >
          <div
            className="collapse navbar-collapse"
            style={{ justifyContent: "center" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  onClick={() => setX(0)}
                  className="nav-link active"
                  aria-current="page"
                  style={{
                    marginRight: "15px",
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "#1a1a1a",
                    padding: "10px 20px",
                    borderRadius: "8px",
                  }}
                >
                  Past Events
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setX(1)}
                  className="nav-link"
                  style={{
                    marginLeft: "15px",
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "#1a1a1a",
                    padding: "10px 20px",
                    borderRadius: "8px",
                  }}
                >
                  Active Events
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setX(2)}
                  className="nav-link"
                  style={{
                    marginLeft: "15px",
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "#1a1a1a",
                    padding: "10px 20px",
                    borderRadius: "8px",
                  }}
                >
                  Recurring Events
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {x === 0 && <PastEvents />}
      {x === 1 && <ActiveEvents />}
      {x === 2 && <ReEvents />}
    </div>
  );
};

export default Events;
