import React, { Component } from 'react';

import Logo from './Logo';

class landing extends Component{
    render() {
        return(
            <div className='landingPage'>
				<Logo/>
		        <div className='welcomeContainer'>
			        <h1 className='welcomeNote'>Welcome</h1>
			        <h6 className='chimFolio'>to <span className='yellow'>ChimFolio</span>. My personnel Museum</h6>
		        </div>
	        </div>
        )
    }
}
   

export default landing;