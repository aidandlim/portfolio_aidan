import React from 'react';

import Language from '../../function/language';

import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import { DiDatabase, DiGithubBadge, DiLinux, DiCode } from 'react-icons/di';

import './index.css';

const Skill = (props) => {
	const frontend = [
		{
			isInterested: 1,
			title: 'Javascript',
			icon: <FaJsSquare className='language-icon'/>,
			experties: [1, 1, 1, 1, 1]
		},
		{
			isInterested: 1,
			title: 'React.js',
			icon: <FaReact className='language-icon'/>,
			experties: [1, 1, 1, 1]
		},
		{
			isInterested: 1,
			title: 'Redux.js',
			icon: <FaReact className='language-icon'/>,
			experties: [1, 1, 1, 1]
		},
		{
			isInterested: 0,
			title: 'HTML5',
			icon: <FaHtml5 className='language-icon'/>,
			experties: [1, 1, 1, 1, 1]
		},
		{
			isInterested: 0,
			title: 'CSS3',
			icon: <FaCss3Alt className='language-icon'/>,
			experties: [1, 1, 1, 1, 1]
		}
	];

	const backend = [
		{
			isInterested: 1,
			title: 'Java',
			icon: <FaJava className='language-icon'/>,
			experties: [1, 1, 1, 1, 1]
		},
		{
			isInterested: 1,
			title: 'Spring Boot',
			icon: <FaJava className='language-icon'/>,
			experties: [1, 1, 1, 1]
		},
		{
			isInterested: 1,
			title: 'Node.js',
			icon: <FaNodeJs className='language-icon'/>,
			experties: [1, 1, 1, 1, 1]
		},
		{
			isInterested: 1,
			title: 'Express.js',
			icon: <FaNodeJs className='language-icon'/>,
			experties: [1, 1, 1, 1]
		},
		{
			isInterested: 0,
			title: 'JSP',
			icon: <FaJava className='language-icon'/>,
			experties: [1, 1, 1, 1, 1]
		},
	];

	const database = [
		{
			isInterested: 1,
			title: 'Oracle',
			icon: <DiDatabase className='language-icon'/>,
			experties: [1, 1, 1, 1, 1]
		},
		{
			isInterested: 1,
			title: 'MySQL',
			icon: <DiDatabase className='language-icon'/>,
			experties: [1, 1, 1, 1, 1]
		},
		{
			isInterested: 1,
			title: 'MongoDB',
			icon: <DiDatabase className='language-icon'/>,
			experties: [1, 1, 1, 1]
		}
	];

	const etc = [
		{
			isInterested: 1,
			title: 'Git',
			icon: <DiGithubBadge className='language-icon'/>,
			experties: [1, 1, 1, 1, 1]
		},
		{
			isInterested: 1,
			title: 'Linux',
			icon: <DiLinux className='language-icon'/>,
			experties: [1, 1, 1, 1]
		},
		{
			isInterested: 1,
			title: 'AWS',
			icon: <FaAws className='language-icon'/>,
			experties: [1, 1, 1, 1]
		},
		{
			isInterested: 1,
			title: 'Docker',
			icon: <FaDocker className='language-icon'/>,
			experties: [1, 1, 1]
		},
		{
			isInterested: 0,
			title: 'C / C++',
			icon: <DiCode className='language-icon'/>,
			experties: [1, 1, 1, 1]
		}
	];

	return (
		<div className='skill'>
			{!props.lang 
				? 
				<h1>What Can I Do?</h1>
				: 
				<h1>활용 프로그래밍 언어</h1>
			}
			{!props.lang 
				? 
				<h2>I am really interested in learning programming language in various area.</h2>
				: 
				<h2>저는 다양한 분야의 프로그래밍 언어를 배우는 것에 흥미를 갖고 있습니다.</h2>
			}
			<div className='skill-set'>
				<div className='skill-set-title'>Front-end</div>
				<div className='skill-set-body'>
					{frontend.map((element, index) =>
						<Language data={element} key={index} />
					)}
				</div>
			</div>
			<div className='skill-set'>
				<div className='skill-set-title'>Back-end</div>
				<div className='skill-set-body'>
					{backend.map((element, index) =>
						<Language data={element} key={index} />
					)}
				</div>
			</div>
			<div className='skill-set'>
				<div className='skill-set-title'>Database</div>
				<div className='skill-set-body'>
					{database.map((element, index) =>
						<Language data={element} key={index} />
					)}
				</div>
			</div>
			<div className='skill-set'>
				<div className='skill-set-title'>Etc</div>
				<div className='skill-set-body'>
					{etc.map((element, index) =>
						<Language data={element} key={index} />
					)}
				</div>
			</div>
		</div>
	);
}

export default Skill;