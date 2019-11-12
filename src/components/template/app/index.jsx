import React, { useState } from 'react';

import Wrapper from 'react-div-100vh'

import Greeting from '../../frame/greeting';
import Aboutme from '../../frame/aboutme';
import Skill from '../../frame/skill';
import Portfolio from '../../frame/portfolio';
import Contact from '../../frame/contact';

import './index.css';

const App = () => {
	const [primary, setPrimary] = useState(0);
	const [secondary, setSecondary] = useState(0);

	if(primary === 0) {
		setPrimary('#1976D2');
		setSecondary('#FFFFFF');
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
				}
			`}</style>
			<div className="app">
				<Greeting />
				<Aboutme />
				<Skill />
				<Portfolio />
				<Contact />
			</div> 
		</Wrapper>
	);
}

export default App;
