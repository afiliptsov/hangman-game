import React, { Component } from "react";
import { connect } from "react-redux";
import Letters from "../Letters/Letters";
import Won from "../Won/Won";
import Lost from "../Lost/Lost";
import * as actionCreator from "../../store/actions/actions";
import Hangman from "../Hangman/hangman";
import { Redirect } from "react-router";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      redirect: ""
    };
  }

  whenReady = () => {
    this.setState({ redirect: <Redirect to="/summary" /> });
  };

  gameActivity(gameState) {
    if (gameState === "gameLost") {
      return <Lost />;
    } else if (gameState === "gameWon") {
      return <Won />;
    } else {
      return <Letters pushLetter={letter => this.props.pushLetter(letter)} />;
    }
  }

  render() {
    // Redirect temp disabled
    // { this.props.wordReducer.live === 0 ? <Redirect to="/summary" /> : null }
    console.log("PROPS came here", this.props);
    const { guessedWordArr } = this.props.wordReducer;

    const mapOverWord = this.props.wordReducer.guessedWordArr.map(e => {
      return <h2>{e}</h2>;
    });

    return (
      <div className="main-screen-bg">
        <Hangman live={this.props.wordReducer.live} />
        <div className="live-count">
          <h2>Lives : {this.props.wordReducer.live}</h2>
        </div>
        <div className="guessedWordWrapper">
          <div className="guessedWordStyle">{mapOverWord}</div>
        </div>
        {this.gameActivity(this.props.wordReducer.state)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = {
  pushLetter: actionCreator.pushLetter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
