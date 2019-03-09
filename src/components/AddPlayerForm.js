import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import {addPlayer} from "../redux/actions";

export class AddPlayerForm extends React.Component {
  // Dom에 접근하기 위한 참조값 (public thrtjd)
  textInput = React.createRef(); // 1. 만들고

  constructor(props) {
    super(props);
  };

  handleValueChange = (e) => {
    console.log(e);
    this.setState({playerName: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.addPlayer(this.textInput.current.value); //3. 접근
    this.setState({
      playerName: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/*//2. 할당*/}
        <input type="text" placeholder="enter a player's name" ref={this.textInput} />
        <input type="submit" value="Add Player" />
      </form>
    );
  };
}


// 하이오더 컴포넌트 (커링펑션)
// export default connect(null, {addPlayer:addPlayer})(Header);
// 키 속성 같으면 삭제 가능
export default connect(null, {addPlayer})(AddPlayerForm);