import React, {useState} from "react";
import "./About.css";

export default function About() {

    const [fullDarkMode, setFullDarkMode]  = useState({
      color:"#000",
      backgroundColor:"#fff",
      textAlign:"center"
    });
    const [headerDarkMode, setHeaderDarkMode] = useState({
      color:"#000",
      backgroundColor:"#ffffe0",
      borderRadius:"10px",
      border:"2px solid #000"
    });
    const [cardDarkMode, setCardDarkMode] = useState({
      color:"#000",
      backgroundColor:"#ffffe0",
      borderRadius:"10px",
      border:"2px solid #000"
    });
    const [buttonDarkMode, setButtonDarkMode] = useState({
      borderRadius:"10px",
      color:"#fff",
      backgroundColor:"#072A6C"
    });
    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleFullDarkMode = () => {
        if(fullDarkMode.color === "#000")
        {
          setFullDarkMode({
            color:"#fff",
            backgroundColor:"#000",
            textAlign:"center"
          })  
          setBtnText("Enable Light Mode")
        }
        else
        {
          setFullDarkMode({
            color:"#000",
            backgroundColor:"#fff",
            textAlign:"center"
          })
          setBtnText("Enable Dark Mode")
        }
        if(headerDarkMode.backgroundColor === "#ffffe0")
        {
          setHeaderDarkMode({
            color:"#000",
            backgroundColor:"#d3d3d3",
            borderRadius:"10px"
          })  
        }
        else
        {
          setHeaderDarkMode({
            color:"#000",
            backgroundColor:"#ffffe0",
            borderRadius:"10px",
            border:"2px solid #000"
          })
        }
        if(cardDarkMode.backgroundColor === "#ffffe0")
        {
          setCardDarkMode({
            borderRadius:"10px",
            color:"#000",
            backgroundColor:"#fff"
          }) 
        }
        else
        {
          setCardDarkMode({
            color:"#000",
            backgroundColor:"#ffffe0",
            borderRadius:"10px",
            border:"2px solid #000"
          })
        }
        if(buttonDarkMode.color === "#072A6C")
        {
          setButtonDarkMode({
            borderRadius:"10px",
            border:"2px solid #1DA1F2",
            color:"#1DA1F2",
            backgroundColor:"#fff"
          })
        }
        else
        {
          setButtonDarkMode({
            borderRadius:"10px",
            color:"#fff",
            backgroundColor:"#072A6C"
          })
        }

    }
    
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
              <div className="container" style={{padding:"20px"}}>
                <h2>Jane Doe</h2>
                <p className="title">CEO and Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="button" style={buttonDarkMode}>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card" style={cardDarkMode}> 
              <div className="container" style={{padding:"20px"}}>
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button className="button" style={buttonDarkMode}>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card" style={cardDarkMode}>
              <div className="container" style={{padding:"20px"}}>
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button className="button" style={buttonDarkMode}>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={toggleFullDarkMode} type="button" className="btn btn-primary my-3">{btnText}</button>
      </div>
    </>
  );
}
