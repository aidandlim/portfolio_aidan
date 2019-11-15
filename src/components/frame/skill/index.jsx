import React from 'react';

import './index.css';

const Skill = () => {
	return (
		<div className='skill'>
			<h1>What Can I Do?</h1>
			<h2>I am really interested in learning programming language in various area.</h2>
			<div className='skill-set'>
				<div className='skill-set-title'>Front-end</div>
			</div>
			<div className='skill-set'>
				<div className='skill-set-title'>Back-end</div>
			</div>
			<div className='skill-set'>
				<div className='skill-set-title'>Database</div>
			</div>
			<div className='skill-set'>
				<div className='skill-set-title'>Etc</div>
			</div>
		</div>
	);
}

export default Skill;