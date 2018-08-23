import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

class Navbar extends Component{
    render() {
        return(
            <nav className='navbar'>
		        
		        <div className='navContainer'>
			        <div className='aboutFlex'>
				        <h1 className='about sliding-middle-out'>About</h1>
			        </div>

			        <div className='skillsFlex' onClick={() => {scrollToComponent(this.Skills, { offset: 0, align: 'middle', duration: 1500})}}>
				        <h1 className='skills sliding-middle-out' >Skills</h1>
			        </div>

			        <div className='workFlex'>
				        <h1 className='work sliding-middle-out'>Work</h1>
			        </div>
		        </div>
                    {//<h1 className='contact'>Contact</h1>
                    }
	        </nav>
        )
    }
}

export default Navbar;