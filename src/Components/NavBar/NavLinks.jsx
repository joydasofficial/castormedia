import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"

const NavLinks = (props) => {

    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };

    return (
        <ul className="nav-links">
            <motion.li
                 initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.05 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink exact activeClassName='active_menu_item' to='/' >Home</NavLink>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.10 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink exact activeClassName='active_menu_item' to='/about' >About</NavLink>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.20 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink exact activeClassName='active_menu_item' to='/services' >Services</NavLink>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.30 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink exact activeClassName='active_menu_item' to='/portfolio' >Portfolio</NavLink>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.40 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink exact activeClassName='active_menu_item' to='/contact' >Contact</NavLink>
            </motion.li>
        </ul>

    );
}

export default NavLinks;
