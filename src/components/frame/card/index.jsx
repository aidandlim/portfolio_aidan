import React from 'react';

import { FaCode, FaBookmark, FaDesktop } from "react-icons/fa";

import './index.css';

const Card = (props) => {
	return (
		<div className='card'>
			<img src={props.data.preview} alt='portfolio' />
			<div className='card-detail'>
				<div className='card-detail-title'>{props.data.title}</div>
				<div className='card-detail-description'>{props.data.description}</div>
				<FaCode className='card-detail-icon'/>
				<FaBookmark className='card-detail-icon'/>
				<FaDesktop className='card-detail-icon'/>
			</div>
		</div>
	);
}

export default Card;