import React, { Component } from 'react';

class Header extends Component {
  render () {
    let {user} = this.props
    return(
      <div>
        <a href={user.resume}>Resume</a>
        <br/>
        <a href='/about'>Bio</a>
      </div>
    )
  }
}

export default Header;
