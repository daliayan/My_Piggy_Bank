import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import About from '../components/About';
// stateless navbar that does not change

function NavBar() {
  return (
      <div id="nav-bar" className="nav-bar">
        
      <Link to="/banks"
        >🐷Home
      </Link>
      <Link to="/about">
        {/* 🐷About🐷 */}
        {/* <Route path="/about"> */}
            {About}About 🐷
            {/* </Route> */}
      </Link>
            {/* <div>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div> */}
      </div>
    )
}

export default NavBar;
