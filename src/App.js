import React from 'react';
import './App.css';


/*const title = 'My first React Element';
const desc = 'This is a Description';
const myTitleId = 'main-title';
const name = 'Idk';*/

/*const header = (
  <header>
    <h1 id={myTitleId}>{name}'s {title}</h1>
    <p>{desc}</p>
  </header>
)*/

const Header = (props) => {
  return ( // 가독성 좋아 지니까 () 프렌시스 로 감싸줌
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

class Counter extends React.Component {
  constructor() { //case1
    super();
    this.state = {
      score: 0
    }
    // this.incrementScore.bind(this);
  }

  /* state = { //case2 es6 문법 : 바로 클래스 밑에 선언하면 속성이 된다.
     score: 0
   };*/

  incrementScore = () => {
    this.setState(prevState => {
      return {score: prevState.score + 1}
    });
  }

  decrementScore = () => {
    this.setState(prevState => {
      return {score: prevState.score - 1}
    });
  }

  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
        {/*this 글로벌을 가리킨다.*/}
        {/* 이벤트에는 선언형 함수 데피니션을 넣아야한다. */}
      </div>
    )
  }
}

const Player = (props) => (
  <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() =>  props.removePlayer(props.id)}>X</button>
        {/*명령형이 아닌 선언문으로 넣기 위해 arrow function 사용*/}
      </span>
    <span className="player-name">{props.name}</span>
    <Counter score={props.score} />
  </div>
);

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        { this.state.players.map(play => <Player
          id={play.id}
          name={play.name}
          key={play.id}
          removePlayer={this.handleRemovePlayer} />) }
      </div>
    );
  }
}

export default App;
