import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import classNames from 'classnames';

import styles from '../pages/scoreboard/scoreboard.module.css';

class Counter extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
  };

  render(){
    const {changeScore, index, score} = this.props;

    return(
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)}
                onClick={() => changeScore(index, -1)}> - </button>
        <span className={styles["counter-score"]}>{score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)}
                onClick={() => changeScore(index, 1)}> + </button>
        {/*this 글로벌을 가리킨다.*/}
        {/* 이벤트에는 선언형 함수 데피니션을 넣아야한다. */}
      </div>
    )
  }
}

/*let mapStateToProps = (state) => {
  return {
    index: state.playerReducer.players.
  }
}*/

/*let mapDispatchToProps = (dispatch) => {
  return {
    changeScore: (index, delta) => dispatch(changeScore(index, delta))
  }
}*/

export default connect(null, {changeScore})(Counter);

