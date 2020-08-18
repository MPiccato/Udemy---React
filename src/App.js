import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a la primera página de Martín Piccato con React
        </p>
        <strong>Empezamos a crear algo interesante</strong>
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende a programar en React
        </a>
      </header>
    </div>
  );
}

export default App;
