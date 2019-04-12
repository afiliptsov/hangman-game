import React, { Component } from "react";
import { connect } from "react-redux";
import Letters from "../Letters/Letters";
import Summary from "../Summary/Summary";

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
      return <Summary />;
    } else if (gameState === "gameWon") {
      return <Summary />;
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
      <div style={{ width: "100%", height: "100%" }}>
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
