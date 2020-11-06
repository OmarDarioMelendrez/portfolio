import React, {useState} from 'react'
//importamos los estilos
import './Navbar.css'
//importamos el componente Link como LinkS de react-scroll
import {Link as LinkS} from 'react-scroll'
//importando react-scroll
import {animateScroll as scroll} from 'react-scroll'
//importamos icono de librería
import {FaCode, FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <LinkS to='/' className='navbar-logo' onClick={toggleHome}>
            ODM <FaCode />
          </LinkS>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <LinkS
                to='hero'
                smooth={true}
                // duration={true}
                spy={true}
                exact='true'
                offset={-80}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='about'
                smooth={true}
                // duration={true}
                spy={true}
                exact='true'
                offset={-80}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sobre mí
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='projects'
                smooth={true}
                // duration={true}
                spy={true}
                exact='true'
                offset={-80}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Proyectos
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='footer'
                smooth={true}
                // duration={true}
                spy={true}
                exact='true'
                offset={-80}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contacto
              </LinkS>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
