import React, { Component } from 'react';
import './App.css';
import project from "./project.json";
import user from "./user.json"
import Project from "./components/previews/proj-preview.js"
import Header from "./components/Header"
import ExternalLinks from "./components/Footer"


class App extends Component {
  render() {
    const me = user.user
    const proj = project.projects
    return (
      <div className="App">
        <Header user={me}/>
        {proj.map(function(project, index){
          return(
            <Project project = {project} index={index}/>
           )
        })}
        <ExternalLinks user={me}/>
      </div>
    );
  }
}

export default App;
