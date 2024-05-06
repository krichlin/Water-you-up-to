import React from "react";

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import LogForm from './components/LogForm';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App">
      <Header />
      <LogForm />
      <AboutPage />
    </div>
  );
}

export default App;
