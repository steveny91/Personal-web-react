import React, { Component } from 'react';
// import Fire from "../../public/Fire.JPG"

class About extends Component {
  render () {
    let {user} = this.props
    return(
      <div>
        <img src="./Fire.JPG" height="500" width="300"/>
        <p>{user.bio}</p>
      </div>
    )
  }
}

export default About;
