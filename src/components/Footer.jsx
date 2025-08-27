import React from 'react'
import FootCard from './FootCard'

const Footer = () => {
  return (
    <footer>
        <div className="foot1">
            <FootCard heading={"Service Times"} para1={"Wed 5:30pm"} para2={"Sat 5:30pm"} para3={"Sun 10:00am"}/>
            <FootCard heading={"Contact"} para1={"(000) 000-0000"} para2={"info@lifehouse.church"} para3={"Contact Us"}/>
            <FootCard heading={"Location"} para1={"1600 Pennsylvania Avenue NW,"} para2={"Washington, DC 20500"}/>
            <div className="footInnerCard">
                <h3>Stay connected</h3>
                <form action="">
                    <input type="text" placeholder='name@email.com'/>
                    <button id='footBtn'>Subscribe</button>
                    <p>Subscribe to our newsletter for updates.</p>
                </form>
            </div>
        </div>
        <div className="foot2">
            <div className="foot2Inner1">
                <p>© 2025 Lifehouse Church. All Rights Reserved.Template by <a href="https://portfolio-60040133998.development.catalystserverless.in/app/index.html" alt="_blank">RAMA CHANDRAN S</a></p>
            </div>
            <div className="foot2Inner1">
                <p>Privacy Policy</p>
            </div>
            <div className="foot2Inner1">
                <a href="https://www.facebook.com/lifehousechurchorg/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.prod.website-files.com/5f3f0a773625d71a4a5972a9/5f3f0a773625d74e765972cc_facebook.svg" alt="" /></a>

                <a href="https://www.youtube.com/lifehousechurch" target="_blank" rel="noopener noreferrer"><img src="https://cdn.prod.website-files.com/5f3f0a773625d71a4a5972a9/5f3f0a773625d7a8cc5972d8_youtube.svg" alt="" /></a>
                
                <a href="https://www.instagram.com/lifehouse.church/?hl=en" target="_blank" rel="noopener noreferrer"><img src="https://cdn.prod.website-files.com/5f3f0a773625d71a4a5972a9/5f3f0a773625d7130d5972cd_instagram.svg" alt="" /></a>
                
                <a href="https://x.com/lifehouse_org" target="_blank" rel="noopener noreferrer"><img src="https://cdn.prod.website-files.com/5f3f0a773625d71a4a5972a9/5f3f0a773625d7a9285972cf_twitter.svg" alt="" /></a>
                
                <a href="https://vimeo.com/channels/709634/videos" target="_blank" rel="noopener noreferrer"><img src="https://cdn.prod.website-files.com/5f3f0a773625d71a4a5972a9/5f3f0a773625d769395972d7_vimeo.svg" alt="" /></a>
                
                <a href="https://open.spotify.com/show/70jpxInou1Hjf74nPNISVz" target="_blank" rel="noopener noreferrer"><img src="https://cdn.prod.website-files.com/5f3f0a773625d71a4a5972a9/5f3f0a773625d7041c5972ce_spotify.svg" alt="" /></a>
                               
            </div>
        </div>
    </footer>
  )
}

export default Footer