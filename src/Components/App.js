import React, { Component } from "react";
import { connect } from "react-redux";

import ScoreCard from "./ScoreCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>BIBLE TRIVIA</h1>
        </div>

        <div id="Is_this_a_sample_question_">
          <span>Is this a sample question?</span>
        </div>

        <div id="A__Choise">
          <span>A. Lorem ipsum dolor sit amet, consetetur.</span>
        </div>
        <div id="A__Choise_A0_Text_4">
          <span>B. Lorem ipsum dolor sit amet, consetetur.</span>
        </div>
        <div id="A__Choise_A0_Text_5">
          <span>C. Lorem ipsum dolor sit amet, consetetur.</span>
        </div>
        <div id="A__Choise_A0_Text_6">
          <span>D. Lorem ipsum dolor sit amet, consetetur.</span>
        </div>

        <footer className="footer">
          <span> © Copyright 2019. Nelson Diaz</span>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(App);
