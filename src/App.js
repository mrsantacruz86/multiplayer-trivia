import React, { Component } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Game from './Components/Game';
import Choice from './Components/Choice';
import Question from './Components/Question';
import ScoreCard from './Components/ScoreCard';
import Timer from './Components/Timer';
import bq from './BibleQuestions.json';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bq
    }

  }

  handleUsedQuestion(id){
    const updatedList = this.state.bq.filter(item=>(item.id != id));
    this.setState({bq: updatedList});
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">

          <section className="row">
            Here goes the teams and scores
            The timer goes in the
          </section>

          <section className="row">
            <Game questions={this.state.bq} usedQuestion={this.handleUsedQuestion}/>
          </section>

        </div>
      </div>
    );
  }
}

export default App;
