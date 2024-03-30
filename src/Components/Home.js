import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import TopStory from './TopStory'
import Footer from './Footer'
import TopBar from './TopBar'

function Home() {
  return (
    <>
      <div className='container-fluid'>
        <TopBar/>
        <Nav />
        <Hero />
        <TopStory/>
        <Footer/>
      </div>
    </>

  )
}

export default Home
