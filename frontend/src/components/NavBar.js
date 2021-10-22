import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import About from '../components/About';

// function NavBar() {
//   return (
//       <div id="nav-bar" className="nav-bar">
//       {/* <Switch>   */}
//       <NavLink to="/banks"
//         >🐷Home
//       </NavLink>
//       <NavLink to="/about">
//             {About}
//             {/* <About /> */}
//              About 🐷
//       </NavLink>
//       {/* </Switch> */}
//       </div>
//     )
// }
// export default NavBar;


export default class NavBar extends Component {

  render() {
    return (
      <div id="nav-bar" className="nav-bar">
        <NavLink to="/banks"
          >🐷Home
        </NavLink>

        <NavLink to="/about">
              {/* {About} */}
              About 🐷
              <About />
        </NavLink>
      </div>
    )
  }
}

// function About(){
//   return <h2>About</h2>;
// }