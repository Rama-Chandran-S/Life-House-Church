import React from 'react'
import NavBar from '../components/NavBar'
import Card from './Card'
import './ministries.css'
import Footer from '../components/Footer'

const Ministries = () => {
  return (
    <div className='Ministries'>
      <NavBar/>
      <div className="minisouter">
        <Card data={"Children’s Ministry"}/>
        <img src="https://cdn.prod.website-files.com/5f3f0a773625d74b815972d0/5f3f0a773625d7347d597344_children-p-1600.jpeg" alt="" />
      </div>
      <Footer/>
    </div>
  )
}

export default Ministries