import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="title">
        <h1>Portfolio</h1>
      </div>

      <div ref={menuRef} className={`section ${menuOpen ? "open" : ""}`}>
        <h4><a href="#skills">Skills</a></h4>
        <h4><a href="#projects">Projects</a></h4>
        <h4><a href="#contact">Contact</a></h4>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Navbar;
