import React from 'react';
import {Counter} from "./Counter";

export const Player = (props) => {
  console.log(props);
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() =>  props.removePlayer(props.id)}>X</button>
        {/*명령형이 아닌 선언문으로 넣기 위해 arrow function 사용*/}
      </span>
      <span className="player-name">{props.name}</span>
      {/*<Counter index={props.index} score={props.score} changeScore={props.changeScore} />*/}
      <Counter {...props} />
    </div>
  );
}