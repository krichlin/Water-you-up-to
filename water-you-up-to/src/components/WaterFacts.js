import React, { useState, useEffect } from 'react';

function WaterFacts() {
  const [facts, setFacts] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:6001/facts')
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      //setFacts(data)
    })
  }, [])

  return (
    <div>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
    )

}

export default WaterFacts;