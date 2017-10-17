import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import ExternalLinks from "./components/Footer"
import user from "./user.json"
import Main from "./components/Main"

class App extends Component {
  render() {
    const me = user.user
    return (
      <div className="App">
        <Header user={me}/>
        <Main/>
        <ExternalLinks user={me}/>
      </div>
    );
  }
}

export default App;
