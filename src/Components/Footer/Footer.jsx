import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer_main'>
                <div className='inner_footer'>
                    <div className='flogo'>
                        {/* <img src='' alt='logo' /> */}
                        <h2><Link to='/'>Castor Media</Link></h2>
                    </div>
                    <div className='flinks'>
                        <Link to='/about'>About</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/portfolio'>Portfolio</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <div className='fsocial'>
                        <a href='#'><FaFacebookF size='16px' /></a>
                        <a href='#'><GrInstagram size='16px' /></a>
                        <a href='#'><FaLinkedinIn size='16px' /></a>
                    </div>
                </div>
                <h3>&#169; Copyright 2021 - Castor Media Labs</h3>
            </div>
        </>
    );
};

export default Footer;