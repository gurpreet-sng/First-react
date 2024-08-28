import React from 'react'
import Navbar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <section className="available-equipment-section abt-intro">
      <div className="container">
        <div className="row last-row">
          <div className="col-lg-6">
            <div className="equipment-box">
              <div className="equipment-image"><img src="images/equipment1.jpg"/></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="intro-text get-in-touch">
              <h2 className="section-title">Get In Touch</h2>
              <div className="our-location">
                <ul>
                  <li><span><img src="images/add.png"/></span><p>1552 SW 7th Road Ocala, FL 34471</p></li>
                  <li><span><img src="images/email.png"/></span><p>lorem.ipsum@gmail.com</p></li>
                  <li><span><img src="images/phone.png"/></span><p>(352) 620-0686</p></li>
                  <li><span><img src="images/clock.png"/></span><p>Monday - Friday: 9:00 AM - 6:00 PM</p></li>
                </ul>
              </div>
              <a className="btn btn-style" href="#" role="button">Book Excavator</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="testimonials-section map-section">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.7109244359176!2d-82.14781568542756!3d29.173189666156855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7d4b9a1b4bde9%3A0xb125c5393de6dc53!2s1552%20SW%207th%20Rd%2C%20Ocala%2C%20FL%2034471%2C%20USA!5e0!3m2!1sen!2sin!4v1619862213247!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
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

export default Home