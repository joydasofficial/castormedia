import React from 'react';
import './home_style.css'
import Portfoilo from '../Portfolio/Portfolio';
import AboutCommon from '../AboutCommon';
import ServicesCommon from '../ServicesCommon';
import { NavLink } from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';

import Cta from '../CTA/Cta';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className='hero_section'>
                <div className='hero_info'>
                    <h1>Grow your business with  <span className='cname'>Castor Media Labs</span></h1>
                   
                    <p>we provide best in industry creative and design solutions</p>
                    <NavLink to='/services'><button className='getStarted' >Get Started</button></NavLink>
                </div>
                <div className='hero_img'>
                <lottie-player className='animation' src="https://assets9.lottiefiles.com/packages/lf20_ghs9bkkc.json" speed="1" loop autoplay></lottie-player>
                </div>
            </div>

            <AboutCommon/>            
            <ServicesCommon />
            <Portfoilo />
            <Cta />
            <Testimonials />
        </>
    );
};

export default Home;