import React from 'react';

import { FaStar } from 'react-icons/fa';

import './index.css';

const Language = (props) => {
	return (
        <div className={props.data.isInterested ? 'language language-active' : 'language'}>
            {props.data.icon}
            {props.data.title}
            {props.data.experties.map((index) =>
                <FaStar className='language-star' key={Math.floor(Math.random() * 10000) + index} />    
            )}
		</div>
	);
}

export default Language;