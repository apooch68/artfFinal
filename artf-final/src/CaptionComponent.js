import React from 'react';

const likedHeartUrl = "https://www.nicepng.com/png/detail/778-7786050_download-instagram-like-icon-png.png";
const likeHeartUrl = "https://lh3.googleusercontent.com/proxy/FGgkiGFBBT0mMJs3N6b_tr5nK2eDm8TR2DkOJWAYy3RLWO2uetZYGPr6Ckxa7Whcwli8GJhWt831lj9c5bpnsTlNnmrOa56FlHbPXba_qSvEAmXnGb-N5Ti3PnHBQxV2-7fB-6TAmfk";

class Caption extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        liked: false
      }
    }

  onClickLike = () => {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    const { likes, caption } = this.props;
    const { liked } = this.state;
    return (
      <div style={{
        fontSize: '13px',
        marginTop: '-8px',
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
        onClick={this.onClickLike}
        src={liked ? likedHeartUrl : likeHeartUrl} />
        <p>{liked ? likes + 1 : likes} likes</p>
      </div>
      <div style={{
        marginTop: '-20px'
      }}>
      <p><b>apooch68</b> {caption}</p></div>
      </div>
    );
  }
}

export default Caption;