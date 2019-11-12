import React, { Component } from 'react';
import './Aboutme.css';

import $ from 'jquery';

class Aboutme extends Component {
  constructor(props) {
    super(props);
    this.closeAboutme = this.closeAboutme.bind(this);
  }

  closeAboutme() {
    if(this.props.isDarkMode) {
      $('.aboutme--d').fadeOut(250);
    } else {
      $('.aboutme--w').fadeOut(250);
    }
  }

  render() {
    return (
      <div className={this.props.isDarkMode ? 'aboutme--d' : 'aboutme--w'}>
        <div className="aboutme--exit" onClick={this.closeAboutme}>X</div>
      </div> 
    );
  }

}

export default Aboutme;
