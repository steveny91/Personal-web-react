import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Homepage from "./Homepage"
import About from "./About"
import ProjectBody from "./Projects/Body.js"


class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/about" component={About}/>
          <Route path="/projects/:id" component={ProjectBody}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
