import React from 'react';

export class Counter extends React.Component {
  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.props.changeScore(this.props.index, -1)}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick={() => this.props.changeScore(this.props.index, 1)}> + </button>
        {/*this 글로벌을 가리킨다.*/}
        {/* 이벤트에는 선언형 함수 데피니션을 넣아야한다. */}
      </div>
    )
  }
}