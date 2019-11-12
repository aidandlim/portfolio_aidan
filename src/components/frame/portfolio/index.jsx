import React from 'react';

import Card from '../card';

import './index.css';

const Portfolio = () => {
	const array = [
		{
			title: '#Camagru',
			description: 'description',
			preview: 'https://github.com/aidandlim/portfolio_camagru/blob/master/PREVIEW.gif?raw=true',
			code: 'https://github.com/aidandlim/portfolio_camagru',
			page: 'https://aidandlim.github.io/portfolio_camagru/',
			site: 'https://camagru.aidandlim.com',
		}
	]
	return (
		<div className='portfolio'>
			<h1>My Recent Projects</h1>
			<h2>Here are some recent projects. You can check whole project on my GitHub</h2>
			<div>
				<Card data={array[0]} />
				<Card data={array[0]} />
				<Card data={array[0]} />
			</div>
		</div>
	);
}

export default Portfolio;