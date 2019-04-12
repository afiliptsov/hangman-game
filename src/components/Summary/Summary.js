import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import lostFace from "../../assets/hangman-images/lostFace.svg";
import restart from "../../assets/other/restart.svg";
import leaderboard from "../../assets/other/leaderboard.svg";
import happyFace from "../../assets/hangman-images/happyFace.svg";

class Summary extends Component {
  constructor() {
    super();
    this.state = {};
  }

  gameLost = () => {
    return (
      <div>
        <div className="summary">
          <h2 className="youLost">I am Sorry but seems like you lost....</h2>

          <h2 className="corrWord-wrapper">
            Correct word was:
            <h1 className="corrWord">{this.props.wordReducer.initialWord}</h1>
          </h2>
        </div>
        <div className="tryAgain-LeaderboardWrapper">
          <div>
            <Link to="/">
              <h2>Try again?</h2>
              <img src={restart} alt="restart" />
            </Link>
          </div>
          <div>
            <Link>
              <h2>Leaderboard</h2>
              <img src={leaderboard} alt="leaderboard" />
            </Link>
          </div>
        </div>
      </div>
    );
  };
  gameWon = () => {
    return (
      <div>
        <div className="summary">
          <h2 className="youLost">Congratulations you won !!!</h2>
          <img src={happyFace} />
        </div>
        <div className="tryAgain-LeaderboardWrapper">
          <div>
            <Link to="/">
              <h2>Try again?</h2>
              <img src={restart} alt="restart" />
            </Link>
          </div>
          <div>
            <Link>
              <h2>Save your score</h2>
              <img src={leaderboard} alt="leaderboard" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.wordReducer.state === "gameWon"
          ? this.gameWon()
          : this.gameLost()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Summary);
