import React from 'react';
import './App.css';
import PageProductList from './components/PageProductList';
import titleImg from '../src/assets/title.png';
import subtitleImg from '../src/assets/subtitle.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="header-image" src={titleImg} alt="title-img" />
        <img className="subtitle-image" src={subtitleImg} alt="subtitle-img" />
        <PageProductList />
      </header>
    </div>
  );
}

export default App;
