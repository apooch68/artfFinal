import React from 'react';

class Caption extends React.Component {
  constructor(props) {
      super(props);
    }

  render() {

    return (
      <div style={{
        fontSize: '13px',
        marginTop: '-10px',
        paddingLeft: '5px'
      }}>
      <div style={{
        marginBottom: '0px',
        display: 'flex',
      }}>
      <img style={{
        marginTop: '12px',
        height: '19px',
        width: '19x',
        paddingRight: '5px',
      }}
        src="https://lh3.googleusercontent.com/proxy/FGgkiGFBBT0mMJs3N6b_tr5nK2eDm8TR2DkOJWAYy3RLWO2uetZYGPr6Ckxa7Whcwli8GJhWt831lj9c5bpnsTlNnmrOa56FlHbPXba_qSvEAmXnGb-N5Ti3PnHBQxV2-7fB-6TAmfk" />
        <p>500 likes</p>
      </div>
      <div style={{
        marginTop: '-20px'
      }}>
      <p><b>apooch68</b> feelin sexy today.... but could use a friend :/</p></div>
      </div>
    );
  }
}

export default Caption;