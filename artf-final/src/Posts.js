import React from 'react';
import Caption from './CaptionComponent';
import horsinaroundlevel1 from './pictures/horsinaroundlevel1.jpeg';
import bojackanddianelevel2 from './pictures/bojackanddianelevel2.png';
import Onetrickponylevel1 from './pictures/Onetrickponylevel1.png';
import rockoperalevel2 from './pictures/rockoperalevel2.jpeg';
import secretariatlevel1 from './pictures/secretariatlevel1.jpeg';


export const data = [{
  id: 1,
  likes: 500,
  level: 1,
  caption: "feelin sexy today.... but could use a friend :/",
  name: "Island",
  image: horsinaroundlevel1
}, {
  id: 2,
  name: "Forest",
  level: 2,
  likes: 288,
  caption: "could use a friend.... but feelin sexy 2day aha :P",
  image: bojackanddianelevel2
}, {
  id: 3,
  name: "Whale",
  level: 1,
  likes: 1,
  caption: "feelin sexy today.... but could use a friend :/",
  image: Onetrickponylevel1
}, {
  id: 4,
  name: "Mountain",
  level: 2,
  likes: 3,
  caption: "could use a friend.... but feelin sexy 2day aha :P",
  image: rockoperalevel2
}, {
  id: 5,
  name: "Boat",
  level: 1,
  likes: 800,
  caption: "feelin sexy today.... but could use a friend :/",
  image: secretariatlevel1
}, {
  id: 6,
  name: "Self reflection",
  level: 3,
  likes: 65,
  caption: "sometimes i look at myself and i don't know who i am anymore. anyway what's up guys?",
  image: "https://www.americamagazine.org/sites/default/files/main_image/BoJack_Horseman_S06E01_12m1s17305f.jpg"
}, 
{
  id: 8,
  name: "Todd drunk",
  level: 4,
  likes: 3,
  caption: "got pretty drunk today with todd. this should be a one time thing tho!",
  image: "https://culturefly.co.uk/wp-content/uploads/2014/08/bojack-horseman-02-e1408981365594-759x500.png"
}, {
  id: 7,
  name: "Drunk alone",
  level: 4,
  likes: 7,
  caption: "it wasnt a one time thing. just went on a bender & don't remember anything since last tuesday",
  image: "https://drive.google.com/file/d/1WJYHn58SBKEKlzefHCYBK__o2CD4CEyH/view?usp=sharing"
}, {
  id: 9,
  name: "Sarah Lynn",
  level: 5,
  likes: 0,
  caption: "I went too far this time. Life isn't the same.",
  image: "https://miro.medium.com/max/1950/1*1YqPXr9D1gcjXktyIP6gsg.jpeg"
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