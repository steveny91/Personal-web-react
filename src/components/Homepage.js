import React, { Component } from 'react';
import project from "../project.json"
import Project from "./previews/proj-preview"

class Homepage extends Component {
  render() {
    const proj = project.projects
    return (
      <div>
      {proj.map(function(project, index){
        return(
          <Project project={project} index={index}/>
         )
      })}
      </div>
    );
  }
}

export default Homepage;
