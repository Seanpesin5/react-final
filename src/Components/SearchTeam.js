import React, { useState, useEffect } from 'react';
import clubImages from '../Data';

const SearchTeam = () => {
  const [teams, setTeams] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.clubs.json';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }
        const result = await response.json();
        if (result.clubs && result.clubs.length > 0) {
          setTeams(result.clubs.map(team => ({ ...team, logo: clubImages[team.name] || '' })));
        } else {
          setError('No teams found.');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTeams();
  }, []);

  const handleTeamClick = (team) => {
    alert(`Team Name: ${team.name}\nTeam Code: ${team.code}\nCountry: ${team.country || 'N/A'}`);
  };

  const filteredTeams = query.length > 0
    ? teams.filter(team => team.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Search teams..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '10px', width: '80%', maxWidth: '500px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px' }}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ul style={{ listStyleType: 'none', padding: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {filteredTeams.map((team, index) => (
            <li key={index} onClick={() => handleTeamClick(team)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', margin: '10px 0', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', width: '80%', maxWidth: '500px', backgroundColor: '#fff' }}>
              <img src={clubImages[team.name] || 'path/to/default/logo.png'} alt={team.name} style={{ marginRight: '15px', width: '50px', height: '50px', borderRadius: '50%' }} />
              {team.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchTeam;