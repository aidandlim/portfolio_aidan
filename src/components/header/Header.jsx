import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={this.props.isDarkMode ? 'header--d' : 'header--w'}>
        <div className={this.props.isDarkMode ? 'header--d--darkmode' : 'header--w--darkmode'} onClick={this.props.toggleDarkMode}>{this.props.isDarkMode ? 'Darkmode Off' : 'Darkmode On'}</div>
        <div className={this.props.isDarkMode ? 'header--d--introduce' : 'header--w--introduce'}>Looking For a Full-Stack Developer?</div>
        <div className={this.props.isDarkMode ? 'header--d--bio' : 'header--w--bio'}>I Enjoy Building Everything from Small Company Sites to Huge Web Apps.</div>
        <div className="header--photo"></div>
      </div> 
    );
  }

}

export default Header;
