import { useState } from 'react'
import Header from './components/Header'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <div>
    <Header/>
    <Hero/>
    <Benefits/>
    <Collaboration/>
    <Services/>
    <Pricing/>
    <Roadmap/>
    <Footer/>
    <ButtonGradient/>
    </div>
  </>
  )
}

export default App
