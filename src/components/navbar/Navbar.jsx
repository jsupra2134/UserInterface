import React, { useState } from 'react';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">

        <div className="navbar-links_container">
          <a href="/Header">Search</a>
          <a href="/brand">Enter New Incident</a>
        </div>
      </div>
      <div className="navbar-menu">
      </div>
    </div>
  )
}

export default Navbar