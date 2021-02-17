import React from 'react'
import './AboutUs.css'
function AboutUs (props) {
  return (
    <div className='about-us'>
      <h1 className='header1'>Bluberries</h1>
      <h2 className='header2'>Ice Cream & more ..</h2>
      <p className='paragraph'>
        <span>Blueberries</span> is an ice creame ana candies shop. <br />
        It is your adress to every thing extreme and delecious
        <br />
        You can find different kinds of ice cream, locally and imported. Such as
        Lotus, milka oreo, snickers, skittles, maltesers and more.
        <br />
        You can find also soft drinks, chocolates, cigarets, waffle, mini
        panckakes and more ...
        <br />
        You're more than welcome to visit us any time you want.
        <br />
        <span id='sweet'>Have a sweet and Yummy day </span>
        <br />
        <strong>
          {' '}
          P.S we are not respnosiple for any kind of addiction once you visit us
        </strong>
      </p> 
    </div>
  )
}

export default AboutUs;
