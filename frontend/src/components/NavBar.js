import React from 'react';
import {NavLink} from 'react-router-dom';


function NavBar() {
  return (
      <div id="nav-bar">
      <NavLink
          to="/"
          // active style
          activeStyle={{
            background: 'pink',
            fixed: "top",
            fontWeight: "bold",
           }}
        >Home</NavLink>
  
      </div>
    )
}

export default NavBar;

// stateless navbar that does not change