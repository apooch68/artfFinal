import logo from './logo.svg';
import './App.css';
import React from 'react';
import Tiles, { data } from './Tiles';

function App() {
  return (
      <Tiles data={data} />
  );
}

export default App;
