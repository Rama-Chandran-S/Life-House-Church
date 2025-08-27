import React from 'react'

const FootCard = (props) => {
  return (
    <div className='foot1'>
        <h3>{props.heading}</h3>
        <p>{props.para1}</p>
        <p>{props.para2}</p>
        <p>{props.para3}</p>
    </div>
  )
}

export default FootCard