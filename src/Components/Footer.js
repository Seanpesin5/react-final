import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      textAlign: 'center',
      padding: '10px 20px',
      background: 'rgba(52, 58, 64, 0.8)', 
      color: '#ffffff',
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'space-between', 
      boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'
    }}>
      <p style={{ margin: '0' }}>&copy; {year} Sean Pesin. All rights reserved.</p>
      <div>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
          <img src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473?h=253" alt="LinkedIn" style={{ width: '24px', height: '24px', marginRight: '10px', transition: 'transform 0.2s' }} />
        </a>
        <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" alt="GitHub" style={{ width: '24px', height: '24px', transition: 'transform 0.2s' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
