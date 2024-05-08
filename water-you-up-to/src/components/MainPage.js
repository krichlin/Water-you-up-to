import React, {useState, useEffect} from "react";
import './MainPage.css';

import LogForm from './LogForm'
import MainDisplay from "./MainDisplay";

function MainPage() {
    const [backgroundColor, setBackgroundColor] = useState('#00bfff');

    return (
      <div>
        <main>
          <LogForm />
          <MainDisplay />
        </main>
        <div style={{ backgroundColor }}>
          <h1>Have You Hydrated Today?</h1>
          <button onClick={() => setBackgroundColor('#00ffff')}>Change Background</button>
        </div>
      </div>
    );
    
}

export default MainPage
