import React, { Component } from 'react';
import './Greeting.css';

import $ from 'jquery';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.openAboutme = this.openAboutme.bind(this);
  }

  openAboutme() {
    if(this.props.isDarkMode) {
      $('.aboutme--d').fadeIn(250);
    } else {
      $('.aboutme--w').fadeIn(250);
    }
  }

  render() {
    return (
      <div className={this.props.isDarkMode ? 'greeting--d' : 'greeting--w'}>
        <p>Hello, I'm Aidan. It's pleasure to meet you.</p>
        <div className={this.props.isDarkMode ? 'greeting--d--aboutme' : 'greeting--w--aboutme'} onClick={this.openAboutme}>Learn More About Me</div>
      </div> 
    );
  }

}

export default Greeting;
