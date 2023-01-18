import React from 'react'
import Agencies from '../Agency/Agencies'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Project from '../Project/Project'
import Location from '../Location/Location'
import Partner from '../Partner/Partner'
import Ready from '../Ready/Ready'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Agencies/>
      <Project/>
      <Location/>
      <Ready/>
      <Partner/>
      <Footer/>
    </div>
  )
}

export default Home
