import React, { Component } from 'react';

class Header extends Component {
  render () {
    let {user} = this.props
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="waves-effect waves-light btn-large brand-logo"><img className="logo" src="./logo2.png"/></a>
          <ul className="right hide-on-med-and-down">
            <li><a className="waves-effect waves-light btn-large" href={user.resume}>Resume</a></li>
            <li><a className="waves-effect waves-light btn-large" href='/about'>About</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
