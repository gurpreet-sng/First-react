import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function Testimonials(){
    return(
        <div>
            <Navbar></Navbar>
            
            <section className="banner-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Testimonials <span></span></h1>
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
            <div className="intro-text">
              <h2 className="section-title">Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu pharetra sem. Etiam dapibus, odio a volutpat facilisis, nunc ante faucibus ex, mollis hendrerit dolor nibh id felis. Curabitur non malesuada lacus, suscipit pretium dui.</p>
              <p>Nulla ipsum elit, feugiat a purus ac, tempor gravida nibh. Integer faucibus euismod bibendum. Maecenas non ex vitae risus ultricies eleifend ac quis purus.</p>
              <a className="btn btn-style" href="#" role="button">Book Excavator</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="testimonials-section">
      <h2 className="section-title">What Clients Says About Us<span><img src="images/white-graphic.png"/></span></h2>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales leo at imperdiet tincidunt. In tristique felis tortor, a imperdiet ante pretium et. Nam nec fermentum sem, vitae eleifend ante. Nullam luctus bibendum aliquam. Phasellus iaculis mollis bibendum. Nunc sit amet turpis vitae risus aliquet consequat et eu erat. </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales leo at imperdiet tincidunt. In tristique felis tortor, a imperdiet ante pretium et. Nam nec fermentum sem, vitae eleifend ante. Nullam luctus bibendum aliquam. Phasellus iaculis mollis bibendum. Nunc sit amet turpis vitae risus aliquet consequat et eu erat. </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales leo at imperdiet tincidunt. In tristique felis tortor, a imperdiet ante pretium et. Nam nec fermentum sem, vitae eleifend ante. Nullam luctus bibendum aliquam. Phasellus iaculis mollis bibendum. Nunc sit amet turpis vitae risus aliquet consequat et eu erat. </p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
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

export default Testimonials