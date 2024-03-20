
import React, { useEffect, useState } from 'react';
import AddTeam from './AddTeam';

const Players = () => {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  const clubImages = {
    "Aston Villa FC": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Aston_Villa_logo.svg/150px-Aston_Villa_logo.svg.png",
    "West Ham United FC": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/175px-West_Ham_United_FC_logo.svg.png",
    "Stoke City FC": "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Stoke_City_FC.svg/170px-Stoke_City_FC.svg.png",
    "Sunderland AFC": "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Logo_Sunderland.svg/250px-Logo_Sunderland.svg.png",
    "Everton FC": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/200px-Everton_FC_logo.svg.png",
    "Tottenham Hotspur FC": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/120px-Tottenham_Hotspur.svg.png",
    "Manchester City FC": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/190px-Manchester_City_FC_badge.svg.png",
    "Chelsea FC": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/190px-Chelsea_FC.svg.png",
    "West Bromwich Albion FC": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/West_Bromwich_Albion.svg/155px-West_Bromwich_Albion.svg.png",
    "Liverpool FC": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/180px-Liverpool_FC.svg.png",
    "Arsenal FC": "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/180px-Arsenal_FC.svg.png",
    "Manchester United FC": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/200px-Manchester_United_FC_crest.svg.png",
    "Newcastle United FC": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/200px-Newcastle_United_Logo.svg.png",
    "Norwich City FC": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Norwich_City_FC_logo.svg/170px-Norwich_City_FC_logo.svg.png",
    "Watford FC": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Watford.svg/180px-Watford.svg.png",
    "Swansea City FC": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Swansea_City_AFC_logo.svg/190px-Swansea_City_AFC_logo.svg.png",
    "Crystal Palace FC": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/175px-Crystal_Palace_FC_logo_%282022%29.svg.png",
    "Leicester City FC": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/190px-Leicester_City_crest.svg.png",
    "Southampton FC": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/190px-FC_Southampton.svg.png",
    "AFC Bournemouth": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/150px-AFC_Bournemouth_%282013%29.svg.png",
  };


useEffect(() => {
  fetchTeams();
}, []);

const fetchTeams = async () => {
  const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.clubs.json';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const result = await response.json();
    if (result.clubs && result.clubs.length > 0) {
      setTeams(result.clubs);
    } else {
      setError('No teams found.');
    }
  } catch (error) {
    console.error(error);
    setError(error.message);
  }
};

const handleAddTeam = (newTeam) => {
  setTeams([...teams, newTeam]);
};

const handleRemoveTeam = (teamName) => {
  
  const updatedTeams = teams.filter(team => team.name !== teamName);
  setTeams(updatedTeams);
};

if (error) {
  return <div>Error: {error}</div>;
}

return (
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: '#123456' }}>Football Teams</h1>
    <AddTeam onAddTeam={handleAddTeam} />
    <ul style={{ listStyleType: 'none', padding: '0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', justifyContent: 'center' }}>
      {teams.map((team, index) => (
        <li key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ width: '100px', height: '100px', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
            <img src={clubImages[team.name]} alt={team.name} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>{team.name}</div>
          <div style={{ marginTop: '10px', fontSize: '1rem', color: '#666' }}>Shortcut: {team.code}</div>
          <button onClick={() => handleRemoveTeam(team.name)} style={{ marginTop: '10px', cursor: 'pointer' }}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);
};

export default Players;