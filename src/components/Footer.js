import React, { Component } from 'react';

class Footer extends Component {
  render () {
    let {user} = this.props
    return(
      <div>
        <a href={user.linkedin}>
          <i className="fa fa-linkedin-square" style={{ fontSize: "36px" }}>
          </i>
        </a>
        <a href={user.github}>
          <i className="fa fa-github" style={{ fontSize: "36px" }}>
          </i>
        </a>
      </div>
    )
  }
}

export default Footer;
