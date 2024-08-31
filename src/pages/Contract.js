import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function Contract(){
    return(
        <div>
            <Navbar></Navbar>
            
            <section className="banner-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1>Book <span>Equipment</span></h1>
               </div>
            </div>
         </div>
      </section>
      <section className="available-equipment-section our-contract-section">
         <div className="container">
            <h2 className="section-title">Our Contract<span><img src="images/graphic.png"/></span></h2>
            <div className="row">
               <div className="col-md-12">
                  <form className="contact-form">
                     <div className="row">
                        <div className="col-sm-6">
                           <input type="text" className="form-control" placeholder="First Name"/>
                        </div>
                        <div className="col-sm-6">
                           <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                        <div className="col-sm-6">
                           <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="col-sm-6">
                           <input type="tel" className="form-control" placeholder="Phone Number"/>
                        </div>
                        <div className="col-sm-12">
                           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Worksite Address"></textarea>
                        </div>
                        <div className="col-sm-12">
                           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Home Address"></textarea>
                        </div>
                        <div className="col-sm-6">
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Piece of Equipment desired</option>
                            <option value="1">John Deere 35 G Excavator</option>
                            <option value="2">Kubota Tractor L2501</option>
                            <option value="3">15 DUMP TRAILER</option>
                          </select>
                        </div>
                        <div className="col-sm-6 padding-zero">
                          <div className="row margin-zero">
                            <label htmlFor="inputEmail3" className="col-sm-5 col-form-label">Date looking to rent</label>
                            <div className="col-sm-7">
                              <input type="date" className="form-control" placeholder="Date looking to rent"/>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                           <input type="text" className="form-control" placeholder="Number of days needed"/>
                        </div>
                        <div className="col-sm-6">
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Need Delivery</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                          </select>
                        </div>
                        <div className="equipment-box">
                          <button type="submit" className="btn btn-style">Submit</button>
                        </div>
                        
                     </div>
                  </form>
                  
                     
                 
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

export default Contract