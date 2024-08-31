import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function Services(){
    return(
        <div>
            <Navbar></Navbar>
            
            <section className="banner-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Services</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="available-equipment-section abt-intro testimonial-row">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="equipment-box">
              <div className="equipment-image"><img src="images/equipment1.jpg"/></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-description services-description">
              <h4>If you prefer having a professional company doing the job instead of renting equipment and doing it yourself, we also offer Services on Light excavator work.</h4>
              <ul>
                <li><i><img src="images/arr-right.png"/></i><p>Light Land Clearing</p><p></p></li>
                <li><i><img src="images/arr-right.png"/></i><p>Stump Removal</p><p></p></li>
                <li><i><img src="images/arr-right.png"/></i><p>Single Tree Removal</p><p></p></li>
                <li><i><img src="images/arr-right.png"/></i><p>Debris Removal</p><p></p></li>
                <li><i><img src="images/arr-right.png"/></i><p>Digging and more</p><p></p></li>
              </ul>
              <h6>Contact us for free estimate 352-266-7758 ask for Jamie. We also accept credit cards.</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-vdo" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div className="vdo-btn"><img src="images/vdo-btn.png"/></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-description">
              <h5>About Us</h5>
              <h4><span>Southpaw Equipment rental</span> is great for small homeowners and handymen to tackle small to medium residential projects. </h4>
              <p> With our low overhead we can rent and deliver the equipment at very competitive rates.</p>
              <p>We deliver all equipment : free within 25 miles if equipment is rented for at least 3 days.</p>
              <h6>Call today for a free quote:   352-266-7758 ask for Jamie</h6>
              <a className="btn btn-style" href="#" role="button">Book Excavator</a>
            </div>
          </div>
        </div>
      </div>
    </section>
            
            <Footer></Footer>
        </div>
    )
}

export default Services