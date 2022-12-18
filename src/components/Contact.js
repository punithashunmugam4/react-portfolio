import React from 'react'
import SocialMedia from './SocialMedia'
import '../styles/contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-details'>
        <label>Contact Number:</label>
      <span> 343241</span><br/><br/>
      <label>Email:</label>
      <a href='mailto:punithashunmugam@gmail.com?subject=SubjectHere&content=content' target="blank" rel="noopener noreferrer"> punithashunmugam@gmail.com</a><br/><br/>
      </div>
      <SocialMedia/>
    </div>
  )
}

export default Contact
