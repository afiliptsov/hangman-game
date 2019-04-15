import React from "react";

const hangman = props => {
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

export default hangman;
