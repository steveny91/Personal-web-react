import React, { Component } from 'react';

class Pro extends Component {
  render () {
    let {project} = this.props
    debugger
    return(
      <div key= {this.props.index}>
         <p> {project.name} </p>
         <img src={project.image}/>
      </div>
    )
  }
}

export default Pro;
