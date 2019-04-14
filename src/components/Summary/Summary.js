import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import lostFace from "../../assets/hangman-images/lostFace.svg";
import restart from "../../assets/other/restart.svg";
import leaderboard from "../../assets/other/leaderboard.svg";
import star from "../../assets/other/star.svg";
import happyFace from "../../assets/hangman-images/happyFace.svg";
import like from "../../assets/other/like.svg";
import axios from "axios";

class Summary extends Component {
  constructor() {
    super();
    this.state = {
      savedScore: false
    };
  }

  saveScoreAfterWin = () => {
    this.setState({
      savedScore: !this.state.savedScore
    });
    axios.post("/api/submitScore");
    console.log(this.state.savedScore);
  };

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
            <Link to="/leaderboard">
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
          {this.state.savedScore === true ? (
            <h2 className="scoreSaved">
              Your score got saved
              <img src={like} alt="score saved" />
            </h2>
          ) : (
            <h2 className="saveMyScoreWrapper" onClick={this.saveScoreAfterWin}>
              Save my score
              <img src={star} alt="save score" />
            </h2>
          )}
        </div>
        <div className="tryAgain-LeaderboardWrapper">
          <div>
            <Link to="/">
              <h2>Try again?</h2>
              <img src={restart} alt="restart" />
            </Link>
          </div>
          <div>
            <Link to="/leaderboard">
              <h2>Leaderboard</h2>
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
