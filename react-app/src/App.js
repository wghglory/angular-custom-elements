import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SearchComponent } from './components/Search';
import { LoginComponent } from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginComponent></LoginComponent>
        <SearchComponent></SearchComponent>
      </header>
    </div>
  );
}

export default App;
