import React from 'react';

import Card from '../card';

import './index.css';

const Portfolio = (props) => {
	const array = [
		{
			isPersonal: 1,
			isProgress: 0,
			title: 'Aidan\'s',
			description1: '- A responsive Single Page Application(SPA) using React',
			description2: '- A simple web application for introducing myself',
			preview: '',
			code: 'https://github.com/aidandlim/portfolio_aidan',
			page: 'https://aidandlim.github.io/portfolio_aidan/',
			site: 'https://www.aidandlim.com/',
		},
		{
			isPersonal: 1,
			isProgress: 0,
			title: '#Camagru',
			description1: '- A responsive Single Page Application(SPA) using React & Java',
			description2: '- A Social Network Service(SNS) for sharing pictures like Instagram',
			preview: 'https://github.com/aidandlim/portfolio_camagru/blob/master/PREVIEW.gif?raw=true',
			code: 'https://github.com/aidandlim/portfolio_camagru/',
			page: 'https://aidandlim.github.io/portfolio_camagru/',
			site: 'https://camagru.aidandlim.com/',
		},
		{
			isPersonal: 0,
			isProgress: 1,
			title: 'M@TCH@',
			description1: '- A responsive Single Page Application(SPA) using React & Node',
			description2: '- A Social Network Service(SNS) for matching dating partner like Tinder',
			preview: '',
			code: 'https://github.com/aidandlim/portfolio_matcha/',
			page: 'https://aidandlim.github.io/portfolio_matcha/',
			site: '',
		},
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
				{array.map((data, index) => 
					<Card data={data} key={index} />
				)}
			</div>
		</div>
	);
}

export default Portfolio;