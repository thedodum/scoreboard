import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component{
  render(){
    console.log(this.props.name + ' renderd');
    const {removePlayer, id, name} = this.props;
    return (
      <div className="player">
        <span className="player-name">
        <button className="remove-player" onClick={() =>  removePlayer(id)}>X</button>
        {/*명령형이 아닌 선언문으로 넣기 위해 arrow function 사용*/}
        </span>
        <span className="player-name">{name}</span>
        {/*<Counter index={this.prop.sindex} score={this.props.score} changeScore={this.props.changeScore} />*/}
        <Counter {...this.props} />
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate',  nextProps);
    return nextProps.score != this.props.score;
  }

}