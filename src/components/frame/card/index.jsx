import React from 'react';

import './index.css';

const Card = (props) => {
	return (
		<div className='card'>
			<img src={props.value.preview} alt='portfolio' />
			<div className='card-detail'>
			
			</div>
		</div>
	);
}

export default Card;