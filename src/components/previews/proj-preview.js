import React, { Component } from 'react';

class Project extends Component {
  render () {
    let {project, index} = this.props
    return(
      <div class="col s12 m7">
        <h4 class="header center-align">{project.name}</h4>
        <div class="card horizontal">
          <div class="card-image">
            <img src={project.image}/>
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>{project.description}</p>
            </div>
            <div class="card-action">
              <a href={"/projects/"+project.id}>More details</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
