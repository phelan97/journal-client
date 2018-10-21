
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default class JournalMenu extends React.Component {
  showSettings(e) {
    e.preventDefault();
  }

  // split into sidebar?
  render() {
    return (
      <div>
        <Menu {...this.props}>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
      </div>
    );
  }
}
