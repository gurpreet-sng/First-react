import React from 'react'
import Navbar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <section className="available-equipment-section">
                <div className="container">
                    <h2 className="section-title">Available Equipment<span><img src="images/graphic.png"/></span></h2>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="equipment-box">
                        <div className="equipment-image"><img src="images/equipment1.jpg"/></div>
                        <h3>John Deere 35 G Excavator 8200 lb with thumb on bucket very low hours.</h3>
                            <Link className="btn btn-style" to="/Contract">Book Excavator</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="equipment-box">
                        <div className="equipment-image"><img src="images/equipment2.jpg"/></div>
                        <h3>Kubota Tractor Model L2501 Includes Grapple, Bucket, Box Blade etc.</h3>
                            <Link className="btn btn-style" to="/Contract">Book Tractor</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="equipment-box">
                        <div className="equipment-image"><img src="images/equipment3.jpg"/></div>
                        <h3>Triple Crown Dump Trailer With 4 Ft High Walls | 15 Yard (7’ X 14’)</h3>
                            <Link className="btn btn-style" to="/Contract">Book Dump Trailer</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="about-section services-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="about-vdo">
                    <img src="images/ww.jpg"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-description">
                    <h5>SERVICES</h5>
                    <h4>If you prefer having a professional company doing the job instead of renting equipment and doing it yourself, we also offer Services on Light excavator work.</h4>
                    <ul>
                        <li><i><img src="images/arr-right.png"/></i><p>Light Land Clearing</p></li>
                        <li><i><img src="images/arr-right.png"/></i><p>Stump Removal</p></li>
                        <li><i><img src="images/arr-right.png"/></i><p>Single Tree Removal</p></li>
                        <li><i><img src="images/arr-right.png"/></i><p>Debris Removal</p></li>
                        <li><i><img src="images/arr-right.png"/></i><p>Digging and more</p></li>
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
                    <h4><span>Southpaw Equipment rental</span> is great for Contractors small homeowners and handymen to tackle small to medium residential projects. </h4>
                    <p> With our low overhead we can rent and deliver the equipment at very competitive rates.</p>
                    <p>We deliver all equipment : free within 25 miles if equipment is rented for at least 3 days.</p>
                    <h6>Call today for a free quote:   352-266-7758 ask for Jamie</h6>
                        <Link className="btn btn-style" to="/Contract">Book Excavator</Link>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <div className="testimonials-section">
            <h2 className="section-title">What Clients Says About Us<span><img src="images/white-graphic.png"/></span></h2>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
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
            <Footer></Footer>
        </div>
    )
}

export default Home