import React from 'react';

import { FaCode, FaBookmark, FaDesktop } from "react-icons/fa";

import './index.css';

const Card = (props) => {
	return (
		<div className='card'>
			<img src={props.data.preview} alt='portfolio' />
			<div className='card-detail'>
				<div className='card-detail-title'>{props.data.title}</div>
				<div className='card-detail-description'>{props.data.description1}</div>
				<div className='card-detail-description'>{props.data.description2}</div>
				<div className='card-detail-link'>
					<FaBookmark className='card-detail-link-icon'/>
					<div className='card-detail-link-title'>Doc</div>
				</div>
				<div className='card-detail-link'>
					<FaCode className='card-detail-link-icon'/>
					<div className='card-detail-link-title'>Code</div>
				</div>
				<div className='card-detail-link'>
					<FaDesktop className='card-detail-link-icon'/>
					<div className='card-detail-link-title'>Demo</div>
				</div>
			</div>
		</div>
	);
}

export default Card;