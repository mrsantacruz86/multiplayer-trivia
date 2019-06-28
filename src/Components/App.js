import React, { Component } from "react";
import { connect } from "react-redux";

import ScoreCard from "./ScoreCard";
import Question from "./Question";

class App extends Component {
  state = {
    question: {
      id: 3,
      text: "A quien le dijo Jesús las palabras de Jn 3:16?",
      choices: [
        { text: "A Pedro", right: false },
        { text: "A los 12 discipulos", right: false },
        { text: "A Zaqueo", right: false },
        { text: "A Nicodemo", right: true }
      ],
      ref: "Jn 3"
    }
  };
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            <div class="row">
              <div className="col">
                <ScoreCard playerName="Nelson Diaz" turn={true} score={5} />
              </div>
              <div className="col">
                <h1 className="display-3 text-center">BIBLE TRIVIA</h1>
              </div>
              <div className="col text-right">
                <ScoreCard playerName="Nelson Diaz" turn={true} score={5} />
              </div>
            </div>
          </div>
        </div>

        <Question question={this.state.question} />

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
