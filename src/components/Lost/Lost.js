import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import lostFace from "../../assets/hangman-images/lostFace.svg";

class Lost extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>I am Sorry but seems like you lost...</h2>
        <img src={lostFace} />
        <h2>
          Correct word was: <h1>{this.props.wordReducer.initialWord}</h1>
        </h2>
        <h2>Do you want to try one more time?</h2>
        <Link to="/">
          <button>Yes</button>
        </Link>
        <button>Leaderboard</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Lost);
