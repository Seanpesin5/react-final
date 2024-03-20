import React, { useState } from 'react';

const AddTeam = ({ onAddTeam }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [country, setCountry] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeam = { name, code, country, imageUrl };
    onAddTeam(newTeam);
    setName('');
    setCode('');
    setCountry('');
    setImageUrl('');
  };

  return (
    <div>
      <h2>Add Team</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Code:</label>
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <button type="submit">Add Team</button>
      </form>
    </div>
  );
};

export default AddTeam;