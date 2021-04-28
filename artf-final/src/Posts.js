import React from 'react';
import Caption from './CaptionComponent';
import horsinaroundlevel1 from './pictures/horsinaroundlevel1.jpeg';
import bojackanddianelevel2 from './pictures/bojackanddianelevel2.png';
import Onetrickponylevel1 from './pictures/Onetrickponylevel1.png';
import rockoperalevel2 from './pictures/rockoperalevel2.jpeg';
import secretariatlevel1 from './pictures/secretariatlevel1.jpeg';

import reflection from './pictures/reflection.jpg';
import todd from './pictures/todd.jpg';
import bender from './pictures/bender.jpg';
import sarahlynn from './pictures/sarahlynn.jpg';
import ImageZoom from 'react-medium-image-zoom'

export const data = [{
  id: 1,
  likes: '1.1m',
  level: 2,
  caption: "Me and the co-stars just horsin' around! #TBT",
  name: "Island",
  image: horsinaroundlevel1
}, {
  id: 2,
  name: "Forest",
  level: 3,
  likes: 910,
  caption: "Just chillin' with my friend Diane... on my ROOF! #buddies #mansion #justcelebritythings",
  image: bojackanddianelevel2
}, {
  id: 3,
  name: "Whale",
  level: 2,
  likes: '232.1k',
  caption: "Read my new auto-biography to learn about my awesome life! XOXO",
  image: Onetrickponylevel1
}, {
  id: 4,
  name: "Mountain",
  level: 3,
  likes: '1.2k',
  caption: "Good times with the housemate! Just hanging out in my mansion :)",
  image: rockoperalevel2
}, {
  id: 5,
  name: "Boat",
  level: 2,
  likes: "577.2k",
  caption: "Come see my new movie coming out soon! Love you guys. I couldn't be more grateful!",
  image: secretariatlevel1
}, {
  id: 6,
  name: "Self reflection",
  level: 4,
  likes: 142,
  caption: "sometimes i look at myself and i don't know who i am anymore. anyway what's up guys?",
  image: reflection
}, 
{
  id: 8,
  name: "Todd drunk",
  level: 4,
  likes: 33,
  caption: "got black out drunk today with my housemate. hopefully this is a one time thing",
  image: todd
}, {
  id: 7,
  name: "Drunk alone",
  level: 5,
  likes: 23,
  caption: "it wasnt a one time thing. just went on a bender & don't remember anything since last tuesday",
  image: bender
}, {
  id: 9,
  name: "Sarah Lynn",
  level: 5,
  likes: 0,
  caption: "I went too far this time. Life isn't the same. Could use someone to talk to...",
  image: sarahlynn
}];

class Posts extends React.Component {
  render() {
    const { level } = this.props;
    // Create tile for each item in data array
    // Pass data to each tile and assign a key
    return (
      <div 
        style={{
          padding: '6vh 16vw',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
      }}>
        {this.props.data.map((data) => {
          return <Tile data={data} key={data.id} currentLevel={level} />
        })}
      </div>
    );
  }
}

class Tile extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        open: false,
        mouseOver: false
      };
      // Bind properties to class instance
      this._clickHandler = this._clickHandler.bind(this);
      this._mouseEnter = this._mouseEnter.bind(this);
      this._mouseLeave = this._mouseLeave.bind(this);
    }
    // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      this.setState({
        mouseOver: true
      })
    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false
      })
    }
  }
  _clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }

  render() {
    const { image, name, likes, caption, level } = this.props.data
    // Modify styles based on state values
    let tileStyle = {};
    const hidden = this.props.currentLevel < level;
    tileStyle = {
        width: '18vw',
        height: '18vw',
        overflow: 'hidden'
        //cursor: 'pointer',
      };
    const {mouseOver} = this.state;
    let imgStyle = {
      width: '100%',
      height: '18vw',
      transition: 'transform 500ms ease',
      overflow: 'hidden',
      cursor: 'pointer'
    };
    if (mouseOver && !hidden) {
      imgStyle.transform = 'scale(1.1)';
    }
    if (hidden) {
      imgStyle = {
        ...imgStyle,
        filter: "blur(15px)",
        WebkitFilter: "blur(15px)"
      }
    }
  
    // var imageComponent = (<img
    //   onMouseEnter={this._mouseEnter}
    //   onMouseLeave={this._mouseLeave}
    //   src={image}
    //   alt={name}
    //   style={{...imgStyle, ...tileStyle}}
    // />);
    var imageComponent = (
      <ImageZoom
        image={{
          onMouseEnter: this._mouseEnter,
          onMouseLeave: this._mouseLeave,
          src: image,
          alt: name,
          style: { ...imgStyle, ...tileStyle }
        }}
        zoomImage={{
          src: image,
          alt: name,
          style: {
            cursor: 'pointer'
          }
        }}
      />
    )
    if (hidden) {
      imageComponent = (<img
        onMouseEnter={this._mouseEnter}
        onMouseLeave={this._mouseLeave}
        src={image}
        alt={name}
        style={{...imgStyle, ...tileStyle}}
      />);
      }
  
    return (
      <div style={{
        margin: '15px',
        overflow: 'hidden',
        width: '18vw',
        //height: '21vw',
        height: '26vw',
        marginTop: '0px'
      }}>

        <div style={tileStyle}>{imageComponent}</div>
        
        {!this.state.open && 
          <Caption likes={likes} caption={caption} blur={hidden} />}
      </div>
    );
  }
}

export default Posts;