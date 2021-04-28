import React from 'react';
import { Profile } from './UserGrid';
import Posts, { data } from './Posts';
import {BasicTextFields} from './Questions';
import { Widget, addResponseMessage, toggleMsgLoader } from 'react-chat-widget';
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
    return level < questions.length + 1 ? questions[level - 1].question : 'You are now listed as Bojack\'s close friend.';
  }

  getAnswer = () => {
    const level = this.state.currentLevel;
    return level < questions.length + 1 ? questions[level - 1].answer : null;
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    if (this.state.numMessages === 0) {
      toggleMsgLoader()
      setTimeout(function(){ 
        toggleMsgLoader();
        addResponseMessage("Oh hey. I'm glad you reached out."); 
    }, 2500);
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
          profileAvatar={"https://cdn.vox-cdn.com/thumbor/v3OyeorG4Honr3vIWBrcZmy0XlA=/0x0:1920x1080/1200x800/filters:focal(863x301:1169x607)/cdn.vox-cdn.com/uploads/chorus_image/image/56596751/1351055_94035_zoomed_1.0.jpg"}
          title="Message Bojack"
          subtitle="Maybe ask him how he's doing..."
          handleNewUserMessage={this.handleNewUserMessage}
        />}
      </>
  );
  }
}

export default ProfileContainer;