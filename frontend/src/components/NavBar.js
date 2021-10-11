import React from 'react';
import {NavLink} from 'react-router-dom';
// stateless navbar that does not change

function NavBar() {
  return (
      <div id="nav-bar" className="nav">
      <NavLink to="/banks"
        >Home   </NavLink>
      
        <NavLink to="/banks/new">
          Create Piggy Bank</NavLink>
  
      </div>
    )
}

export default NavBar;
