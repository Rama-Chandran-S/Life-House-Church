import React from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import GetInvolved from './components2/GetInvolved'
import Ministries from './components2/Ministries'
import Events from './components2/Events'
import Giving from './components2/Giving'
import Watch from './components2/Watch'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/getInvolved' element={<GetInvolved/>}></Route>
          <Route path='/ministries' element={<Ministries/>}></Route>
          <Route path='/events' element={<Events/>}></Route>
          <Route path='/giving' element={<Giving/>}></Route>
          <Route path='/watch' element={<Watch/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App