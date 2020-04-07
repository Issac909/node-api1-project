import React from 'react';
import { Route } from 'react-router-dom';

import UserCards from './components/UserCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <UserCards />
    </div>
  );
}

export default App;
