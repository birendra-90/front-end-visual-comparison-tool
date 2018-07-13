import React, { Component } from 'react';
import Navigation from './Navigation';
import { verifyPath } from './../api';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tests: null
    }
  }

  componentDidMount() {
    verifyPath('http://www.google.com', (verification) => {
      console.log('Path has been verified', verification);
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;
