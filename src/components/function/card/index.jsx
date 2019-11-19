import React from 'react';

import { FaUser, FaUserFriends, FaCheck, FaCircleNotch } from 'react-icons/fa';

import './index.css';

const Card = (props) => {
	
	return (
		<div className={props.data.isProgress ? 'card card-progress' : 'card'} >
			<div className='card-header'>
				{ props.data.isPersonal ? <FaUser className='card-user-icon' /> : <FaUserFriends className='card-user-icon' /> }
				{ props.data.isProgress ? <FaCircleNotch className='card-progress-icon' /> : <FaCheck className='card-progress-icon' /> }
				<div className='card-title'>{props.data.title}</div>
			</div>
			<div className='card-body'>
				<div className='card-description'>{props.data.descriptionEN}</div>
				{
					props.data.language.map((lang, index) =>
						<div className='card-language' key={index}>#{lang}</div>
				)}
			</div>
			<div className='card-footer'>
				<div className='card-link-container'>
					{props.data.docs !== '' ? <div className='card-link card-link-docs' onClick={ () => window.open(props.data.docs, '_black') }>Document</div> : ''}
					{props.data.code !== '' ? <div className='card-link card-link-code' onClick={ () => window.open(props.data.code, '_black') }>Source Code</div> : ''}
					{props.data.demo !== '' ? <div className='card-link card-link-demo' onClick={ () => window.open(props.data.demo, '_black') }>Demo Site</div> : ''}
				</div>
			</div>
		</div>
	);
}

export default Card;