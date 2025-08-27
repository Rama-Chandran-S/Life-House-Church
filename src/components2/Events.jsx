import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './Events.css'
import EventCard from './EventCard'

const Events = () => {
  return (
    <div className="events">
      <NavBar/>
      <div className="eventsouter">
        <div className="h2">
          <h2 id='upcomingEvents'>Upcoming events</h2>
        </div>
        <div className="eventsInner">
          <EventCard eventimg={"https://i.ytimg.com/vi/73YgH2fLaLQ/maxresdefault.jpg"} eventh3={"First Sunday of the Month KickOff Sunday"} eventp={"📅Feb. 11, 2025 ⏰ 8:30 AM - 9:30 PM"}/>
          <EventCard eventimg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPYTXf395wccFCKLKnLHNEvH4sf9UOSj8kw&s"} eventh3={"Serve Day for our Community"} eventp={"📅Jul. 01, 2025"}/>
          <EventCard eventimg={"https://cmgcreate-1.imgix.net/social/ae9105c0-1614-8164-a775-f73421647a68/title.jpg?auto=format&h=600&q=40&w=400&s=ad526cedc95bd17f442709bdadacbd0c"} eventh3={"Prayer and Fasting all day Wednesday"} eventp={"📅Sep. 24, 2025 ⏰ All day"}/>
          <EventCard eventimg={"https://images.pexels.com/photos/12088465/pexels-photo-12088465.jpeg"} eventh3={"Saturday Morning Livestream Prayer"} eventp={"📅Sep. 22, 2025 ⏰ 8:30 AM - 9:30 PM"}/>
        </div>
      <Footer/>
      </div>
    </div>
  )
}

export default Events