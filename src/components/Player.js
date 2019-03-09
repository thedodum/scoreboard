import React from 'react';
import Counter from "./Counter";
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

import styles from '../pages/scoreboard/scoreboard.module.css';

class Player extends React.Component{
  render(){
    console.log(this.props.name + ' renderd');
    const {removePlayer, id, name, score} = this.props;
    return (
      <div className={styles.player}>
        <span className={styles["player-name"]}>
        <button className={styles["remove-player"]} onClick={() =>  removePlayer(id)}>X</button>
        {/*명령형이 아닌 선언문으로 넣기 위해 arrow function 사용*/}
        </span>
        <span className={styles["player-name"]}>{name}</span>
        {/*<Counter index={this.prop.sindex} score={this.props.score} changeScore={this.props.changeScore} />*/}
        <Counter score={score} index={id} />
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate',  nextProps);
    return nextProps.score != this.props.score;
  }

}

export default connect(null, {removePlayer})(Player);