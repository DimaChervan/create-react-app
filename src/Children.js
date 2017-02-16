import React from 'react';

/*class Wrapper extends React.Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    );
  }
}

class Parent extends React.Component {
  render() {
    //console.log(this.props.children);
    //let items = React.Children.map(this.props.children, child => child);
    //let items = React.Children.forEach(this.props.children, child => child);
    //let items = React.Children.only(this.props.children);
    let items = React.Children.only(this.props.children);
    console.log(items);
  }
}*/

class App extends React.Component {
  render() {
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    );
  }
}

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = { selected: 'None' };
  }

  selectItem(selected) {
    this.setState({selected});
  }

  render() {
    let fn = child => React.cloneElement(child, {
      onClick: this.selectItem.bind(this, child.props.value)
    });

    let items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <h2>Selected: {this.state.selected}</h2>
        {items}
      </div>
    );
  }
}

export default App;
