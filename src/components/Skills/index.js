import React from 'react'
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa'
import Gatsby from '../../images/gatsby.svg'
import './Skills.css'

function Skills() {
  return (
    <section className='skills'>
      <div className='skills__container'>
        <h3>Skills de desarrollo</h3>
        <div className='skills__wrapper'>
          <div className='col'>
            <ul className='nav-skills'>
              <li>
                <FaHtml5 /> Html
              </li>
              <li>
                <FaCss3 /> Css
              </li>
              <li>
                <FaSass /> Sass
              </li>
              <li>
                <FaBootstrap /> Bootstrap
              </li>
            </ul>
          </div>
          <div className='col col-middle'>
            <ul className='nav-skills'>
              <li>
                <FaJs /> Javascript
              </li>
              <li>
                <FaReact /> React.js
              </li>
              <li>
                <img src={Gatsby} alt='technology icon' /> Gatsby
              </li>
              <li>
              <FaGithub /> Git y Github
              </li>
            </ul>
          </div>
          <div className='col'>
            <ul className='nav-skills'>
              <li><FaNodeJs /> Nodejs</li>
              <li>Express</li>
              <li>APIREST</li>
              <li>
                <FaDatabase /> Postgresql
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
