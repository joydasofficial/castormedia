import React from 'react';
import { Link } from 'react-router-dom';
import './cta.css'

const Cta = () => {
    return (
        <div className='ctaContainer'>
            <div className='innerInfo'>
                <h2>Have a project for us?</h2>
                <p>Get in touch with us today and get 50% discount on your new project.</p>
                <Link to='/contact'><button>Contact Us</button></Link>
            </div>
            <div className='innerImg'>
                <img src='' alt='cta' />
            </div>
        </div>
    )
}

export default Cta;
