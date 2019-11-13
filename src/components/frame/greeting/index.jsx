import React from 'react';

import './index.css';

const Greeting = (props) => {
	return (
		<div className='greeting'>
			<div className='greeting-setting-container'>
				<div className={props.lang ? 'greeting-setting' : 'greeting-setting greeting-setting-active'} onClick={ () => props.setLang(0) }>EN</div>
				<div className={!props.lang ? 'greeting-setting' : 'greeting-setting greeting-setting-active'} onClick={ () => props.setLang(1) }>KR</div>
			</div>
			<div className='greeting-setting-container'>
				<div className={props.isDarkMode ? 'greeting-setting' : 'greeting-setting greeting-setting-active'} onClick={ () => props.setDarkMode(0) }>Bright</div>
				<div className={!props.isDarkMode ? 'greeting-setting' : 'greeting-setting greeting-setting-active'} onClick={ () => props.setDarkMode(1) }>Dark</div>
			</div>
			{!props.lang 
				? 
				<h1>Looking For a Full-Stack Developer?</h1>
				: 
				<h1>개발자를 찾고 계신가요?</h1>
			}
			{!props.lang 
				? 
				<h2>I Enjoy Building Everything from Small Company Sites to Huge Web Apps.</h2>
				: 
				<h2>저는 작은 규모의 기업 홈페이지부터 규모가 큰 어플리케이션까지 모든 코딩을 즐기는 개발자입니다.</h2>
			}
		</div>
	);
}

export default Greeting;