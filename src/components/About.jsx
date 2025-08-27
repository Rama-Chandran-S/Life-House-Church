import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './About.css'
import Card from '../components2/Card'
import Card2 from '../components2/Card2'

const About = () => {
  return (
      
      <div className='about'>
        <NavBar/>    
        <div className="aboutouter">
            <Card data={"Meet the men and women on our leadership team"}/>
            {/* <div className="aboutinner1">
                <div className="aboutpara">
                    <h1>Meet the men and women on our leadership team</h1>
                </div>
            </div> */}
            <Card2 img={"https://cdn.prod.website-files.com/5f3f0a773625d71a4a5972a9/5f3f0a773625d76dd35972da_pastors.jpg"} heading2={"Daniel & Grace Thomas"} heading3={"Senior Pastors of Lifehouse Church"} para={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."}/>
            {/* <div className="aboutinner2">
                <div className="aboutleft">
                    <img src="https://cdn.prod.website-files.com/5f3f0a773625d71a4a5972a9/5f3f0a773625d76dd35972da_pastors.jpg" alt="" />
                </div>
                <div className="aboutright">
                    <h2>Daniel & Grace Thomas</h2>
                    <h3>Senior Pastors of Lifehouse Church</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
            </div> */}
            <div className="aboutinner3">
                <h4>Meet the team</h4>
            </div>
            <div className="aboutinner4">
                <div className="aboutimage">
                    <img src="https://cdn.prod.website-files.com/5f3f0a773625d74b815972d0/5f3f0a773625d7eb9859734d_pastor.jpg" alt="" />
                    <div className="aboutimgchild">
                        <h5>Rick Miller</h5>
                        <p>Associate Pastor</p>
                    </div>
                </div>
                <div className="aboutimage">
                    <img src="https://cdn.prod.website-files.com/5f3f0a773625d74b815972d0/5f3f0a773625d7db2a59734e_worship-pastor.jpg" alt="" />
                    <div className="aboutimgchild">
                        <h5>Emma Jones</h5>
                        <p>Worship Pastor</p>
                    </div>
                </div>

                <div className="aboutimage">
                    <img src="https://cdn.prod.website-files.com/5f3f0a773625d74b815972d0/5f3f0a773625d7dae359734f_youth-pastor.jpg" alt="" />
                    <div className="aboutimgchild">
                        <h5>Jonathan Williams</h5>
                        <p>Youth Pastor</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About