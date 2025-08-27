import React from 'react'

const Card2 = (props) => {
  return (
    <div className="aboutinner2">
                <div className="aboutleft">
                    <img src={props.img} alt="" />
                </div>
                <div className="aboutright">
                    <h2>{props.heading2}</h2>
                    <h3>{props.heading3}</h3>
                    <p>{props.para}</p>
                </div>
            </div>
  )
}

export default Card2