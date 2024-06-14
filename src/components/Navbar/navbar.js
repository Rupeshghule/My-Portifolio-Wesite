import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo1.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from '@fortawesome/free-regular-svg-icons'; 
import Menu from '../../assets/menu.png';
const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className='logo' />
            <div className="menu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={1500} className='MenuListItem'> Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={1500} className='MenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={1500} className='MenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={1500} className='MenuListItem'>Contact</Link> 
                // <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='MenuListItem'>Achievements</Link>
            </div>
            <button className='menuBtn' onClick={ () => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <FontAwesomeIcon icon={faMessage}  className='MenuImg'/> Contact Me
            </button>
          
          <img src={Menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navmenu" style={{display:showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={1500} className='ListItem' onClick={()=>setShowMenu(false)} >Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={1500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={1500} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={1500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>

        </nav>
    );
};

export default Navbar;
