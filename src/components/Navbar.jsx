import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>RepVid</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/avatar">Avatar Editor</Link>
        <Link to="/upload">Upload Video</Link>
      </div>
    </nav>
  );
};

export default Navbar;
