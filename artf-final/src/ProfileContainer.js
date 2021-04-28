import React from 'react';
import { Profile } from './UserGrid';
import Posts, { data } from './Posts';
import {BasicTextFields} from './Questions';

const questions = [
  {
    question: "What is Alison's favorite color?",
    answer: "purple"
  },
  {
    question: "Who is Alison's favorite roommate?",
    answer: "mimz"
  }
]

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
    const level = this.state.currentLevel;
    return level < questions.length + 1 ? questions[level - 1].question : 'You are now listed as Alison\'s close friend.';
  }

  getAnswer = () => {
    const level = this.state.currentLevel;
    return level < questions.length + 1 ? questions[level - 1].answer : null;
  }

  render() {
    const finalLevel = this.state.currentLevel == questions.length + 1;

    return (
      <>
      <Profile blurInfo={this.state.currentLevel == 1}></Profile>
      {/* <div style={{
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        marginTop: '-50px'
      }}>
        <h3>{this.getQuestion()}</h3>
        </div> */}
        <div style={{
          marginTop: '-40px',
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
      }}>
        <BasicTextFields disabled={finalLevel} question={this.getQuestion()} answer={this.getAnswer()} onCorrectAnswer={this.onLevelUp} /></div>
      <Posts level={this.state.currentLevel} data={data} />

      </>
  );
  }
}

export default ProfileContainer;