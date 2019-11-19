import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './index.css';

const Greeting = (props) => {

	const _handleLinkToGithub = () => {
		window.open('https://github.com/aidandlim/', '_blank');
	}

	const _handleLinkToLinkedin = () => {
		window.open('https://www.linkedin.com/in/aidan-lim/', '_blank');
	}

	return (
		<div className='greeting'>
			<div className='greeting-container'>
				<div className='greeting-setting-container'>
					<div className={props.lang !== 0 ? 'greeting-setting' : 'greeting-setting greeting-setting-active'} onClick={ () => props.setLang(0) }>EN</div>
					<div className={props.lang !== 1 ? 'greeting-setting' : 'greeting-setting greeting-setting-active'} onClick={ () => props.setLang(1) }>KR</div>
				</div>
				<FaGithub className='greeting-link-icon' onClick={_handleLinkToGithub} />
				<FaLinkedin className='greeting-link-icon' onClick={_handleLinkToLinkedin} />
			</div>
			{!props.lang 
				? 
				<h1>Looking For a Full-Stack Developer?</h1>
				: 
				<h1>개발자를 찾고 계신가요?</h1>
			}
			{!props.lang 
				? 
				<h2>I Enjoy Creating Something New Through the Coding.</h2>
				: 
				<h2>저는 코딩을 통해 새로운 것을 만드는 것을 즐기는 개발자입니다.</h2>
			}
		</div>
	);
}

export default Greeting;