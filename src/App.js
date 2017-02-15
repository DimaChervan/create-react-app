import React from 'react';
import ReactDOM from 'react-dom';

//const App = () => <h1>Hello</h1>
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'state txt',
      count: 0
    };
    this.update = this.update.bind(this);
    this.increment = this.increment.bind(this);
  }

  update(event) {
    this.setState({
      txt: event.target.value
    })
  }

  increment(event) {
    this.setState(prevState => ({count: prevState.count + 1}));
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.setState({m: 2});
    console.log(ReactDOM.findDOMNode(this));
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.increment, 500);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.inc);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 4 === 0;
  }

  render() {
    console.log('Render');
    let items = [
      { "text" : "test" },
      { "text" : "test" },
      { "text" : "test" }
    ];

    return (
      <div>
        <input onChange={this.update} />
        <h1>{this.state.txt}</h1>
        <b>{this.props.txt}</b>
        <Widget update={this.update} />
        <button onClick={this.increment}>{this.state.count * this.state.m}</button>
        <Button>text</Button>
        {items.map((item, index) => <p key={index}>{item.text} {index}</p>)}
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevState ${prevState.count}`);
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}

const Widget = props =>
  <input onChange={props.update} />

const Button = props => <button type="button">{props.children}</button>

App.propTypes = {
  txt(props, propName, component) {
    if (!props.hasOwnProperty(propName)) {
      return new Error(`Missing ${propName}`);
    }
  }
};

App.defaultProps = {
  txt: 'default txt'
};

export default Wrapper;
