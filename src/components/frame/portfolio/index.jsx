import React from 'react';

import Card from '../../function/card';

import './index.css';

const Portfolio = (props) => {
	const array = [
		{
			isPersonal: 1,
			isProgress: 0,
			title: 'Aidan\'s',
			descriptionEN: 'This project is the site you are currently logged on to. It is a simple responsive Signle Page Application(SPA) using React. This application is developed to introduce myself. It is a front-end project using only pure React. The simple and fast development period is an advantage.',
			descriptionKR: '이 프로젝트는 현재 접속하고 계신 사이트입니다. React를 활용한 반응형 단일 페이지 어플리케이션입니다. 이 사이트는 제 자신을 소개하기 위한 용도로 개발되었습니다. React만을 활용한 프론트엔드 프로젝트로써 심플하고 빠른 개발기간이 장점입니다.',
			language: ['JAVASCRIPT', 'REACT', 'HTML5', 'CSS3'],
			docs: 'https://aidandlim.github.io/portfolio_aidan/',
			code: 'https://github.com/aidandlim/portfolio_aidan',
			demo: 'https://portal.aidandlim.com/',
			lang: props.lang
		},
		{
			isPersonal: 1,
			isProgress: 0,
			title: '#Camagru',
			descriptionEN: 'This project is a Social Network Service(SNS) for sharing pictures like Instagram. It is also a responsive Single Page Application(SPA). The front end was developed using React and Redux, while the back end was developed using the Java framework Springboot. A key feature of the project is the ability to take pictures using cameras, upload local items, and apply filters or stickers to share them.',
			descriptionKR: '이 프로젝트는 인스타그램처럼 사진 공유 소셜 네트워크 서비스입니다. 이 또한 반응형 단일 페이지 어플리케이션입니다. 프론트엔드는 React와 Redux를 활용하였으며, 백엔드는 Java 프레임워크인 Springboot로 개발하였습니다. 이 프로젝트의 핵심기능은 카메라를 활용하거나 로컬의 사진을 업로드하여 필터 혹은 스티커를 적용하고 공유하는 것입니다.',
			language: ['JAVASCRIPT', 'REACT', 'REDUX', 'JAVA', 'SPRINGBOOT', 'MYSQL', 'MYBATIS', 'HTML5', 'CSS3'],
			docs: 'https://aidandlim.github.io/portfolio_camagru/',
			code: 'https://github.com/aidandlim/portfolio_camagru/',
			demo: 'https://camagru.aidandlim.com/',
			lang: props.lang
		},
		{
			isPersonal: 0,
			isProgress: 0,
			title: 'M@TCH@',
			descriptionEN: 'Similarly, we are using React for front-end development, and we are developing the back-end with Express. Like Tinder, we will match the date with location-based and implement chat feature. In addition, we are actively utilizing sign-in features through social networks as well as Google Maps APIs.',
			descriptionKR: '역시 프론트엔드 개발은 React로 진행하고 있으며, 백엔드는 Express로 개발하고 있습니다. Tinder와 같이 데이팅 상대를 위치기반으로 매칭하고 채팅 기능을 제공하는 어플리케이션이 될 것입니다. 또한, 소셜네트워크를 활용한 로그인 기능과 구글 맵 API를 적극 활용 중에 있습니다.',
			language: ['JAVASCRIPT', 'REACT', 'REDUX', 'NODE', 'EXPRESS', 'MYSQL', 'HTML5', 'CSS3'],
			docs: 'https://aidandlim.github.io/portfolio_matcha/',
			code: 'https://github.com/aidandlim/portfolio_matcha/',
			demo: 'https://matcha.aidandlim.com/',
			lang: props.lang
		},
		{
			isPersonal: 0,
			isProgress: 0,
			title: 'HyperTube',
			descriptionEN: 'A responsive Single Page Application(SPA) for streaming video with torrent using React, Node & Java. We provides feed that uses filter such as sorting by popularity, rating or genre, search that is by movie title, casting, producer, and movie detail that is from several API. Also, it offers live streaming movie from torrent protocol.',
			descriptionKR: '반응형 웹프로젝트로써 토렌트로부터 비디오를 다운로드 받으며 동시에 스트리밍 하는 어플리케이션입니다. 인기도, 평점, 장르 등의 필터링을 통한 피드와 영화 제목, 연기자 및 제작자 등을 통한 검색, 그리고 API 활용을 통한 영화 정보를 제공합니다. 또한, 토렌트 프로토콜을 활용하여 다운로드와 동시에 영화를 시청할 수 있습니다.',
			language: ['JAVASCRIPT', 'REACT', 'REDUX', 'JAVA', 'SPRING-BOOT', 'NODE', 'EXPRESS', 'MYSQL', 'HTML5', 'CSS3'],
			docs: 'https://aidandlim.github.io/portfolio_hypertube/',
			code: 'https://github.com/aidandlim/portfolio_hypertube/',
			demo: '',
			lang: props.lang
		},
		{
			isPersonal: 1,
			isProgress: 0,
			title: 'Repetitive',
			descriptionEN: 'A responsive Single Page Application(SPA) using React & Node for learning english speaking skills. It provides simple sign in & up features, adding language pattern & listing, and drill for repetitive exercise.',
			descriptionKR: '모바일에 최적화된 어플리케이션으로써 영어 스피킹 공부 활용을 위한 웹 프로그램입니다. 손쉽게 회원가입 및 로그인을 할 수 있으며, 다양한 패턴과 동사구, 부사구 등을 업데이트할 수 있습니다. 나아가 반복적인 연습을 위한 드릴 기능을 제공합니다.',
			language: ['JAVASCRIPT', 'REACT', 'NODE', 'EXPRESS', 'HTML5', 'CSS3'],
			docs: 'https://aidandlim.github.io/portfolio_repetitive/',
			code: 'https://github.com/aidandlim/portfolio_repetitive/',
			demo: '',
			lang: props.lang
		},
		{
			isPersonal: 1,
			isProgress: 0,
			title: 'Overview of COVID-19',
			descriptionEN: 'A responsive Single Page Application(SPA) using React for sharing information about COVID-19. It provides various real-time data about Coronavirus from public APIs which is based on government data. You can check list by countries or date but also statistics that includes pie & line graphs.',
			descriptionKR: '모바일과 웹 모두 활용가능한 반응형 웹프로젝트로써 현재 이슈가 되고 있는 코로나바이러스 분석 어플리케이션입니다. 이 프로젝트는 정부 발표자료를 기반으로한 실시간 공공 API로부터 데이터를 수집하여 국가별 / 기간별 리스팅, 다양한 그래핑 등의 방식으로 분석한 데아터를 제공합니다. 한 눈에 바이러스의 전세계 및 각국의 감염 상황 등을 확인할 수 있도록 제작하였습니다.',
			language: ['JAVASCRIPT', 'REACT', 'HTML5', 'CSS3'],
			docs: 'https://github.com/aidandlim/portfolio_coronavirus',
			code: 'https://github.com/aidandlim/portfolio_coronavirus',
			demo: 'https://covid19.aidandlim.com/',
			lang: props.lang
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