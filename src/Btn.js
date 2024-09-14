import React, { useState } from "react";

function Btn() {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    userSelect: "none",
    maxWidth: "250px",
    margin: "5rem auto",
    border: "1px solid #ffffff22",
    backgroundColor: "",
    background: "",
    boxShadow: isHovered
      ? "0 7px 50px 10px #000000aa"
      : "0 7px 20px 5px #00000088",
    borderRadius: ".7rem",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(7px)",
    overflow: "hidden",
    transition: ".5s all",
    transform: isHovered ? "scale(1.015)" : "scale(1)",
    filter: isHovered ? "brightness(1.3)" : "brightness(1)",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* <h1 style={{ fontSize: '20rem', filter: 'opacity(0.5)' }}>Kiberbash</h1> */}
      <div
        className="nft"
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="main" style={{ padding: "1rem" }}>
          <div
            style={{
              textAlign: "center",
              width: "200px",
              border: "none",
              background: "none",
            }}
            className="card text-primary"
          >
            <ul
              style={{ listStyleType: "none" }}
              className="list-group list-group-flush"
            >
              <li>
                <p className="fs-3">Check-In</p>
              </li>
              <li>
                <i
                  className="bi bi-check-lg text-success "
                  style={{ fontSize: "80px" }}
                ></i>
              </li>
              <li>
                <p>Records Check-In Attendance in the database</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Btn;
