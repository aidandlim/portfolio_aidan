import React, { useState } from 'react';

import Wrapper from 'react-div-100vh'

import Greeting from '../../frame/greeting';
import Profile from '../../frame/profile';
import About from '../../frame/about';
import Skill from '../../frame/skill';
import Portfolio from '../../frame/portfolio';
import Contact from '../../frame/contact';

import './index.css';

const App = () => {
	const [primary, setPrimary] = useState(0);
	const [secondary, setSecondary] = useState(0);
	const [tertiary, setTertiary] = useState(0);

	if(primary === 0) {
		setPrimary('#1976D2');
		setSecondary('#2c3e50');
		setTertiary('#EEEEEE');
	}

	return (
		<Wrapper>
			<style>{`
				:root {
					--primary-100: ${primary + 'ff'};
					--primary-90: ${primary + 'e6'};
					--primary-80: ${primary + 'cc'};
					--primary-70: ${primary + 'b3'};
					--primary-60: ${primary + '99'};
					--primary-50: ${primary + '80'};
					--primary-40: ${primary + '66'};
					--primary-30: ${primary + '4d'};
					--primary-20: ${primary + '33'};
					--primary-10: ${primary + '1a'};
					--secondary-100: ${secondary + 'ff'};
					--secondary-90: ${secondary + 'e6'};
					--secondary-80: ${secondary + 'cc'};
					--secondary-70: ${secondary + 'b3'};
					--secondary-60: ${secondary + '99'};
					--secondary-50: ${secondary + '80'};
					--secondary-40: ${secondary + '66'};
					--secondary-30: ${secondary + '4d'};
					--secondary-20: ${secondary + '33'};
					--secondary-10: ${secondary + '1a'};
					--tertiary-100: ${tertiary + 'ff'};
					--tertiary-90: ${tertiary + 'e6'};
					--tertiary-80: ${tertiary + 'cc'};
					--tertiary-70: ${tertiary + 'b3'};
					--tertiary-60: ${tertiary + '99'};
					--tertiary-50: ${tertiary + '80'};
					--tertiary-40: ${tertiary + '66'};
					--tertiary-30: ${tertiary + '4d'};
					--tertiary-20: ${tertiary + '33'};
					--tertiary-10: ${tertiary + '1a'};
				}
			`}</style>
			<div className="app">
				<Greeting />
				<Profile />
				<About />
				<Skill />
				<Portfolio />
				<Contact />
			</div> 
		</Wrapper>
	);
}

export default App;
