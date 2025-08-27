import React from 'react'
import './Watch.css'

const WatchCard = (props) => {
  return (
    <div className='watchCard'>
        <img src={props.watchimg} alt=""  height={250}/>
        <h6>{props.watchh6}</h6>
        <div className="watchCardInner">
            <p>{props.watchp1}</p>
            <p>{props.watchp2}</p>
        </div>

    </div>
  )
}

export default WatchCard