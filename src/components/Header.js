import React, { Component } from 'react';

class Header extends Component {
  render () {
    let {user} = this.props
    return(
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Rebecca Trachtenberg</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href={user.resume}>About</a></li>
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Header;
