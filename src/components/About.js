import React, { Component } from 'react';
import user from "../user.json"
// import Fire from "../../public/Fire.JPG"

class About extends Component {
  render () {
    const me = user.user
    return(
      <div>
        <img src="./Fire.JPG" height="500" width="300"/>
        <p>{user.bio}</p>
      </div>
    )
  }
}

export default About;
