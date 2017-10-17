import React, { Component } from 'react';

class Project extends Component {
  render () {
    let {project, index} = this.props
    return(
      <div key={index}>
         <p> {project.name} </p>
         <img src={project.image}/>
         <a href={"/projects/"+project.id}>More details</a>
      </div>
    )
  }
}

export default Project;
