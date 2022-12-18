import React from 'react'
import mypic from './mypic.jpg'
import '../styles/home.css'
import SocialMedia from './SocialMedia'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
      <p className='welcome'>WELCOME TO MY WORLD</p>
      <h2 className='intro-name'>Hi, I'm <span>Punitha Shunmugam</span> React Developer.</h2>
      <p>I am a front end developer. My goal is to work for a company where I can use my skills and gain more experience to increase output and raise the organization's profile.</p>
      <div className='allicons'>
        <div className='social-media'>
          <p>Find me in</p>
          <SocialMedia/>
      </div>
      <div className='skills'>
        <p>Best skills on</p>
        <div className='skills-icons'>
        <a href='https://www.java.com/en/' target="blank" className='icon-div'><i className='fa-brands fa-java'></i></a>
      <a href='https://reactjs.org/' target="blank"  className='icon-div'><i className='fa-brands fa-react'></i></a>
      <a href='https://www.javascript.com/' target="blank"  className='icon-div'><i className='fa-brands fa-js'></i></a>
      </div>
      </div>
      </div>
      </div>
      <div className='my-image'>
        <img src={mypic} alt='shunmugam'/>
      </div>
    </div>
  )
}

export default Home
