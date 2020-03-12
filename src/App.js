import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageProductList from "../src/components/PageProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wheeler Dealer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PageProductList />
      </header>
    </div>
  );
}

export default App;
