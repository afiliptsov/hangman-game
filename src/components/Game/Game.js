import React, { Component } from "react";
import { connect } from "react-redux";

class Game extends Component {
  constructor() {
    super();
  }

  render() {
    console.log("PROPS came here", this.props);
    return (
      <div className="padding">
        <div className="main-screen-bg">
          <p>Test</p>
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

export default connect(mapStateToProps)(Game);
