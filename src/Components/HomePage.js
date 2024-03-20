import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  
  const backgroundImageUrl = 'https://as1.ftcdn.net/v2/jpg/03/51/57/86/1000_F_351578633_NmH73a5GgZcfB9bLHNVAsy1U93CWwbIA.jpg';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      alignItems: 'center',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(${backgroundImageUrl})`,
      paddingTop: '10vh', 
    }}>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        <h1 style={{ color: '#333' }}>Football Players App</h1>
        <p style={{ color: '#555' }}>Submitted by Sean Pesin</p>
        <button onClick={() => navigate('/SearchTeam')} style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        
          onMouseOver: (e) => (e.currentTarget.style.backgroundColor = '#0056b3'),
          onMouseOut: (e) => (e.currentTarget.style.backgroundColor = '#007bff'),
        }}>Item Search</button>
      </div>
    </div>
  );
};

export default HomePage;