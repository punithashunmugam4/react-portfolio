import React from 'react'
import SocialMedia from './SocialMedia'
import '../styles/contact.css'
const Contact = () => {
  return (
    <div className='contact-container page-shell'>
      <p className="section-kicker">Get in touch</p>
      <h2 className="section-title">Let's work together.</h2>
      <p className="contact-intro">Have a project, role, or idea in mind? I'd be happy to connect.</p>
      <div className='contact-details'>
        <label>Contact Number:</label>
      <span> +91-9750214487</span><br/><br/>
      <label>Email:</label>
      <a href='mailto:punithashunmugam4@gmail.com' target="_blank" rel="noopener noreferrer">punithashunmugam4@gmail.com</a><br/><br/>
      </div>
      <SocialMedia/>
    </div>
  )
}

export default Contact
