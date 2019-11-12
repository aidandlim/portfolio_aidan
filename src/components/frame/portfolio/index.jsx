import React from 'react';

import Card from '../card';

import './index.css';

const Portfolio = () => {
	return (
		<div className='portfolio'>
			<h1>My Recent Projects</h1>
			<h2>Here are some recent projects. You can check whole project on my GitHub</h2>
			<div>
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default Portfolio;