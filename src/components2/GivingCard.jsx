import React from 'react'

const GivingCard = (props) => {
  return (
    <div className='givingCard'>
        <h2 id='givingh2'>{props.headingg2}</h2>
        <p id='givingpara'>{props.paraa}</p>
    </div>
  )
}

export default GivingCard