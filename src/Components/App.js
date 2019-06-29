import React, { Component } from "react";
import { connect } from "react-redux";

import ScoreCard from "./ScoreCard";
import Question from "./Question";
import { db } from "../api/firebase";

class App extends Component {
  state = {
    questions: [],
    question: {
      choices: ["Jesus", "Noah", "Moses", "Abraham"],
      ref: "Ex. 3",
      rightAnswer: "Moses",
      text:
        "In the book of Exodus God send a man to deliver the Hebrews from slavery: that man was..."
    }
  };

  loadQuestion = async () => {
    const questions = await db.collection("questions").get();
    for (let doc of questions.docs) {
      this.setState({ ...this.state, questions: [...questions, doc.data()] });
    }
  };

  componentDidMount() {
    this.loadQuestion();
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

        <Question question={this.state.questions[0]} />

        <footer className="footer fixed-bottom">
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
