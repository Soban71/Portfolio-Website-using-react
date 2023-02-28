import React from 'react'
import './Card.css'

export default function Card({emoji , heading , Detail}) {
  return (
    <div className='Card'>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{Detail}</span>
      <button className='c-button'>Learn More</button>
    </div>
  )
}
