import logo from './logo.svg';
import './App.css';
import Tiles, { data } from './Tiles';
import React, {Component} from 'react';
import { Profile } from './UserGrid';
import BasicTextFields from './Questions';



function App() {
  return (
      <>
      <Profile></Profile>
      <div style={{
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
      }}>{BasicTextFields()}</div>
      <Tiles data={data} />
      </>
  );
}

export default App;
