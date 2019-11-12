import React, { Component } from 'react';
import './Portfolio.css';

import $ from 'jquery';

class Portfolio extends Component {
  componentDidMount(){
    $('.portfolio--card').mouseenter(function() {
      $(this).find('.portfolio--card--detail').fadeIn(300);
    });

    $('.portfolio--card').mouseleave(function() {
      $(this).find('.portfolio--card--detail').fadeOut(300);
    });
  }

  render() {
    return (
      <div className="portfolio">
        <div className="portfolio--title">My Recent Projects</div>
        <div className="portfolio--bio">Here are some recent projects. You can check whole project on my Github.</div>
        <div className="portfolio--card">
          <div className="portfolio--card--detail"></div>
        </div>
        <div className="portfolio--card">
          <div className="portfolio--card--detail"></div>
        </div>
        <div className="portfolio--card">
          <div className="portfolio--card--detail"></div>
        </div>
        <div className="portfolio--card">
          <div className="portfolio--card--detail"></div>
        </div>
        <div className="portfolio--card">
          <div className="portfolio--card--detail"></div>
        </div>
        <div className="portfolio--card">
          <div className="portfolio--card--detail"></div>
        </div>
      </div> 
    );
  }

}

export default Portfolio;
