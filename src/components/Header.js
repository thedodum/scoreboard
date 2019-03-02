import React from 'react';
import {Stats} from "./Stats";

export const Header = (props) => {
  return (
    <header>
      <Stats players={props.totalPlayers} />
      <h1>{props.title}</h1>
      {/*<span className="stats">Players: {props.totalPlayers}</span>*/}
    </header>
  );
};

