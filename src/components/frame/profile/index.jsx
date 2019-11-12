import React from 'react';

import Picture from '../../../resources/profile.png';

import './index.css';

const Profile = () => {
	return (
		<div className='profile' style={{
			backgroundImage: 'url(\'' + Picture + '\')'
		}}>
		</div>
	);
}

export default Profile;