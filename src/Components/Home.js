import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import TopStory from './TopStory'

function Home() {
  return (
    <>
      <div className='container-fluid'>
        <Nav />
        <Hero />
        <TopStory/>
      </div>
    </>

  )
}

export default Home
