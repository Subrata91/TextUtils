import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("The button was clicked.");
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    // console.log("The button was clicked.");
    setText(text.toLowerCase());
  };

  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
  };

  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
  };

  const handleExtraSpaces = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const capitalFirstLetter = ()=>{
    let words = text.split(" ")
   let uppercaseword = ' '
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword)
}

  const handleOnChange = (event) => {
    // console.log("On Change occured.");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <h4>{props.heading}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Leave a comment here"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Upper-Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lower-Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handletextExtract}>
          Remove Symbols
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleNumExtract}>
          Show Only Numbers
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={capitalFirstLetter}>
          First Letter Capital
        </button>
      </div>
      <div className="container my-3">
        <h2 className="my-3">Your text summary</h2>
        <p>
          <strong>Number of Characters:</strong> {text.length}
        </p>
        <p>
          <strong>Number of Words:</strong> {text.split(" ").length - 1}
        </p>
        <p>
          <strong>Expected time taken to read:</strong>{" "}
          {0.008 * (text.split(" ").length - 1)}
        </p>
        <h4 className="my-5">Preview:</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
