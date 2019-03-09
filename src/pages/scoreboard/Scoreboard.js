import React from 'react';
import {connect} from "react-redux";
import {Header} from "../../components/Header";
import Player from "../../components/Player";
import {AddPlayerForm} from "../../components/AddPlayerForm";
import './scoreboard.css';

class Scoreboard extends React.Component {

  render() {
    return (
      <div className="scoreboard">
        <Header totalPlayers={this.props.players} />

        { this.props.players.map((play, index) => <Player
          id={play.id}
          name={play.name}
          key={play.id}
          index={index}
          score={play.score}
        />) }

        <AddPlayerForm />
      </div>
    );
  }
}
// 20190309 git test2

let mapStateToProps = (state) => {
  return {
    players: state.playerReducer.players
  }
};

export default connect(mapStateToProps)(Scoreboard);
