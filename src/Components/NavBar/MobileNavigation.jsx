import React, { useState } from 'react';
import './nav.css'
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const closeMobileMenu = () => setOpen(false);

    return (
        <>
            <nav className='mobile_navigation'>
                <div className='nav_container'>
                    <div className="logo">
                        {/* <img src={''} alt="Castor Media Labs" /> */}
                        <h2><NavLink to='/'>Castor Media</NavLink></h2>
                    </div>
                    <div className='hamburger'>
                        <div className={open ? 'change' : 'container'} onClick={() => setOpen(!open)}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                    {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
                </div>
            </nav>
        </>
    );
};

export default MobileNavigation;
