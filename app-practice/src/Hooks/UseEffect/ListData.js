import React, { useState, useEffect } from 'react';

const ListData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        setData(jsonData.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>List Data</h1>
      <ul>
        {
         data.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </li>
        )) 
        }
      </ul>
    </div>
  );
};

export default ListData;
