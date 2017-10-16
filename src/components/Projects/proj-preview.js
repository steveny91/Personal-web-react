import React, { Component } from 'react';

class Project extends Component {
  render () {
    let {project} = this.props
    return(
      <div key= {this.props.index}>
         <p> {project.name} </p>
         <img src={project.image}/>
      </div>
    )
  }
}

export default Project;
