import React from 'react';

export class Counter extends React.Component {
  constructor() { //case1
    super();
    this.state = {
      score: 0
    }
  }

  incrementScore = () => {
    this.setState(prevState => {
      return {score: prevState.score + 1}
    });
  }

  decrementScore = () => {
    this.setState(prevState => {
      return {score: prevState.score - 1}
    });
  }

  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
        {/*this 글로벌을 가리킨다.*/}
        {/* 이벤트에는 선언형 함수 데피니션을 넣아야한다. */}
      </div>
    )
  }
}