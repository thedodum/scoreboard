import React from 'react';

export class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    };
  };

  handleValueChange = (e) => {
    console.log(e);
    this.setState({playerName: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.addPlayer(this.state.playerName);
    this.setState({
      playerName: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" value={this.state.playerName}
        onChange={this.handleValueChange} />
        <input type="submit" value="Add Player" />
      </form>
    );
  };
}