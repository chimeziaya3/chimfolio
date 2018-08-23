import React, { Component } from 'react';


class Skills extends Component{
    render() {
        return(
            <section className='skillsPage'>
				<h1 className="skillsTitle"> My Expertise</h1>
				<h4 className='skillsPhrase'> I'm one who wears many hats</h4>
		        <div className='skillsTypeContainer'>
					
					<div className='skillsContainer'>
						<section className='skillBox'>
							<i className="fa fa-5x fa-paint-brush" aria-hidden="true"></i>
							<h3 className='skill'>Design</h3>
							<p className='skillText'>I carefully sketch and wireframe interfaces focusing on content structure. Then I am able to transform ideas into well thoughtout design specs.</p>
						</section>
						<section className='skillBox'>
							<i className="fa fa-5x fa-desktop" aria-hidden="true"></i>
							<h3 className='skill'>Front-End</h3>
							<p className='skillText'>I design visual interfaces with HTML5, CSS3, and javascript. I can also use frameworks such as bootstrap, React.js, and Ruby</p>
						</section>
						<section className='skillBox'>
							<i className="fa fa-5x fa-code" aria-hidden="true"></i>
							<h3 className='skill'>Back-End</h3>
							<p className='skillText'>I create server-side applications with the use of API, Node.js, Express.js, Rails, and Postgress.</p>
						</section>
					</div>
		        </div>
	        </section>
        )
    }
}

export default Skills;