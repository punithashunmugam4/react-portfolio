import React from 'react'
import mypic from './mypic.jpg'
import '../styles/home.css'
import SocialMedia from './SocialMedia'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
      <p className='welcome'>React Developer</p>
      <h1 className='intro-name'>Hi, I'm <span>Punitha Shunmugam.</span></h1>
      <p className="intro-copy">I build responsive, thoughtful web experiences with React and modern JavaScript. My goal is to turn complex ideas into polished, accessible interfaces.</p>
      <div className="hero-actions">
        <a className="primary-action" href="/projects">View my work <i className="fa-solid fa-arrow-right"></i></a>
        <a className="secondary-action" href="mailto:punithashunmugam4@gmail.com">Let's talk</a>
      </div>
      <div className='allicons'>
        <div className='social-media'>
          <p>Find me</p>
          <SocialMedia/>
      </div>
      <div className='skills'>
        <p>Core stack</p>
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
