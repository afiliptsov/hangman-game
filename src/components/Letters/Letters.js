import React, { Component } from "react";
import { connect } from "react-redux";

class Letters extends Component {
  constructor() {
    super();
    this.state = {
      letters: [
        ["A", "B", "C", "D", "E", "F", "G"],
        ["H", "I", "J", "K", "L", "M", "N"],
        ["O", "P", "Q", "R", "S", "T", "U"],
        ["V", "W", "X", "Y", "Z"]
      ],
      invalidLetters: ""
    };
  }
  componentDidMount() {
    console.log("COMPONENT MOUNTS", this.props);
    console.log("Invalid letters", this.props.wordReducer.invalidLetters);
  }

  clickedLetter = event => {
    // Not allowing user to send same letter twice to a server
    if (
      this.props.wordReducer.usedLetters.includes(
        event.target.value.toLowerCase()
      )
    ) {
    } else {
      this.props.pushLetter(event.target.value.toLowerCase());
    }
  };

  render() {
    const letterStyle1 = {
      backgroundColor: "rgba(212, 212, 212, 0.186)",
      cursor: "not-allowed"
    };
    {
      console.log("RENDER", this.props.wordReducer.invalidLetters);
    }

    const letterMap = this.state.letters.map((el, i) => {
      return (
        <p key={i}>
          {el.map((singleLet, i) => {
            return (
              <button
                className="letterStyle"
                value={singleLet}
                style={
                  this.props.wordReducer.usedLetters.includes(
                    singleLet.toLowerCase()
                  )
                    ? letterStyle1
                    : null
                }
                onClick={e => this.clickedLetter(e)}
                key={singleLet}
              >
                {singleLet}
              </button>
            );
          })}
        </p>
      );
    });

    return <div className="letterWrapper">{letterMap}</div>;
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Letters);
