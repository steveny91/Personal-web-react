import React, { Component } from 'react';
import DetailedProj from "../../DetailedProj.json"

class ProjectBody extends Component {
  render () {
    const details = DetailedProj.projects[this.props.match.params.id - 1
]
    let {name, description, image, summary, link} = details
    return(
      <center>
        <div>
          <h1>{name}</h1>
          <h3>{description}</h3>
          <img src={image}/>
          <p>{summary}</p>
          <a href={link}></a>
        </div>
      </center>
    )
  }
}

export default ProjectBody;
