import React from 'react'
import './Watch.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import WatchCard from './WatchCard'

const Watch = () => {
  return (
    <div className='watch'>
      <NavBar/>
        <div className="watchOuter">
          <div className="watchInner1">
            <div className="watchInner1left">
              <h1>Join us through livestream.</h1>
              <h6>Sun 10:00am • Sat 5:30pm • Wed 5:30pm</h6>
            </div>
            <div className="watchInner1right">
              <button>Watch live</button>
            </div>
          </div>
          <div className="h2">
            <h2 id='watchLatestSermons'>Latest sermons</h2>
          </div>
          <div className="watchInner2">
            <WatchCard watchimg={"https://cdn.prod.website-files.com/5f3f0a773625d74b815972d0/5f3f0a773625d7398b597320_sermon1.jpg"} watchh6={"More Than Miracles"} watchp1={"Rick Miller"} watchp2={"Feb 11, 2025"}/>
            <WatchCard watchimg={"https://images.pexels.com/photos/6671410/pexels-photo-6671410.jpeg"} watchh6={"Walk by Faith"} watchp1={"laim Stark"} watchp2={"Jul 01, 2025"}/>
            <WatchCard watchimg={"https://images.pexels.com/photos/32731836/pexels-photo-32731836.jpeg"} watchh6={"Stronger"} watchp1={"Pedro Eaton"} watchp2={"Sep 22, 2025"}/>
            <WatchCard watchimg={"https://images.pexels.com/photos/976863/pexels-photo-976863.jpeg"} watchh6={"Resurrection Power"} watchp1={"Waild Clayton"} watchp2={"Sep 24, 2025"}/>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Watch