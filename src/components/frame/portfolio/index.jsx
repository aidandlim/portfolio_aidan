import React from 'react';

import Card from '../card';

import './index.css';

const Portfolio = (props) => {
	const array = [
		{
			title: '#Camagru',
			description1: 'description1',
			description2: 'description2',
			preview: 'https://github.com/aidandlim/portfolio_camagru/blob/master/PREVIEW.gif?raw=true',
			code: 'https://github.com/aidandlim/portfolio_camagru',
			page: 'https://aidandlim.github.io/portfolio_camagru/',
			site: 'https://camagru.aidandlim.com',
		}
	]
	return (
		<div className='portfolio'>
			{!props.lang 
				? 
				<h1>My Recent Projects</h1>
				: 
				<h1>최근 프로젝트</h1>
			}
			{!props.lang 
				? 
				<h2>Here are some recent projects. You can check whole project on my GitHub.</h2>
				: 
				<h2>저의 최근 프로젝트들 입니다. 제 깃허브 페이지에서 모든 프로젝트를 확인하실 수 있습니다.</h2>
			}
			<div>
				<Card data={array[0]} />
				<Card data={array[0]} />
				<Card data={array[0]} />
			</div>
		</div>
	);
}

export default Portfolio;