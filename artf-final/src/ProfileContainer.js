import React from 'react';
import { Profile } from './UserGrid';
import Posts, { data } from './Posts';
import {BasicTextFields} from './Questions';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './App.css';

const questions = [
  {
    question: "What's Bojack's favorite TV show?",
    answer: "horsin' around"
  },
  {
    question: "What's Bojack's least favorite fruit?",
    answer: "honeydew"
  },
  {
    question: "Who is Bojack's mother?",
    answer: "beatrice"
  },
  {
    question: "What's my favorite pastime?",
    answer: "opioids"
  },
  {
    question: "What's my biggest fear?",
    answer: "being alone"
  },
]

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 1,
      numMessages: 0,
      isChatting: false
    };
  }

  onLevelUp = () => {
    let isChatting = this.state.currentLevel >= questions.length;
    this.setState({
      currentLevel: this.state.currentLevel + 1,
      isChatting
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

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    if (this.state.numMessages === 0) {
      addResponseMessage("wasssuppp");
    }
    this.setState({
      numMessages: this.state.numMessages + 1
    })
  }

  render() {
    const finalLevel = this.state.currentLevel == questions.length + 1;

    return (
      <>
      <Profile blurInfo={this.state.currentLevel == 1}></Profile>
        <div style={{
          marginTop: '-40px',
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
      }}>
        <BasicTextFields disabled={finalLevel} question={this.getQuestion()} answer={this.getAnswer()} onCorrectAnswer={this.onLevelUp} /></div>
      <Posts level={this.state.currentLevel} data={data} />
      {this.state.isChatting && <Widget
          profileAvatar={"https://pbs.twimg.com/media/DjejAJyU8AIFvVz?format=jpg&name=small"}
          title="Message Bojack"
          subtitle="Ask him how he is!"
          handleNewUserMessage={this.handleNewUserMessage}
        />}
      </>
  );
  }
}

export default ProfileContainer;