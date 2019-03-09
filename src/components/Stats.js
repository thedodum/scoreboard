import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const Stats = (props) => {
  const totalPlayers = props.players.length;
  let totalScore = 0;
  props.players.forEach(item => { totalScore +=item.score});
  return (
    <table>
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  player: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
};

//subcribe
let mapPropsToState = (state) => ({
  storePlayers: state.playerReducer.players
});

export default connect(mapPropsToState)(Stats);