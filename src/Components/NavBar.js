import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const navStyle = {
    background: 'linear-gradient(90deg, rgba(33,37,41,1) 0%, rgba(52,58,64,1) 100%)', 
    color: '#fff',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between', // Adjusted to space-between to move the logo to the left and links to the right
    alignItems: 'center',
    gap: '20px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.2s ease-in-out',
  };

  const logoStyle = {
    height: '50px', // Adjust height as needed
  };

  return (
    <nav style={navStyle}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-PXVlVZkt7M7uIuovbzpbWfM9b9VfhFs0fZPgozZFBwUZlqzDXZLUIOy34wIwqHLSug&usqp=CAU" alt="Logo" style={logoStyle} />
      <div style={{display: 'flex', gap: '20px'}}> {/* Wrap links for better alignment */}
        <Link to="/" style={linkStyle} className="nav-link">Home</Link>
        <Link to="/Players" style={linkStyle} className="nav-link">Teams</Link>
        <Link to="/Aboutme" style={linkStyle} className="nav-link">About Me</Link>
        <Link to="/SearchTeam" style={linkStyle} className="nav-link">Search Team</Link>
      </div>
    </nav>
  );
};

export default NavBar;