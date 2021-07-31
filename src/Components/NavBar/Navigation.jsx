import React from 'react';
import './nav.css'
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';


const NavMenu = () => {

    return (
        <>
        <nav className='desktop_navigation'>
            <div className='nav_container'>
                <div className="logo">
                    {/* <img src={''} alt="Castor Media Labs" /> */}
                    <h2><NavLink to='/'>Castor Media</NavLink></h2>
                </div>
                <NavLinks />
            </div>          
        </nav>
        </>
    );
};

export default NavMenu;
