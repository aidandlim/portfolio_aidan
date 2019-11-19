import React from 'react';

import './index.css';

const Project = (props) => {
	return (
		<div className='project'>
			<div className='project-bg'></div>
			<div className='project-container'>
				<h1>What Kind Of Projects Can I Participate?</h1>
				<h2>I can work on any projects in entire area of web development. For example ...</h2>
				<div className='project-set-container'>
					<div className='project-set'>
						<div className='project-set-title'>PERSONAL & BUSINESS</div>
						<div className='project-set-description'>
							I currently have 4 windows open up… and I don’t know why. A glittering gem is not enough.<br />
							Check back tomorrow; I will see if the book has arrived.
						</div>
					</div>
					<div className='project-set'>
						<div className='project-set-title'>E-COMMERCE PLATFORM</div>
						<div className='project-set-description'>
							When I was little I had a car door slammed shut on my hand. I still remember it quite vividly.<br />
							I am counting my calories, yet I really want dessert.
						</div>
					</div>
				</div>
				<div className='project-set-container'>
					<div className='project-set'>
						<div className='project-set-title'>SOCIAL NETWORK SERVICE</div>
						<div className='project-set-description'>
							I currently have 4 windows open up… and I don’t know why. A glittering gem is not enough.<br />
							Check back tomorrow; I will see if the book has arrived.
						</div>
					</div>
					<div className='project-set'>
						<div className='project-set-title'>MANAGEMENT APPLICATION</div>
						<div className='project-set-description'>
							When I was little I had a car door slammed shut on my hand. I still remember it quite vividly.<br />
							I am counting my calories, yet I really want dessert.
						</div>
					</div>
				</div>
				<div className='project-set-container'>
					<div className='project-set'>
						<div className='project-set-title'>TOOL WITH API</div>
						<div className='project-set-description'>
							I currently have 4 windows open up… and I don’t know why. A glittering gem is not enough.<br />
							Check back tomorrow; I will see if the book has arrived.
						</div>
					</div>
					<div className='project-set'>
						<div className='project-set-title'>AND SO ON</div>
						<div className='project-set-description'>
							When I was little I had a car door slammed shut on my hand. I still remember it quite vividly.<br />
							I am counting my calories, yet I really want dessert.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;