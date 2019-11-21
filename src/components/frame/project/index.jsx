import React from 'react';

import './index.css';

const Project = (props) => {
	return (
		<div className='project'>
			<div className='project-bg'></div>
			<div className='project-container'>
				{!props.lang 
					? 
					<h1>What Kind Of Projects Can I Participate?</h1>
					: 
					<h1>개발 가능 프로젝트</h1>
				}
				{!props.lang 
					? 
					<h2>I can work on any projects in the entire area of web development. For example ...</h2>
					: 
					<h2>저는 웹 분야의 다양한 프로젝트에 참여할 수 있습니다. 예를 들면...</h2>
				}
				<div className='project-set-container'>
					<div className='project-set'>
						<div className='project-set-title'>PERSONAL & BUSINESS</div>
						<div className='project-set-description'>
							{!props.lang 
								? 
								'Develop various websites from personal blogs to business websites. The design, features, and server environment are fully customized to provide high satisfaction.'
								: 
								'개인 블로그에서 비즈니스 웹사이트에 이르기까지 다양한 웹사이트를 개발합니다. 디자인, 기능, 서버 환경이 완벽하게 커스터마이징되어 높은 만족도를 제공할 수 있습니다.'
							}
						</div>
					</div>
					<div className='project-set'>
						<div className='project-set-title'>E-COMMERCE PLATFORM</div>
						<div className='project-set-description'>
							{!props.lang 
								? 
								'Develop small commerce sites, large online trading platforms, etc. It can be implemented various features such as product categorization, shopping cart, and checkout.'
								: 
								'소규모 커머스 사이트는 물론 대형 온라인 거래 플랫폼 등을 개발합니다. 기본적인 상품분류, 쇼핑카트, 체크아웃은 물론 대시보드 형태의 관리 페이지 등 다양한 기능을 구현할 수 있습니다.'
							}
						</div>
					</div>
				</div>
				<div className='project-set-container'>
					<div className='project-set'>
						<div className='project-set-title'>SOCIAL NETWORK SERVICE</div>
						<div className='project-set-description'>
							{!props.lang 
								? 
								'Develop social network services such as Facebook, Twitter, and Instagram and maximize features by utilizing GPS or other APIs. It is the part that I am most interested in personally.'
								: 
								'페이스북이나 트위터, 인스타그램과 같은 소셜 네트워크 서비스를 개발합니다. GPS 혹은 기타 API를 활용하여 기능을 최대화할 수 있습니다. 개인적으로 가장 흥미를 느끼는 부분입니다.'
							}
						</div>
					</div>
					<div className='project-set'>
						<div className='project-set-title'>MANAGEMENT APPLICATION</div>
						<div className='project-set-description'>
							{!props.lang 
								? 
								'Develop business management programs suitable for small businesses such as production management and customer management.'
								: 
								'생산관리, 고객관리 등 중소기업에 적합한 사업관리 프로그램을 개발합니다. 사업환경에 맞게 최적화된 커스터마이징을 통해 성과를 최대화합니다.'
							}
						</div>
					</div>
				</div>
				<div className='project-set-container'>
					<div className='project-set'>
						<div className='project-set-title'>TOOL WITH API</div>
						<div className='project-set-description'>
							{!props.lang 
								? 
								'Develop using public or specific APIs such as public data, Google Maps, and SNS. In addition, it can provide capabilities such as data analysis and graphing.'
								: 
								'공공데이터, 구글 맵, SNS 등 공공 혹은 특정 API를 활용하여 다양한 웹 어플리케이션을 개발합니다. 추가적으로 데이터 분석, 그래핑 등의 기능도 제공할 수 있습니다.'
							}
						</div>
					</div>
					<div className='project-set'>
						<div className='project-set-title'>AND SO ON</div>
						<div className='project-set-description'>
							{!props.lang 
								? 
								'In addition to the items mentioned earlier, various ideas are developed into reality.'
								: 
								'앞서 거론한 아이템 이외에도 기타 다양한 아이디어를 현실로 개발합니다.'
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;