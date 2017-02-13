import React from 'react';

//const App = () => <h1>Hello</h1>
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'state txt'
    };
    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({
      txt: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.update} />
        <h1>{this.state.txt}</h1>
        <b>{this.props.txt}</b>
        <Widget update={this.update} />
        <Button>Some button</Button>
      </div>
    )
  }
}

const Widget = props =>
  <input onChange={props.update} />

const Button = props => <button type="button">{props.children}</button>

App.propTypes = {
  txt: React.PropTypes.string
};

App.defaultProps = {
  txt: 'default txt'
};

export default App;
