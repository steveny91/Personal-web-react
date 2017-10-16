import React, { Component } from 'react';

class Header extends Component {
  render () {
    let {user} = this.props
    return(
        <a href={user.resume}>Resume</a>
    )
  }
}

export default Header;
