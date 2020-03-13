import React from 'react';
import './App.css';
import PageProductList from './components/PageProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
