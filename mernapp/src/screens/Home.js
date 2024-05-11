import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    //this is a screen or page where navbar component is being called because it is used constantly
    //the code below navbar div is for card
    //container is used for mobile first approach because the code we are writing is for mobile
    <div>
      <div> <Navbar /> </div>
      <div> <Carousel /> </div>
      <div className='m-3'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div> <Footer /> </div>
    </div>
  )
}
