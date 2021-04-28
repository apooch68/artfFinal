import React from 'react';

export const data = [{
  id: 1,
  name: "Island",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 2,
  name: "Forest",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 3,
  name: "Whale",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 4,
  name: "Mountain",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 5,
  name: "Boat",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 6,
  name: "Flowers",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 7,
  name: "Fire",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 8,
  name: "Garden",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}, {
  id: 9,
  name: "Bridge",
  image: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E"
}];

const imgStyle = {
  width: '100%',
  transition: 'transform 500ms ease'
};

class Tiles extends React.Component {
  render() {
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
          return <Tile data={data} key={data.id} />
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
    // Modify styles based on state values
    let tileStyle = {};
    let headerStyle = {};
    let zoom = {};
    // When tile clicked
    if (this.state.open) {
      tileStyle = {
        width: '62vw',
        height: '62vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '0',
        marginTop: '-33vw',
        marginLeft: '-31vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none',
        cursor: 'pointer',
      };
    } else {
      tileStyle = {
        width: '18vw',
        height: '18vw',
        cursor: 'pointer',
      };
    }

    return (
      <div style={{
        margin: '15px',
        overflow: 'hidden',
        width: '18vw',
        height: '21vw',
        marginTop: '0px'
      }}>

        <img
          onMouseEnter={this._mouseEnter}
          onMouseLeave={this._mouseLeave}
          onClick={this._clickHandler}
          src={this.props.data.image}
          alt={this.props.data.name}
          style={{...imgStyle, ...tileStyle}}
        />
        
        {!this.state.open && <div style={{
          marginTop: '-10px',
          marginBottom: '0px',
          fontSize: '13px'
        }}><p><b>@apooch68</b> hi</p></div>}
      </div>
    );
  }
}

export default Tiles;