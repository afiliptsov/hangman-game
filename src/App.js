import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import router from "./routes";
import { connect } from "react-redux";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {router}
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(App);
