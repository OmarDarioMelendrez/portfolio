import React from 'react'
import TypeIt from 'typeit-react'
import './HeroSection.css'
import HeroImg from '../../images/hero.svg'

function HeroSection() {
  return (
    <div className='hero__container' id='hero'>
      <div className='content__wrapper'>
        <div className='hero__left'>
          <span className='textHome'>
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .type('¡Hello World!')
                  .pause(750)
                  .delete(12)
                  .pause(500)
                  .type('Hola Mundo!')
                  .pause(2000)
                  .break({delay: 500})
                  .type('Soy Omar Dario Melendrez, ')
                  .break({delay: 500})
                  .type('Apasionado')
                  .pause(750)
                  .delete(10)
                  .type('Dedicado')
                  .pause(750)
                  .delete(8)
                  .type('Responsable')
                  .pause(750)
                  .delete(11)
                  .pause(500)
                  .type('Desarrollador Front End.')
                return instance
              }}
            />
          </span>
        </div>
        <div className='hero__right'>
          <img src={HeroImg} alt='' className='hero-img' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
