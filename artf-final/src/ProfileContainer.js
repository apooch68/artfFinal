import React from 'react';
import { Profile } from './UserGrid';
import Posts, { data } from './Posts';
import {BasicTextFields} from './Questions';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const questions = [
  {
    question: "Did you watch Secretariat?",
    answer: "yes"
  },
  {
    question: "What's his favorite TV show?",
    answer: "horsin' around"
  },
  {
    question: "What's his least favorite fruit?",
    answer: "honeydew"
  },
  {
    question: "What's my biggest fear?",
    answer: "being alone"
  },
  {
    question: "What's my biggest regret?",
    answer: "sarah lynn"
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
      {this.state.isChatting && <Widget
          profileAvatar={"https://pyxis.nymag.com/v1/imgs/7b1/f7e/d9537726a7ff3eb18f3221a5a7b17b3058-11-bojack.rsquare.w330.jpg"}
          title="Message Bojack"
          subtitle="Ask him how he is!"
          handleNewUserMessage={this.handleNewUserMessage}
        />}
      </>
  );
  }
}

export default ProfileContainer;