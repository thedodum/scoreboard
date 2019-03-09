import React from 'react';
import styles from '../pages/scoreboard/scoreboard.module.css';

export class Stopwatch extends React.Component {
  timeRef; //클래스 public 속성 (아무것도 없으면 public: 속성 나중에 나온 문법)

  constructor(props) { //case1
    super(props);
    this.state = {
      isRunning: false,
      timer: 0
    }

  }

  handleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
  };

  render() {
    return (
      <div className={styles.stopwatch}>
        <h2>Stopwatch</h2>
        <span className={styles["stopwatch-time"]}>{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={() => this.setState({timer:0})}>Reset</button>
      </div>
    );
  }
  // DOM이 생성된 직후
  componentDidMount() {
    this.tickRef = setInterval(this.thick, 1000);
  }
  thick = () => {
    if (this.state.isRunning){
      this.setState(prevState => ({ // 객체를 리턴하기 때문에 ()프란시스 추가
        timer: prevState.timer + 1
        })
      );
    }
  };

  // DOM이 파괴되기 직전
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}