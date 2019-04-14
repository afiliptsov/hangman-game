import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main-screen-bg">
        <div>This is Leaderboard Page</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Leaderboard);
