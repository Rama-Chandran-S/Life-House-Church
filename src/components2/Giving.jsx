import React from 'react'
import NavBar from '../components/NavBar'
import Card from './Card'
import Footer from '../components/Footer'
import './giving.css'
import Card2 from '../components2/Card2'
import GivingCard from './GivingCard'
import './GivingCard.css'

const Giving = () => {
  return (
    <div className='giving'>
      <NavBar/>
      <div className="givingouter">
        <Card data={"Your generosity furthers the mission of the gospel"}/>
        <Card2 img={"https://cdn.prod.website-files.com/5f3f0a773625d74b815972d0/5f3f0a773625d78bc6597352_giving-p-1600.jpeg"} heading2={"Give Online. It's simple and secure! Use your credit or debit card to give a one time gift or even schedule a reoccurring gift."} heading3={""} para={""}/>
        <marquee behavior="" direction="" id="whywegive">Why we give ---- Why we give ---- Why we give ---- Why we give ---- Why we give ---- Why we give ---- Why we give ---- Why we give ---- Why we give ----</marquee>

        <div className="givingCardOuter">
          <div className="givingCardInner">
            <GivingCard headingg2={"Childcare"} paraa={"Our childcare team works diligently to provide a safe, clean environment each week for your children. Once you check your child in, you will be given a checkout card. Only you can check your child out with the card."}/>
          </div>
          <div className="givingCardInner">
          < GivingCard headingg2={"Parking"} paraa={"Turn on your hazard lights when you arrive to let us know you're     new. One of our team members will direct you where to go and have a special gift for you."}/>
          </div>
          <div className="givingCardInner">
            <GivingCard headingg2={"Service"} paraa={"Our service last about an hour. We refocus our hearts and minds on Christ through energetic worship and enjoy fellowship together. Each service is a breath of fresh air."}/>
          </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Giving