import React, {useState, useEffect} from "react";
import Header from './LogForm';
import './MainPage.css';



function MainPage() {
    const [backgroundColor, setBackgroundColor] = useState('#00bfff');
  
    return (
      <div style={{ backgroundColor }}>
        <h1>Have You Hydrated Today?</h1>
        <button onClick={() => setBackgroundColor('blue')}>Change Background</button>
      </div>
    );
  }
  
  export default MainPage;

