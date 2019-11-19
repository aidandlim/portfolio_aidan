import React from 'react';

import Picture from '../../../resources/profile.png';

import './index.css';

const Profile = () => {
	return (
		<div className='profile'>
			<div className='profile-bg'></div>
			<div className='profile-picture' style={{ backgroundImage: 'url(\'' + Picture + '\')' }}></div>
		</div>
	);
}

export default Profile;