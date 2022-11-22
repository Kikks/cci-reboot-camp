import React from 'react'
import Countdown from '../../components/Countdown'
import Experience from '../../components/Experience'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Header from '../../components/Header'
import Merchandise from '../../components/Merchandise'
import Register from '../../components/Register'

const Home = () => {
  return (
      <div>
          <Header />
          <Countdown />
          <Gallery />
          <Register />
          <Experience />
          <Merchandise />
          <Footer />
    </div>
  )
}

export default Home