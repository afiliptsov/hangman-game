import React from "react";
import hangman from "../../assets/hangman-images/hangman-complete.svg";

const Hangman = () => {
  return (
    <div>
      <img src={hangman} height="500px" alt="hangman icon" fill="white" />
    </div>
  );
};

export default Hangman;
