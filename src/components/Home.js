import React from 'react'
import Register from './Register'
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'
import Footer from './Footer'
import YoutubeEmbed from './YoutubeEmbed'

function Home() {
  return (
    <div>
        <SwipeableTextMobileStepper /> 
        <YoutubeEmbed embedId="rokGy0huYEA" />
        <Register />
        <Footer />
    </div>
  )
}

export default Home