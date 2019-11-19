import React from 'react';

import Card from '../../function/card';

import './index.css';

const Portfolio = (props) => {
	const array = [
		{
			isPersonal: 1,
			isProgress: 0,
			title: 'Aidan\'s',
			descriptionEN: 'A responsive Single Page Application(SPA) using React',
			descriptionKR: 'A responsive Single Page Application(SPA) using React',
			language: ['JAVASCRIPT', 'REACT', 'HTML5', 'CSS3'],
			docs: 'https://aidandlim.github.io/portfolio_aidan/',
			code: 'https://github.com/aidandlim/portfolio_aidan',
			demo: 'https://portal.aidandlim.com/',
		},
		{
			isPersonal: 1,
			isProgress: 0,
			title: '#Camagru',
			descriptionEN: 'A responsive Single Page Application(SPA) using React',
			descriptionKR: 'A responsive Single Page Application(SPA) using React',
			language: ['JAVASCRIPT', 'REACT', 'REDUX', 'JAVA', 'SPRINGBOOT', 'MYSQL', 'MYBATIS', 'HTML5', 'CSS3'],
			docs: 'https://aidandlim.github.io/portfolio_camagru/',
			code: 'https://github.com/aidandlim/portfolio_camagru/',
			demo: 'https://camagru.aidandlim.com/',
		},
		{
			isPersonal: 0,
			isProgress: 1,
			title: 'M@TCH@',
			descriptionEN: 'A responsive Single Page Application(SPA) using React',
			descriptionKR: 'A responsive Single Page Application(SPA) using React',
			language: ['JAVASCRIPT', 'REACT', 'REDUX', 'NODE', 'EXPRESS', 'MYSQL', 'HTML5', 'CSS3'],
			docs: 'https://aidandlim.github.io/portfolio_matcha/',
			code: 'https://github.com/aidandlim/portfolio_matcha/',
			demo: '',
		},
	]
	return (
		<div className='portfolio'>
			{!props.lang 
				? 
				<h1>What Projects Have I Done?</h1>
				: 
				<h1>최근 프로젝트</h1>
			}
			{!props.lang 
				? 
				<h2>Here are some recent projects. You can check out all about these projects on my GitHub.</h2>
				: 
				<h2>저의 최근 프로젝트들 입니다. 제 깃허브 페이지에서 모든 프로젝트 정보를 확인하실 수 있습니다.</h2>
			}
			<div>
				{array.map((data, index) => 
					<Card data={data} key={index} />
				)}
			</div>
			{!props.lang 
				? 
				<h2>In addition to these, I have been working on a variety of private projects include a startup project.</h2>
				: 
				<h2>이외에도 저는 스타트업 프로젝트를 포함한 다양한 비공개 프로젝트를 진행해왔습니다.</h2>
			}
		</div>
	);
}

export default Portfolio;