import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Letters from "../Letters/Letters";
import Summary from "../Summary/Summary";
import Hangman from "../Hangman/hangman";

import * as actionCreator from "../../store/actions/actions";
import timer from "../../assets/other/timer.svg";
import header from "../../assets/other/heart.svg";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      redirect: "",
      currentCount: 0,
      min: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
  }

  timer = () => {
    // setState method is used to update the state
    this.setState({ currentCount: this.state.currentCount + 1 });
    let min = ~~((this.state.currentCount % 3600) / 60);
    var sec = this.state.currentCount % 60;
    this.setState({
      min: min,
      seconds: sec
    });
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  gameActivity(gameState) {
    if (gameState === "gameLost") {
      return <Summary />;
    } else if (gameState === "gameWon") {
      return <Summary />;
    } else {
      return <Letters pushLetter={letter => this.props.pushLetter(letter)} />;
    }
  }

  clockActivity(gameState) {
    if (gameState === "gameLost") {
      return null;
    } else if (gameState === "gameWon") {
      return (
        <div className="clock-wrapper">
          <img className="alarm" src={timer} alt="timer" />
          <h2>
            {this.props.wordReducer.minutes} : {this.props.wordReducer.seconds}
          </h2>
        </div>
      );
    } else {
      return (
        <div className="clock-wrapper">
          <img className="alarm" src={timer} alt="timer" />
          <h2>
            {this.state.min} : {this.state.seconds}
          </h2>
        </div>
      );
    }
  }

  render() {
    const mapOverWord = this.props.wordReducer.guessedWordArr.map(e => {
      return <h2>{e}</h2>;
    });

    return (
      <Fragment>
        <Hangman live={this.props.wordReducer.live} />
        {this.clockActivity(this.props.wordReducer.state)}
        <div className="live-count">
          <img className="heart" src={header} alt="lives" />
          <h2>Lives : {this.props.wordReducer.live}</h2>
        </div>
        <div className="guessedWordWrapper">
          <div className="guessedWordStyle">{mapOverWord}</div>
        </div>
        {this.gameActivity(this.props.wordReducer.state)})
      </Fragment>
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
