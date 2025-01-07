import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Features from './Components/Features'
import Testimonials from './Components/Testimonials'
import Faq from './Components/Faq'
import Blog from './Components/Blog'
import Trial from './Components/Trial'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Nav/>
    <Main/>
    <Features/>
    <Testimonials/>
    <Faq/>
    <Blog/>
    <Trial/>
    <Footer/>
    </>
  )
}

export default App
