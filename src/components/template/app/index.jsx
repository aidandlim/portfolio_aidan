import React, { useState, useEffect } from 'react';

import cookie from 'react-cookies'

import Wrapper from 'react-div-100vh'

import Greeting from '../../frame/greeting';
import Profile from '../../frame/profile';
import Alert from '../../frame/alert';
import About from '../../frame/about';
import Skill from '../../frame/skill';
import Portfolio from '../../frame/portfolio';
import Project from '../../frame/project';
import Contact from '../../frame/contact';

import './index.css';

const App = () => {
	const [lang, setLang] = useState(0);

	useEffect(() => {
		setLang(cookie.load('lang') !== undefined ? parseInt(cookie.load('lang')) : 0);
	}, []);

	const _handleLang = (value) => {
		cookie.save('lang', value, { path: '/' });
		setLang(value);
	}

	return (
		<Wrapper>
			<div className="app">
				<Greeting lang={lang} setLang={_handleLang} />
				<Profile lang={lang} />
				<About lang={lang} />
				<Skill lang={lang} />
				<Portfolio lang={lang} />
				<Project lang={lang} />
				<Contact lang={lang} />
				<Alert lang={lang} />
			</div> 
		</Wrapper>
	);
}

export default App;
