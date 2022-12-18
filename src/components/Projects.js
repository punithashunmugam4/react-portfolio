import React from 'react'
import '../styles/projects.css'

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='project'>
        <div className='project-heading'>
      <h3>Movie booking app | Newton School</h3>
      <a href='https://movie-booking-react-ps.netlify.app/' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
      <div>
    <h4>Features:</h4>
    <ul>
      <li>The movies that are playing in theatres and for which tickets may be purchased are listed in this app.</li>
      <li>After we confirm your seats, we give you a form to complete with your information. Tickets will finally be successfully
    booked and displayed following submission.</li>
    </ul>
    <div className='tech-stack'><h4>Tech Stack Used:</h4> <p>HTML, CSS, React.js.</p></div>
    <h4>Contribution:</h4> <p>This project offers movie reservations based on available seats and also returns a result that includes the booked seat number and information. Following confirmation, I updated the available seat as well.</p>
    </div>
    </div>
    <div className='project'>
        <div className='project-heading'>
      <h3>BMI Tracker | Newton School</h3>
      <a href='https://ps-bmi-tracker.netlify.app/' target="blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
      <div>
    <h4>Features:</h4>
    <ul>
      <li>This app has the feature of tracking and analyzing the BMI by giving seven days data such as height and weight.</li>
      <li>It has responsive UI design.</li>
    </ul>
    <div className='tech-stack'><h4>Tech Stack Used:</h4> <p>HTML, CSS, React.js.</p></div>
    <h4>Contribution:</h4> <p>We can track and analyze the BMI using the result graph created through our seven data provided. In case if we
gave an incorrect data, we could delete them by clicking close button..</p>
    </div>
    </div>
    <div className='project'>
        <div className='project-heading'>
      <h3>Book Ecommerce | Newton School</h3>
      <a href='https://ps-book-ecommerce.netlify.app/' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
      <div>
    <h4>Features:</h4>
    <ul>
      <li>Ecommerce add to cart, remove to cart implement.</li>
      <li>Optimal Layout according to device screen.</li>
    </ul>
    <div className='tech-stack'><h4>Tech Stack Used:</h4> <p>HTML, CSS, React.js.</p></div>
    <h4>Contribution:</h4> <p>As ecommerce website always most visited website, so in this project feature of adding product in the cart
and remove to cart , implemented context hook ,design a feature of toggle button.</p>
    </div>
    </div>
    <div className='project'>
        <div className='project-heading'>
      <h3>To do app | Newton School</h3>
      <a href='https://ps-todolist.netlify.app/' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
      <div>
    <h4>Features:</h4>
    <ul>
      <li>It has responsive UI design.</li>
      <li>It uses to keep track of our future and completed task.</li>
    </ul>
    <div className='tech-stack'><h4>Tech Stack Used:</h4> <p>HTML, CSS, React.js.</p></div>
    <h4>Contribution:</h4> <p>A small To do app created using react.js where you can add, delete and edit an existing task.</p>
    </div>
    </div>
    <div className='project'>
        <div className='project-heading'>
      <h3>Fully Responsive Website | Newton School</h3>
      <a href='https://shunmugam-travel.netlify.app/' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
      <div>
    <h4>Features:</h4>
    <ul>
      <li>This app has responsive UI design.</li>
      <li>It has the navigation bar and footer with social media icons.</li>
    </ul>
    <div className='tech-stack'><h4>Tech Stack Used:</h4> <p>HTML, CSS, React.js.</p></div>
    <h4>Contribution:</h4> <p>The main concept in this project is the react router which is used in this page to go for the page we needed on
the website. Most of the tags are linked to a path.</p>
    </div>
    </div>
    <div className='project'>
        <div className='project-heading'>
      <h3>Tip Calculator | Newton School</h3>
      <a href='https://ps-tip-calculator.netlify.app/' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
      <div>
    <h4>Features:</h4>
    <ul>
      <li>This app has responsive UI design.</li>
      <li>Enter bill amount.</li>
      <li>Select the tip percentage and enter number of people.</li>
      <li>It has the option to make percentage customized or choose the predetermined one.</li>
    </ul>
    <div className='tech-stack'><h4>Tech Stack Used:</h4> <p>HTML, CSS, JavaScript</p></div>
    <h4>Contribution:</h4> <p>To calculate a tip you want to give after nice dinner/lunch can be a bit quick task to calculate, if you want to split the bill it's more easy to calculate using this app.</p>
    </div>
    </div>
  </div>
  )
}

export default Projects
