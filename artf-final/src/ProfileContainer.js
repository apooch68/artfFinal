import React from 'react';
import { Profile } from './UserGrid';
import Posts, { data } from './Posts';
import {BasicTextFields} from './Questions';

const questions = {}

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 1
    };
  }

  onLevelUp = () => {
    this.setState({
      currentLevel: this.state.currentLevel + 1
    });
  }



  getQuestion = () => {
    return this.state.currentLevel in questions ? questions[this.state.currentLevel] : "How are you"
  }

  render() {
    return (
      <>
      <Profile></Profile>
      <div style={{
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
      }}>
        <h2>{this.getQuestion()}</h2>
        </div>
        <div style={{
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
      }}>
        <BasicTextFields></BasicTextFields></div>
      <Posts level={this.state.currentLevel} data={data} />

      </>
  );
  }
}

export default ProfileContainer;