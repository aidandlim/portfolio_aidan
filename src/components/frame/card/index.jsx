import React from 'react';

import { FaUser, FaUserFriends, FaCheck, FaCircleNotch } from 'react-icons/fa';

import './index.css';

const Card = (props) => {
	return (
		<div className={props.data.isProgress ? 'card card-progress' : 'card'} >
			{props.data.preview !== '' ? <img src={props.data.preview} alt='portfolio' /> : <div class='workinprogress'>Work in Progress...</div> }
			<div className='card-detail'>
				{ props.data.isPersonal ? <FaUser className='card-detail-user-icon' /> : <FaUserFriends className='card-detail-user-icon' /> }
				{ props.data.isProgress ? <FaCircleNotch className='card-detail-progress-icon' /> : <FaCheck className='card-detail-progress-icon' /> }
				<div className='card-detail-title'>{props.data.title}</div>
				<div className='card-detail-description'>{props.data.description1}</div>
				<div className='card-detail-description'>{props.data.description2}</div>
				<div className='card-detail-link-container'>
					{props.data.page !== '' ? <div className='card-detail-link' onClick={ () => window.open(props.data.page, '_black') }>Document</div> : ''}
					{props.data.code !== '' ? <div className='card-detail-link' onClick={ () => window.open(props.data.code, '_black') }>Source Code</div> : ''}
					{props.data.site !== '' ? <div className='card-detail-link' onClick={ () => window.open(props.data.site, '_black') }>Demo Site</div> : ''}
				</div>
			</div>
		</div>
	);
}

export default Card;