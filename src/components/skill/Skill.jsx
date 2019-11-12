import React, { Component } from 'react';
import './Skill.css';

class Skill extends Component {

  render() {
    return (
      <div className={this.props.isDarkMode ? 'skill--d' : 'skill--w'}>
        <div className={this.props.isDarkMode ? 'skill--d--frontend' : 'skill--w--frontend'}></div>
        <div className={this.props.isDarkMode ? 'skill--d--backend' : 'skill--w--backend'}></div>
      </div> 
    );
  }

}

export default Skill;
