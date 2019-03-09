import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./Menu";

export class Root extends React.Component {
  constructor(props) { //case1
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Menu/>
          <div className="container" style={{backgroundColor: '#ffffff'}}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/heroes" component={Heroes}></Route>
              <Route path="/scoreboard" component={Scoreboard}></Route>
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}