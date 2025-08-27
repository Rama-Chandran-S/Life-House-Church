import React from 'react'
import FootCard from '../components2/Card'
import NavBar from '../components/NavBar'
import Card2 from '../components2/Card2'
import './GetInvolved.css'
import Footer from '../components/Footer'
import Card from '../components2/Card'

const GetInvolved = () => {
  return (
    
    <div className='get'>
      <NavBar/>
      <div className="getouter">
        <Card data={"Ready to get more involved? Take the next step."}/>
        <div className="getright">
        <Card2 img={"https://cdn.prod.website-files.com/5f3f0a773625d74b815972d0/5f3f0a773625d7bd8559734a_class.jpg"} heading2={"The Next Steps Class"} heading3={""} para={"Learn more about your faith and build relationships along the way! Whether you new here or have been around for a while, the Next Steps Class is for you. This four week course is a great way to learn more about the history of the church, our beliefs, and will prepare you for serving in one of our serve groups."}/>
        {/* <button id='signup'>Sign Me Up</button> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default GetInvolved