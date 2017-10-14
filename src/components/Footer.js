import React, { Component } from 'react';

class Footer extends Component {
  render () {
    let {user} = this.props
    return(
      <div>
        <a href={user.linkedin}>LinkedIn</a>
        <a href={user.github}>GitHub</a>
      </div>
    )
  }
}

export default Footer;
