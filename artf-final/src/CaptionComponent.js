import React from 'react';

const likedHeartUrl = "https://www.nicepng.com/png/detail/778-7786050_download-instagram-like-icon-png.png";
const likeHeartUrl = "https://www.pngkey.com/png/detail/85-850878_corazn-heart-tumblr-tatuaje-tattoo-heart-instagram-heart.png";

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
    const { likes, caption, blur, abbrv } = this.props;
    const { liked } = this.state;
    let captionStyle = {
      fontSize: '13px',
      marginTop: '-6px',
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

    let numLikes = likes;
    if (liked && !abbrv) {
      numLikes += 1;
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
        <p>{numLikes}{abbrv} likes</p>
      </div>
      <div style={{
        marginTop: '-23px'
      }}>
      <p><b>BjackHman</b>  {caption}</p></div>
      </div>
    );
  }
}

export default Caption;