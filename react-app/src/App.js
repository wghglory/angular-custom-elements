import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SearchComponent } from './components/Search';
import { LoginComponent } from './components/Login';
import { CardComponent } from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <CardComponent message="use angular css in react"></CardComponent>
      {/* <LoginComponent></LoginComponent> */}
      <SearchComponent></SearchComponent>
    </div>
  );
}

export default App;
