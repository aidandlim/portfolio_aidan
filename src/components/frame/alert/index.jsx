import React from 'react';

import './index.css';

const Alert = (props) => {
	return (
		<div id='alert' className='alert'>
			{!props.lang 
				? 
				'I am sorry it is under construction! Please send Email or check out Github & Linkedin on top-right side :)'
				: 
				'죄송합니다. 이 기능은 준비 중입니다. 우측 상단의 메일, 깃허브, 링크드인 링크를 확인하여 주십시오!'
			}
		</div>
	);
}

export default Alert;