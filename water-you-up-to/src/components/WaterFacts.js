import React, { useState, useEffect } from 'react';
import './WaterFacts.css';

function WaterFacts() {
  const [facts, setFacts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  
  useEffect(() => {
    fetch('http://localhost:6001/facts')
    .then((resp) => resp.json())
    .then((data) => {
      const filteredData = data.filter((fact) => fact.id >= 11 && fact.id <= 20);
      setFacts(filteredData);
    });
}, []);

return (
  <div>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {facts.map((fact, index) => (
        <li
        key={index}
        className={index === hoveredIndex ? 'enlarged-line' : ''} // Add className based on hoveredIndex
        onMouseEnter={() => setHoveredIndex(index)} // Update hoveredIndex on mouse enter
        onMouseLeave={() => setHoveredIndex(null)} // Reset hoveredIndex on mouse leave
      >
        {fact.fact}
      </li>
    ))}
  </ul>
</div>
);

}

export default WaterFacts;