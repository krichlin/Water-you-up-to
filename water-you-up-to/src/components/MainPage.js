import React, {useState, useEffect} from "react";
import Header from './Header.js';
import './MainPage.css';

import LogForm from './LogForm'
import MainDisplay from "./MainDisplay";

function MainPage() {
    const [backgroundColor, setBackgroundColor] = useState('#00bfff');
    const [listItem, setListItem] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:6001/Logs')
      .then((res) => res.json())
      .then((data) => {
          setListItem(data)
          console.log(listItem)
      })
    }, [])

    return (
      <div>
        <main>
          <LogForm />
          <MainDisplay Logs={listItem} />
        </main>
        <div style={{ backgroundColor }}>
          <h1>Have You Hydrated Today?</h1>
          <button onClick={() => setBackgroundColor('#00ffff')}>Change Background</button>
        </div>
      </div>
    );
    
}

export default MainPage
