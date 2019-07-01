import React, { Component } from "react";
import { connect } from "react-redux";

import ScoreCard from "./ScoreCard";
import Question from "./Question";
import { fetchQuestions } from "../actions";

class App extends Component {
  componentDidMount() {
    console.log("App mounted");
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center">
                <ScoreCard playerName="Nelson Diaz" turn={true} score={5} />
              </div>
              <div className="col text-center">
                <h1 className="display-4">BIBLE TRIVIA</h1>
              </div>
              <div className="col text-center">
                <ScoreCard playerName="Nelson Diaz" turn={true} score={5} />
              </div>
            </div>
          </div>
        </div>

        {/* <Question question={this.props.questions[0]} /> */}
        {/* <Question question={this.props.questions[0]} /> */}

        <footer className="footer fixed-bottom">
          <span> © Copyright 2019. Nelson Diaz</span>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    questions: Object.values(state.questions)
  };
};

export default connect(
  mapStateToProps,
  { fetchQuestions }
)(App);
