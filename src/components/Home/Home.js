import React, { Component } from "react";
import Hangman from "../Hangman/hangman";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Input from "../UI/Input/input";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="padding">
        <div className="main-screen-bg">
          <div className="game-name-title">
            <h2>Mr . Hangman</h2>
            <br />
            <p className="game-name-input-title ">What is your name?</p>
            <form>
              <input type="text" className="game-name-input" />
            </form>
          </div>
          <div className="intro-center-button">
            <h1 className="intro-primary" />
            <Link to="/">
              <a href="#" className="btn btn-white btn-animated">
                Start
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
