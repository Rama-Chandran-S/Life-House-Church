import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav>
            <NavLink to={"/"}><img src="https://www.adobe.com/express/learn/blog/media_196e5176585a00903655922c802ee1e507bb0a6e8.png?width=750&format=png&optimize=medium" alt="logo" height={70}/></NavLink>
            
            <ul>
                <NavLink to={"/about"}><p className='navp' >about</p></NavLink>
                <NavLink to={"/getinvolved"}><p className='navp'>get involved</p></NavLink>
                <NavLink to={"/ministries"}><p className='navp'>ministries</p></NavLink>
                <NavLink to={"/events"}><p className='navp'>events</p></NavLink>
                <NavLink to={"/giving"}><p className='navp'>giving</p></NavLink>
                
            </ul>
            <NavLink to={"/watch"}><button className='watchBtn'>Watch</button></NavLink>
        </nav>
    </>
  )
}

export default NavBar