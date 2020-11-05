import React from 'react'
import ProjectItem from '../ProjectItem'
import './Projects.css'
//importando imagenes
import ImgProject1 from '../../images/proyecto1.jpg'
import ImgProject2 from '../../images/proyecto2.jpg'
import ImgProject3 from '../../images/proyecto3.jpg'
import ImgProject4 from '../../images/proyecto4.jpg'

function Projects() {
  return (
    <section className='projects'>
      <div className='projects__container'>
        <h3>Mis proyectos</h3>
        <p>
          Estos proyectos son algunos de mis trabajos freelance y personales.
        </p>
        <div className='projects__wrapper'>
          <ProjectItem
            image={ImgProject3}
            imageAlt={'Vazto bank'}
            title={'Practica de maquetado en react + styled components'}
            link={'https://vazto-bank.netlify.app/'}
          />
          <ProjectItem
            image={ImgProject4}
            imageAlt={'Vazto Travel'}
            title={'Maquetado de sitio web de viajes react'}
            link={'https://vaztotravel.netlify.app/'}
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
      </div>
    </section>
  )
}

export default Projects
