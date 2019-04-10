import React from "react";
import life6 from "../../assets/hangman-images/life6.svg";
import life5 from "../../assets/hangman-images/life5.svg";
import life4 from "../../assets/hangman-images/life4.svg";
import life3 from "../../assets/hangman-images/life3.svg";
import life2 from "../../assets/hangman-images/life2.svg";
import life1 from "../../assets/hangman-images/life1.svg";

const Hangman = props => {
  console.log("PROPS IN HANGMAN" + props.live);
  return (
    <div className="hangman-svg-wrapper">
      <img
        src={require(`../../assets/hangman-images/life${props.live}.svg`)}
        className="hangman"
        alt="hangman icon"
      />
    </div>
  );
};

export default Hangman;
