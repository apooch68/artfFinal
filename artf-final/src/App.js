import logo from './logo.svg';
import './App.css';
import Tiles, { data } from './Tiles';
import React, {Component} from 'react';
import { Profile } from './UserGrid'


function App() {
  return (
      <>
      <Profile></Profile>

      <Tiles data={data} />
      </>
  );
}

export default App;
