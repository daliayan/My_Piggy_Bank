import React from 'react';
import {NavLink} from 'react-router-dom';
// stateless navbar that does not change

function NavBar() {
  return (
      <div id="nav-bar">
      <NavLink
          to="/banks"
          activeStyle={{
            background: 'pink',
            fontSize: 30}}
        >Home    </NavLink>
      
        <NavLink to="/banks/new"
          activeStyle={{
          background: 'pink',
          fontSize: 30}}>
          Create Piggy Bank</NavLink>
  
      </div>
    )
}

export default NavBar;
