import React, { Component } from 'react';
import './Body.css';

import Greeting from '../greeting/Greeting';
import Aboutme from '../aboutme/Aboutme';
import Skill from '../skill/Skill';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

class Body extends Component {
  
  render() {
    return (
      <div className={this.props.isDarkMode ? "body--d" : "body--w"}>
        <Greeting isDarkMode={this.props.isDarkMode} />
        <Aboutme isDarkMode={this.props.isDarkMode} />
        <Skill isDarkMode={this.props.isDarkMode} />
        <Portfolio isDarkMode={this.props.isDarkMode} />
        <Contact isDarkMode={this.props.isDarkMode} />
      </div> 
    );
  }

}

export default Body;
