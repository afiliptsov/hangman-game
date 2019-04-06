import React, { Component } from "react";

class Letters extends Component {
  constructor() {
    super();
    this.state = {
      letters: [
        ["A", "B", "C", "D", "E", "F", "G"],
        ["H", "I", "J", "K", "L", "M", "N"],
        ["O", "P", "Q", "R", "S", "T", "U"],
        ["V", "W", "X", "Y", "Z"]
      ]
    };
  }

  clickedLetter = event => {
    console.log(event.target.value);
  };

  render() {
    const letterMap = this.state.letters.map((el, i) => {
      return (
        <p key={i}>
          {el.map((singleLet, i) => {
            return (
              <button
                value={singleLet}
                onClick={this.clickedLetter}
                key={singleLet}
              >
                {singleLet}
              </button>
            );
          })}
        </p>
      );
    });

    return <div>{letterMap}</div>;
  }
}

export default Letters;
