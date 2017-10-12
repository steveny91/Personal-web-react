import React, { Component } from 'react';
import './App.css';
import projects from "./projects.json";
import Pro from "./components/previews/proj-preview.js"

class App extends Component {
  render() {
    const proj = projects.projects
    console.log(projects)
    return (
      <div className="App">
        {proj.map(function(project, index){
          return(
            <Pro project = {project} index={index}/>
           )
        })}
      </div>
    );
  }
}

export default App;
