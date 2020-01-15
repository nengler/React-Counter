import React, { Component } from "react";
import Counters from "./counters";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="navbar-brand">
            Navbar
          </a>
        </nav>
        <div className="mb-4"></div>
        <Counters />
      </div>
    );
  }
}

export default NavBar;
