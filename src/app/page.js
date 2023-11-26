import React from 'react'
import Navbar from './(dashboard)/dashboard/(components)/navbar'
import Hero from './(dashboard)/dashboard/(components)/hero'
import Cta from './(dashboard)/dashboard/(components)/cta'
import Footer from './(dashboard)/dashboard/(components)/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
