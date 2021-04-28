import React from 'react';
import Caption from './CaptionComponent';
import reflection from './pictures/reflection.jpg';
import todd from './pictures/todd.jpg';
import bender from './pictures/bender.jpg';
import sarahlynn from './pictures/sarahlynn.jpg';
import ImageZoom from 'react-medium-image-zoom'

export const data = [{
  id: 1,
  likes: 500,
  level: 1,
  caption: "feelin sexy today.... but could use a friend :/",
  name: "Island",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 2,
  name: "Forest",
  level: 2,
  likes: 288,
  caption: "could use a friend.... but feelin sexy 2day aha :P",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 3,
  name: "Whale",
  level: 1,
  likes: 1,
  caption: "feelin sexy today.... but could use a friend :/",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 4,
  name: "Mountain",
  level: 2,
  likes: 3,
  caption: "could use a friend.... but feelin sexy 2day aha :P",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 5,
  name: "Boat",
  level: 1,
  likes: 800,
  caption: "feelin sexy today.... but could use a friend :/",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 6,
  name: "Self reflection",
  level: 3,
  likes: 65,
  caption: "sometimes i look at myself and i don't know who i am anymore. anyway what's up guys?",
  image: reflection
}, 
{
  id: 8,
  name: "Todd drunk",
  level: 4,
  likes: 3,
  caption: "got black out drunk today with my housemate. hopefully this is a one time thing",
  image: todd
}, {
  id: 7,
  name: "Drunk alone",
  level: 4,
  likes: 7,
  caption: "it wasnt a one time thing. just went on a bender & don't remember anything since last tuesday",
  image: bender
}, {
  id: 9,
  name: "Sarah Lynn",
  level: 5,
  likes: 0,
  caption: "I went too far this time. Life isn't the same.",
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