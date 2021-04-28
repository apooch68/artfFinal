import React from 'react';
import Caption from './CaptionComponent';

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
  name: "Flowers",
  level: 2,
  likes: 66,
  caption: "could use a friend.... but feelin sexy 2day aha :P",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 7,
  name: "Fire",
  level: 3,
  likes: 30,
  caption: "feelin sexy today.... but could use a friend :/",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 8,
  name: "Garden",
  level: 3,
  likes: 5,
  caption: "could use a friend.... but feelin sexy 2day aha :P",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 9,
  name: "Bridge",
  level: 4,
  likes: 1025,
  caption: "feelin sexy today.... but could use a friend :/",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}];

class Posts extends React.Component {
  render() {
    const { level } = this.props;
    // Create tile for each item in data array
    // Pass data to each tile and assign a key
    return (
      <div style={{
        padding: '6vh 16vw',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative'
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
      console.log(this.props.data.name);
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
    console.log(this.props.currentLevel, level)
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
  
    var imageComponent = (<img
      onMouseEnter={this._mouseEnter}
      onMouseLeave={this._mouseLeave}
      src={image}
      alt={name}
      style={{...imgStyle, ...tileStyle}}
    />);
    if (hidden) {
      // imageComponent = (
      //   <Blur
      //     onMouseEnter={this._mouseEnter}
      //     onMouseLeave={this._mouseLeave}
      //     img={image}
      //     alt={name}
      //     blurRadius={5}
      //     enableStyles={true}
      //     style={{...imgStyle, ...tileStyle}}
      //   />);
      }
  
    return (
      <div style={{
        margin: '15px',
        overflow: 'hidden',
        width: '18vw',
        //height: '21vw',
        height: '23vw',
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