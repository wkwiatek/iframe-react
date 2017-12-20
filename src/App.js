import React, { Component } from 'react';
import './App.css';
import Frame from 'react-frame-component';

class App extends Component {
  state = {
    text: 'iframe'
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'state changed!'
      })
    }, 2000)
  }

  render() {
    return (
      <div>
        <h1>test1</h1>
        <Frame style={ { position: 'absolute', width: 200, height: 200, bottom: 0, right: 0 } }>
          <div>{ this.state.text }</div>
        </Frame>
      </div>
    );
  }
}

export default App;
