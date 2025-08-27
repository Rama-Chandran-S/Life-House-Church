import React from 'react'
import'./Events.css'

const EventCard = (props) => {
  return (
    <div className='eventcard'>
        <img src={props.eventimg} alt="image" height={300} width={550}/>
        <h2>{props.eventh3}</h2>
        <p>{props.eventp}</p>
    </div>
  )
}

export default EventCard