import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {

  render() {
    return (
      <div className="contact">
        <div className="contact--interest">Are you interested in working with me? Feel free to ask anything!</div>
        <div className="contact--chat">Let's talk right away</div>
        <div className="contact--copyright">Handcraft by me © Aidan</div>
      </div> 
    );
  }

}

export default Contact;
