import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {

  render() {
    return (
      <div id="nav-bar" className="nav-bar">
        <NavLink to="/banks"
          >🐷 HOME
        </NavLink>

        <NavLink to="/about" >
          🐷 ABOUT 🐷
        </NavLink>

        {/* <NavLink to="/new">
          Create Pig 🐷
        </NavLink> */}
      </div>
    )
  }
}