import React from 'react'
import './Footer.css'
import {FaCode, FaEnvelope, FaGithub, FaLinkedin, FaReact} from 'react-icons/fa'
//importamos el componente Link como LinkS de react-scroll
import {Link as LinkS} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <footer className='footer' id='footer'>
      <div className='footer__container'>
        <div className='footer__container--info'>
          <LinkS to='home' className='title' onClick={toggleHome}>
            ODM <FaCode />
          </LinkS>
          <div className='text'>Aprendiendo y mejorando un día a la vez.</div>
        </div>
        <div className='footer__container--socialWrapper'>
          <a
            href='https://www.linkedin.com/in/omar-dario-melendrez/'
            target='_blank'
            rel='noreferrer'
            className='social-link'
          >
            <span className='social-logo'>
              <FaLinkedin />
            </span>
          </a>
          <a
            href='https://github.com/OmarDarioMelendrez'
            target='_blank'
            rel='noreferrer'
            className='social-link'
          >
            <span className='social-logo'>
              <FaGithub />
            </span>
          </a>
          <a
            href='mailto:melendrezomar2@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='social-link'
          >
            <span className='social-logo'>
              <FaEnvelope />
            </span>
          </a>
        </div>
        <p className='made'>
          Sitio hecho con <FaReact /> React
        </p>
      </div>
    </footer>
  )
}

export default Footer
