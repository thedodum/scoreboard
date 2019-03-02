import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";

export const Header = ({totalPlayers, title}) => {
  // const {totalPlayers, title} = props;
  return (
    <header>
      <Stats players={totalPlayers} />
      <h1>{title}</h1>
      {/*<span className="stats">Players: {props.totalPlayers}</span>*/}
      <Stopwatch/>
    </header>
  );
};

