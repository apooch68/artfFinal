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
    const { likes, caption, blur } = this.props;
    const { liked } = this.state;
    let captionStyle = {
      fontSize: '13px',
      marginTop: '-8px',
      paddingLeft: '5px'
    };
    let imageStyle = {
      marginTop: '12px',
      height: '19px',
      width: '19x',
      paddingRight: '5px',
    };
    let onClick = this.onClickLike;
    if (blur) {
      captionStyle = {
        ...captionStyle,
        color: 'transparent',
        textShadow: '1px 2px 5px rgba(0,0,0,0.5)'
      }
      imageStyle = {
        ...imageStyle,
        filter: "blur(10px)",
        WebkitFilter: "blur(10px)"
      }
      onClick = () => {};
    }

    return (
      <div style={captionStyle}>
      <div style={{
        marginBottom: '0px',
        display: 'flex',
      }}>
      <img style={imageStyle}
        onClick={onClick}
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