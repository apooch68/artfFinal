import React from 'react';
import { Profile } from './UserGrid';
import Posts, { data } from './Posts';

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

  render() {
    return (
      <>
      <Profile></Profile>
      <div style={{
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
      }}>{BasicTextFields()}</div>
      <Posts level={this.state.currentLevel} data={data} />
      </>
  );
  }
}

export default ProfileContainer;