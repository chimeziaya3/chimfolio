import React, { Component } from 'react';
import Slider from 'react-slick';
import iphoneVoicepad from '../assets/iphoneMyVoicepad.png';
import iphoneTunelist from '../assets/iphoneTunelist.png';
import iphoneDFF from '../assets/iphoneDFF.png';


class Carousel extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            centerMode: true,
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    render(){
        return(
            <div className='carouselContainer'>
                <h1 className='project-title'>My Work</h1>
                <Slider {...this.settings} className='carousel'>
                    <div><div className='slide slide-1'>
                        <img src={iphoneVoicepad}/>
                        <section className='workSlide'>
                            <h3 className='title'>My VoicePad</h3>
                            <h6 className='subTitle'>ux/ui design, react, rails</h6>
                            <p className='projectDescription'> My VoicePad is a mobile app that is able to write down notes using speech recognition and is about to save
                            them.
                            </p>
                    
                        </section>
                    </div></div>
                    <div><div className='slide'>
                        <img src={iphoneTunelist}/>
                        <section className='workSlide'>
                            <h3 className='title'>Tunelist</h3>
                            <h6 className='subTitle'>ux/ui design, react, express</h6>
                            <p className='projectDescription'> Tunelist is a mobile app that allows a user to create their own video music playlist
                            by uploading a youtube link.
                            </p>
                        </section>
                    </div></div>
                    <div><div className='slide'>
                        <img src={iphoneDFF}/>
                        <section className='workSlide'>
                            <h3 className='title'>Dig for Fortune</h3>
                            <h6 className='subTitle'>ux/ui design, HTML, CSS, Javascript</h6>
                            <p className='projectDescription'> Dig for Fortune is a game where the goal is to move your character to dig for the gold
                            while avoiding the hidden traps.
                            </p>
                        </section>
                    </div></div>
                </Slider>
            </div>
        
        )
    }
}

export default Carousel;