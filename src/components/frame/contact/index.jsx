import React from 'react';

import { confirmAlert } from 'react-confirm-alert';

import './index.css';

const Contact = (props) => {

	const _handleContact = () => {
		confirmAlert({
			message: !props.lang ? 'Just email me! aidandlim@gmail.com!' : 'aidandlim@gmail.com로 연락 주십시오.',
			buttons: [
				{
					label: 'Okay'
				}
			]
		});
	}

	return (
		<div className='contact'>
			{!props.lang 
				? 
				<h1>Are you interested in working with me? Feel free to ask anything!</h1>
				: 
				<h1>저와 함께 일하고 싶으신가요? 무엇이든 물어보세요!</h1>
			}
			{!props.lang 
				? 
				<div onClick={ () => _handleContact() }>Contact Right Away</div>
				: 
				<div onClick={ () => _handleContact() }>바로 연락하기</div>
			}
			<h2>Handcraft by me &copy; Aidan Lim. 2019.</h2>
		</div>
	);
}

export default Contact;