import React from 'react';
import {Link} from 'react-router-dom';
// stateless navbar that does not change

function NavBar() {
  return (
      <div id="nav-bar" className="nav-bar">
      <Link to="/banks"
        >🐷Home🐷</Link>
        <Link to="/banks/new">
        🐷Create Piggy Bank🐷</Link>
  
      </div>
    )
}

export default NavBar;
