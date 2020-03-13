import React from 'react';
import './App.css';
import PageProductList from './components/PageProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Wheeler Dealer
        </h1>
        <PageProductList />
      </header>
    </div>
  );
}

export default App;
