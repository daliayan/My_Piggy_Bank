// import React from 'react';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
// import GetBank from './GetBank';


class NavBar extends Component {
  render() {
  return (
      <div>
      <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          // exact
          /* add styling to Navlink */
          // style={link}
          /* add prop for activeStyle */
          // activeStyle={{
          //   background: 'darkblue'
          // }}
        >Home</NavLink>
        <NavLink
          // to="/about"
          // exact
          // style={link}
          // activeStyle={{
          //   background: 'darkblue'
          // }}
           />
        <NavLink to='/'>HOME</ NavLink> 
      </div>
    )
  }
}

export default NavBar;

// stateless navbar that does not change