import React, { useState } from 'react';

const NameList = () => {
  const [names, setNames] = useState(['John', 'Jane', 'Mike']);
  const [newName, setNewName] = useState('');

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleAddName = () => {
    if (newName.trim() !== '') {
      setNames([...names, newName]);
      setNewName('');
    }
  };

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input type="text" value={newName} onChange={handleInputChange} />
      
      <button onClick={handleAddName}>Add Name</button>
    </div>
  );
};

export default NameList;

