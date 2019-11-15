import React from 'react';

import { confirmAlert } from 'react-confirm-alert';

import './index.css';

const About = (props) => {

	const _handleHyperlinkToCollege = () => {
		window.open('https://www.deanza.edu', '_blank');
	}

	const _handleHyperlinkToBootcamp = () => {
		window.open('https://www.42.us.org', '_blank');
	}

	const _handleDetail = () => {
		confirmAlert({
			message: !props.lang ? 'I\'m sorry that this feature is working in progress!' : '이 기능은 준비 중입니다.',
			buttons: [
				{
					label: 'Okay'
				}
			]
		});
	}

	return (
		<div className='about'>
			{!props.lang 
				? 
				<h1>Hello, I'm Aidan. It's pleasure to meet you.</h1>
				: 
				<h1>안녕하세요. 저는 임동섭입니다. 만나서 반갑습니다.</h1>
			}
			{!props.lang 
				? 
				<div className='about-detail'>
					If I were to describe myself in one sentence, I would say <b>"A web & app developer who loves traveling"</b>.<br />
					-<br />
					I have worked as a <b>full-stack developer</b> for 3 years with varieties of languages such as <b>Java</b>, <b>Javascript</b> and so on.<br />
					I am currently studying computer science at <font className='about-highlight' onClick={_handleHyperlinkToCollege}>#DeAnzaCollege</font> and bootcamp named <font className='about-highlight' onClick={_handleHyperlinkToBootcamp}>#42SiliconValley.</font><br />
					Main part I am focusing on is Front-end web development with <b>React.js</b> and <b>Node.js</b> based on <b>Javascript</b>. 
				</div>
				: 
				<div className='about-detail'>
					제 자신을 한 문장으로 표현하라면, 저는 <b>"여행을 사랑하는 웹 & 앱 개발자"라고 표현할 것입니다</b>.<br />
					-<br />
					저는 <b>자바</b>와 <b>자바스크립트</b>를 주로 활용하는 <b>풀스택 개발자</b>로써 3년 반동안 일했습니다.<br />
					현재는 <font className='about-highlight' onClick={_handleHyperlinkToCollege}>#DeAnzaCollege</font>와 부트캠프 <font className='about-highlight' onClick={_handleHyperlinkToBootcamp}>#42SiliconValley</font>에서 컴퓨터 공학을 공부 중입니다.<br />
					지금은 프론트엔드 개발자로써 <b>자바스크립트</b>를 기반으로 하는 <b>리액트</b>와 <b>노드</b>에 집중하고 있습니다.
				</div>
			}
			{!props.lang 
				? 
				<div className='about-button' onClick={ () => _handleDetail() }>Learn More About Me</div>
				: 
				<div className='about-button' onClick={ () => _handleDetail() }>자세히 살펴보기</div>
			}
		</div>
	);
}

export default About;