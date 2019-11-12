import React, { Component } from 'react';
import './App.css';

import Header from '../header/Header';
import Body from '../body/Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode : false
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    if(this.state.isDarkMode) {
      this.setState({isDarkMode: false});
    } else {
      this.setState({isDarkMode: true});
    }
  }

  render() {
    return (
      <div className="app">
        <Header isDarkMode={this.state.isDarkMode} toggleDarkMode={this.toggleDarkMode}/>
        <Body isDarkMode={this.state.isDarkMode} />
      </div> 
    );
  }

}

export default App;
