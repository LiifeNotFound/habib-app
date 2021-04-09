import React from 'react';
import './about.css';

function about() {
	return (
		<div className="about-container">
			<div className="about">
				<h1 className="title">
					Share to world your advetures!
				</h1>
				<br />
				<h4 className="sub-title">
					In this aplication you will be able to:
				</h4>
				<ul>
					<li className="text">
						Post your advetures
					</li>
					<li className="text">
						Follow your best friends
					</li>
					<li className="text">
						Like your friends post
					</li>
					<li className="text">
						Comment anywhere
					</li>
				</ul>
				<h4 className="sub-title">
					More funcionalities are comming soon!
				</h4>
			</div>
			<div className="highlight-image">
				<h1 class="illustration-title">
					SHARE YOUR EMOTIONS
				</h1>
			</div>
		</div>
	);
}

export default about;
