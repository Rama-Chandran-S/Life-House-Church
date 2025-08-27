import React from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='homePage'>
        <NavBar/>
        <div className="outer">
            <div className="inner1parent">
            <div className="inner1">
                <h1 id='firstHeading1'>A house of hope and healing</h1>
                <NavLink ><button className='newBtn'>I'm New</button></NavLink>
                <NavLink to={"/watch"}><button className='watchBtn'>Watch</button></NavLink>
            </div>
            <div className="dummy"></div>
            </div>
            
            <div className="h2">
                    <h2 id='upcomingEvents'>Upcoming events</h2>
                </div>
            <div className="inner2">
                
                
                <div className="card1">
                    
                    <img src="https://i.ytimg.com/vi/73YgH2fLaLQ/maxresdefault.jpg" alt="image"  height={300}/>
                    <h3>First Sunday of the Month Kickoff Sunday</h3>
                    <p className='cardP'>📅Jun. 09, 2021 ⏰ 8:30 AM - 9:30 PM</p>
                </div>
                <div className="card1">
                    
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPYTXf395wccFCKLKnLHNEvH4sf9UOSj8kw&s" alt="" height={300}/>
                    <h3>First Sunday of the Month Kickoff Sunday</h3>
                    <p className='cardP'>📅Jun. 09, 2021 ⏰ 8:30 AM - 9:30 PM</p>
                </div>
            </div>
            <div className="inner3">
                <marquee behavior="scroll" direction="left"><h2 id='ourmission'>Our mission --- Our mission --- Our mission --- Our mission --- Our mission --- Our mission --- Our mission --- Our mission ---</h2></marquee>
            </div>
            <div className="inner4">
                <div className="Fourthcard1">
                    <p className="inner4p">The mission of Lifehouse Church is all about spreading the Gospel of Jesus Christ. We won't stop serving, loving, and giving until every heart is turned towards Christ.</p>
                    <NavLink to={"/about"}><button className="inner4Btn">Our Leadership</button></NavLink>
                </div>
                <div className="Fourthcard2">
                    <img src="https://images.pexels.com/photos/12903034/pexels-photo-12903034.jpeg" alt="" height={450} id='shakeHand'/>
                </div>
            </div>
            <div className="inner5">
                <div className="FifthDivCard">
                    <div className="FifthDivCard1">
                        <button className='Btn1'>Latest Sermon</button>                    
                        <h1 id='SecondHeading1'>More Than Miracles</h1>
                    </div>
                    <div className="FifthDivCard2">
                        <button className='Btn2'>Watch Sermon</button>
                        <NavLink to={"/watch"}> <button className='Btn3'>All Sermons</button> </NavLink>
                    </div>
                    
                </div>
                
            </div>
            <div className="inner6">
                <div className="ministries">
                    <h2 id='ministries'>Ministries</h2>
                </div>
                <div className="FifthCardParent">
                    <NavLink to={"ministries"}> <div className="Card1"><p>Children's</p></div></NavLink>
                    <div className="Card2"><p>Youth</p></div>
                    <div className="Card3"><p>Young Aduld</p></div>
                    <div className="Card4"><p>Life House Worship</p></div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home