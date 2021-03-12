import React, {useState} from 'react'
import ProjectItem from '../ProjectItem'
import './Projects.css'
//importando imagenes
import ImgProject1 from '../../images/proyecto1.jpg'
import ImgProject2 from '../../images/proyecto2.jpg'
import ImgProject3 from '../../images/proyecto3.jpg'
import ImgProject4 from '../../images/canadamoda.jpg'
import ImgProject5 from '../../images/proyecto5.jpg'
import ImgProject6 from '../../images/proyecto6.jpg'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

function Projects() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <section className='projects' id='projects'>
      <div className='projects__container'>
        <h3>Mis proyectos</h3>
        <p>
          Estos proyectos son algunos de mis trabajos freelance y personales.
        </p>
        <div className='projects__wrapper'>
          <ProjectItem
            image={ImgProject6}
            imageAlt={'Hawks agencia de marketing'}
            title={'Sitio con html, sass, js y php'}
            link={'https://hawksagencia.com/'}
          />
          <ProjectItem
            image={ImgProject3}
            imageAlt={'Vazto bank'}
            title={'Practica de maquetado en react + styled components'}
            link={'https://vazto-bank.netlify.app/'}
          />
          <ProjectItem
            image={ImgProject5}
            imageAlt={'Menú rosanegra'}
            title={
              'Menú digital restaurante + código QR - Gatsby.js - Responsive'
            }
            link={'http://rosanegra1000.com/'}
          />
          <ProjectItem
            image={ImgProject4}
            imageAlt={'Canada Moda'}
            title={'Realizando e-commerce con tiendanube.'}
            link={'https://tiendacanadamoda.com.ar/'}
          />
          <ProjectItem
            image={ImgProject2}
            imageAlt={'Marshmello concept'}
            title={'Página estática concepto de evento promocional responsive'}
            link={'https://marshmello-concept.netlify.app/'}
          />
          <ProjectItem
            image={ImgProject1}
            imageAlt={'casita de holly'}
            title={
              'Página estática para peluquería canina diseñada y maquetada, responsive'
            }
            link={'https://casita-de-holly.netlify.app/'}
          />
        </div>
        <div className='button__container'>
          <a
            href='https://www.linkedin.com/in/omar-dario-melendrez/'
            target='_blank'
            rel='noreferrer'
          >
            <button
              type='button'
              className='git-button'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Contactame
              {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}{' '}
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
