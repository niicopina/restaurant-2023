import React from 'react'
import {Navbar } from './components'
import {AboutUs, SpecialMenu, Chef, Intro, Gallery, FindUs, Footer, Header, Laurels} from './container'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
    </div>
  )
}

export default App