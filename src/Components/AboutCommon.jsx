import React from 'react';
import './About/about_style.css';

const AboutCommon = () => {
    return (
        <>
            <div className='heading'>
                <h2>About Us</h2>
                <p>know more about us</p>
            </div>
            <div className='about_section'>
                <div className='about_img'>
                    <lottie-player className='animation_about' src="https://assets8.lottiefiles.com/packages/lf20_01jwptn4.json" speed="1" loop autoplay></lottie-player>
                </div>
                <div className='about_info'>
                    <p>Our team can undertake any design challange, their efforts and creativity is the to key to our success. Our team can undertake any design challange, their efforts and creativity is the to key to our success.</p>
                    <button>Find out more</button>
                </div>

            </div>
        </>
    );
};

export default AboutCommon;