import React from 'react';
import Stats from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";

export const Header = ({totalPlayers, title, changeTitle}) => {
  // const {totalPlayers, title} = props;
  return (
    <header>
      <Stats players={totalPlayers} />
      <h1 onClick={changeTitle}>{title}</h1>
      {/*<span className="stats">Players: {props.totalPlayers}</span>*/}
      <Stopwatch/>
    </header>
  );
};

Header.propTypes = {
  totalPlayers: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

/*Header.defaultProps = {
  title: 'ScoreBoard'
};*/

// subscribe 가입
let mapStateToProps = (state) => {
  return {
    title: state.playerReducer.title
  }
};

// action을 dispatch하는 펑션을 props로 매핑
let mapActionToProps = (dispatch) => {
  return {
    changeTitle: () => dispatch(updateTitle('CHANGE TITLE TEST'))
  }
};

// 하이오더 컴포넌트 (커링펑션)
export default connect(mapStateToProps, mapActionToProps)(Header);
