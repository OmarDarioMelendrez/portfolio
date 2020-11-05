import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import './ProjectItem.css'

function ProjectItem({image, imageAlt, title, link}) {
  return (
    <figure className='project__container'>
      <img src={image} alt={imageAlt} className='project-img' />
      <figcaption>
        <h1 className='project-title'>{title}</h1>
        <a href={link} target='_blank' rel='noreferrer'>
          <button type='button' className='project-button'>
            Visitar Website
            <FaAngleRight />
          </button>
        </a>
      </figcaption>
    </figure>
  )
}

export default ProjectItem
