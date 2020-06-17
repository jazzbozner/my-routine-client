import React from "react";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  render() {
    return (
      <nav>
        <h3>My Routine</h3>
        <Link className="anchor" to="/routines">Routines </Link>
        <Link className="anchor" to="/exercises">Exercies </Link>
      </nav>
    );
  }
}

export default NavBar;