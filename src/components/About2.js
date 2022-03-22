import React from "react";
import "./About.css";

export default function About(props) {
  let fullDarkMode = {
    color: props.mode === "light" ? "#000" : "#fff",
    backgroundColor: props.mode === "light" ? "#fff" : "#0C2D48",
    textAlign: "center",
  };

  let headerDarkMode = {
    color: props.mode === "light" ? "#000" : "#fff",
    backgroundColor: props.mode === "light" ? "#d3d3d3" : "#125f6b",
    borderRadius: "10px",
  };

  let cardDarkMode = {
    color: props.mode === "light" ? "#000" : "#fff",
    backgroundColor: props.mode === "light" ? "#d3d3d3" : "#125f6b",
    borderRadius: "10px",
  };

  let buttonDarkMode = {
    color: props.mode === "dark" ? "#000" : "#fff",
    backgroundColor: props.mode === "dark" ? "#fff" : "#1DA1F2",
    borderRadius: "10px",
  };

  return (
    <>
      <div className="container" style={fullDarkMode}>
        <div className="about-section" style={headerDarkMode}>
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>

        <h2 className="mx-3 my-5">Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card" style={cardDarkMode}>
              <div className="container" style={{ padding: "20px" }}>
                <h2>Jane Doe</h2>
                <p>CEO and Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="button" style={buttonDarkMode}>
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card" style={cardDarkMode}>
              <div className="container" style={{ padding: "20px" }}>
                <h2>Mike Ross</h2>
                <p>Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button className="button" style={buttonDarkMode}>
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card" style={cardDarkMode}>
              <div className="container" style={{ padding: "20px" }}>
                <h2>John Doe</h2>
                <p>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button className="button" style={buttonDarkMode}>
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
