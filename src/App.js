import logo from './logo.svg';
import './App.css';
import Test from './Test'
function App() {
  let data = "anil sidhu";
  function apple(){
    data = "peter";
    alert(data);
  }
  return (
    <div>
        <header>
            <div className="top-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 no-padding">
                            <div className="email-and-home">
                                <div className="home-link"><a href="#"><i className="bi bi-house-door-fill"></i></a></div>
                                <div className="email-link">
                                    <a href="mailto:info@yourbettercare.com.au"> info@yourbettercare.com.au</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 no-padding">
                            <div className="phone-contact">
                                <div className="phone-link">
                                    <a href="tel:+61 466 355 650"><i className="bi bi-headset"></i> +61 466 355 650</a>
                                </div>
                                <div className="contact-us-link">
                                    <a href="contact-us.html">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spaceleft-right">
                <nav className="navbar navbar-expand-md navbar-dark mb-4">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html"><img src="images/logoimg.png"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">NDIS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="services.html">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="make-a-referral.html">Make A Referral</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="gallery.html">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact-us.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <section className="banner-section-wrapper">
            <div className="container p-0">
                <div className="owl-one owl-carousel owl-theme">
                    <div className="item">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-box">
                                    <h6>Your Better Care</h6>
                                    <h2>Empowering You Through Comprehensive Care</h2>
                                    <p>Your Better Care is a dedicated organisation providing dependable and comprehensive care to the individuals with disabilities. We work on a holistic approach with our participants to enhance their full potential of life.</p>
                                    <a href="" className="btn">Talk To Us Today</a>
                                </div>
                                <div className="ilove"><img src="images/heart.png" className="img-fluid"/></div>
                            </div>
                            <div className="banner-image">
                                <img src="images/banner-image.jpg" className="img-fluid" alt="banner-image"/>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-box">
                                    <h6>Your Better Care</h6>
                                    <h2>Empowering You Through Comprehensive Care</h2>
                                    <p>Your Better Care is a dedicated organisation providing dependable and comprehensive care to the individuals with disabilities. We work on a holistic approach with our participants to enhance their full potential of life.</p>
                                    <a href="" className="btn">Talk To Us Today</a>
                                </div>
                                <div className="ilove"><img src="images/heart.png" className="img-fluid"/></div>
                            </div>
                            <div className="banner-image">
                                <img src="images/banner-image.jpg" className="img-fluid" alt="banner-image"/>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-box">
                                    <h6>Your Better Care</h6>
                                    <h2>Empowering You Through Comprehensive Care</h2>
                                    <p>Your Better Care is a dedicated organisation providing dependable and comprehensive care to the individuals with disabilities. We work on a holistic approach with our participants to enhance their full potential of life.</p>
                                    <a href="" className="btn">Talk To Us Today</a>
                                </div>
                                <div className="ilove"><img src="images/heart.png" className="img-fluid"/></div>
                            </div>
                            <div className="banner-image">
                                <img src="images/banner-image.jpg" className="img-fluid" alt="banner-image"/>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-box">
                                    <h6>Your Better Care</h6>
                                    <h2>Empowering You Through Comprehensive Care</h2>
                                    <p>Your Better Care is a dedicated organisation providing dependable and comprehensive care to the individuals with disabilities. We work on a holistic approach with our participants to enhance their full potential of life.</p>
                                    <a href="" className="btn">Talk To Us Today</a>
                                </div>
                                <div className="ilove"><img src="images/heart.png" className="img-fluid"/></div>
                            </div>
                            <div className="banner-image">
                                <img src="images/banner-image.jpg" className="img-fluid" alt="banner-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="intro-text">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <p className="text-center">Our friendly consultants make sure that quality and friendly services are provided to each of our esteemed participants. Quality is of utmost importance. We ensure that premium support is provided to meet our participant’s individual needs.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="colorfull-boxes">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 no-padding darkgreen">
                        <div className="color-box">
                            <h5>Our Mission</h5>
                            <ul className="list-style">
                                <li>Empowering and enabling individuals in their aging journey and those with disabilities to improve their quality of life with dignity and respect.</li>
                                <li>Surpassing stakeholders' expectations through continuous evaluation and enhancement.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 no-padding bluecolor">
                        <div className="color-box">
                            <h5>Our Vision</h5>
                            <p>Your Better Care's envisions fostering a resilient and empowered community through collaborative partnerships to enhance the lives of individuals with disabilities, enabling them to lead fulfilling lives with a range of choices.</p>
                        </div>
                    </div>
                    <div className="col-md-3 no-padding greencolor">
                        <div className="color-box">
                            <h5>Our Values</h5>
                            <ul className="list-style">
                                <li>Respect</li>
                                <li>Dignity</li>
                                <li>Integrity</li>
                                <li>Innovation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 no-padding purplecolor">
                        <div className="color-box">
                            <h5>Accountability & Operational Excellence</h5>
                            <p>We take responsibility for every decision and action, and we are dedicated to fostering a culture of continuous learning.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="aboutus-section top-bottom-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-box section-text">
                            <h6>Welcome to</h6>
                            <h2>Your Better Care Community Services</h2>
                            <p>Your Better Care was started with an intent to provide compassionate care that not only empowers, but also revives hope among those requiring care and support. We believe in walking our talk, as our work goes beyond mere business. Our team of certified employees has extensive experience in dealing with disabled and specially-abled people and children. We revel when we are able to enable our clients develop skills and capabilities that allow them to live with dignity and independence.</p>
                            <a href="#" className="btn redbtn">Discover More<i><img src="images/arrright.png"/></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div><img src="images/abt.jpg" className="img-fluid" alt="banner-image"/></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="our-services-wrapper">
            <div className="section-title text-center">
                <h2>Our Services</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <a href="maintain-employment.html" className="service-box">
                            <div className="service-image"><img src="images/s1.jpg" className="img-fluid" alt="banner-image"/></div>
                            <div className="service-title">
                                <h2>Assist Access / Maintain Employment</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="life-stage-transition.html" className="service-box">
                            <div className="service-image"><img src="images/s2.jpg" className="img-fluid" alt="banner-image"/></div>
                            <div className="service-title">
                                <h2>Assist-Life Stage Transition</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="personal-activities.html" className="service-box">
                            <div className="service-image"><img src="images/s3.jpg" className="img-fluid" alt="banner-image"/></div>
                            <div className="service-title">
                                <h2>Assist-Personal Activities</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="travel-transport.html" className="service-box">
                            <div className="service-image"><img src="images/s4.jpg" className="img-fluid" alt="banner-image"/></div>
                            <div className="service-title">
                                <h2>Assist - Travel / Transport</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="daily-tasks.html" className="service-box">
                            <div className="service-image"><img src="images/s5.jpg" className="img-fluid" alt="banner-image"/></div>
                            <div className="service-title">
                                <h2>Daily Tasks / Shared Living</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="community-participation.html" className="service-box">
                            <div className="service-image"><img src="images/s6.jpg" className="img-fluid" alt="banner-image"/></div>
                            <div className="service-title">
                                <h2>Innovative Community Participation</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-12">
                        <div className="text-center">
                            <a href="services.html" className="btn redbtn">View All Services<i><img src="images/arrright.png"/></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="videos-section-wrapper top-bottom-space">
            <div className="text-center video-title">
                <h6>Your Better Care</h6>
                <h2>Exclusive Programs & Services: The Best<br/> Healthcare Experience</h2>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6">
                        <div className="video-wrapper">
                            <div className="highlights-video">
                                <iframe src="https://www.youtube.com/embed/FGwdRWTw5xw"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                                    gyroscope; picture-in-picture;
                                    web-share"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="video-wrapper">
                            <div className="highlights-video">
                                <iframe src="https://www.youtube.com/embed/FGwdRWTw5xw"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                                    gyroscope; picture-in-picture;
                                    web-share"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5">
                        <div className="text-center">
                            <a href="#" className="btn redbtn bluebtn">Discover Your Better Care<i><img src="images/arrblue.png"/></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="who-qualifies-section top-bottom-space">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <h2>Who Qualifies for<br/> 
                            the NDIS?
                        </h2>
                        <h6>If you want to receive NDIS help, you must:</h6>
                        <div className="list-style">
                            <ul>
                                <li>Possess a protected special category visa, be an Australian citizen, or be a permanent resident of Australia.</li>
                                <li>Be between the ages of 7 and 65</li>
                                <li>Have a serious, ongoing disability that affects your capacity to engage in activities of daily living OR need ongoing assistance to lessen your future needs</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="qualifies-image"><img src="images/qualifies.png" className="img-fluid" alt="banner-image"/></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog-section-wrapper top-bottom-space">
            <div className="container">
                <div className="row mb-4">
                    <div className="video-title">
                        <h6>Your Better Care</h6>
                        <h2>Latest News & Blogs</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="blog-box">
                            <div className="blog-img"><img src="images/blog1.jpg" className="img-fluid" alt="banner-image"/></div>
                            <div className="blog-date"><i className="bi bi-clock"></i> Jan 11, 2024</div>
                            <p>Amet quis nisi, faucibus sit pulvinar in et. Urna cursus eleifend hac vitae fusce.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="blog-box">
                            <div className="blog-img"><img src="images/blog1.jpg" className="img-fluid" alt="banner-image"/></div>
                            <div className="blog-date"><i className="bi bi-clock"></i> Jan 11, 2024</div>
                            <p>Amet quis nisi, faucibus sit pulvinar in et. Urna cursus eleifend hac vitae fusce.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="blog-box">
                            <div className="blog-img"><img src="images/blog1.jpg" className="img-fluid" alt="banner-image"/></div>
                            <div className="blog-date"><i className="bi bi-clock"></i> Jan 11, 2024</div>
                            <p>Arcu, sed ac, gravida quam tincidunt. Sed amet id lectus non semper lacus diam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tes-section-wrapper top-bottom-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5">
                        <div className="tes-content">
                            <h4>We are committed to offer you a high standard of care.</h4>
                            <h3><sub>+61</sub> 466 355 650</h3>
                            <div className="text-left">
                                <a href="#" className="btn redbtn mt-4">Contact us<i><img src="images/arrright.png"/></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tes-box light-blue text-center">
                                    <div className="tes-img"><img src="images/tes1.jpg" className="img-fluid" alt="banner-image"/></div>
                                    <h3>Jasmine Thompson</h3>
                                    <p>Massa, rhoncus ut orci eget. Amet,neque aliquet sapien adipiscing lacinia malesuada purus dictum.</p>
                                    <div className="comma"><img src="images/comma.png"/></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tes-box dark-blue text-center">
                                    <div className="tes-img"><img src="images/tes1.jpg" className="img-fluid" alt="banner-image"/></div>
                                    <h3>Jasmine Thompson</h3>
                                    <p>Massa, rhoncus ut orci eget. Amet,neque aliquet sapien adipiscing lacinia malesuada purus dictum.</p>
                                    <div className="comma"><img src="images/comma2.png"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="social-media-section">
            <div className="container">
                <div className="row">
                    <div className="video-title text-center mb-4">
                        <h6>SOCIAL MEDIA</h6>
                        <h2>Your Better Care in the media</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="social-image"><img src="images/so1.jpg" className="img-fluid" alt="banner-image"/></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="social-image"><img src="images/so2.jpg" className="img-fluid" alt="banner-image"/></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="social-image"><img src="images/so3.jpg" className="img-fluid" alt="banner-image"/></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="social-image"><img src="images/so4.jpg" className="img-fluid" alt="banner-image"/></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="social-image"><img src="images/so6.jpg" className="img-fluid" alt="banner-image"/></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="social-media-icons">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="social-icon"><i className="bi bi-instagram"></i></div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="social-icon"><i className="bi bi-facebook"></i></div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="social-icon"><i className="bi bi-youtube"></i></div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="social-icon"><i className="bi bi-linkedin"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className="footer-section-wrapper top-bottom-space space-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-logo"><a href="index.html"><img src="images/yourbetter.png" className="img-fluid"/></a></div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-content">
                                <div className="footer-title">
                                    <h3><a href="tel:+61 466 355 650">+61 466 355 650</a></h3>
                                </div>
                                <p><a href="mailto:info@yourbettercare.com.au">info@yourbettercare.com.au</a></p>
                                <h6>Office Hours</h6>
                                <p>Mon to Fri<br/>
                                    09:00 AM - 05:00 PM
                                </p>
                                <div className="tw-seven"><img src="images/247.png" className="img-fluid"/></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-content">
                                <div className="footer-title">
                                    <h3>Address</h3>
                                </div>
                                <a href="https://maps.app.goo.gl/Zpmk75cKwNUYhJh88" target="_blank">
                                    <h6>Your Better Care</h6>
                                    <p>Melbourne, Victoria,<br/> Australia</p>
                                </a>
                                <div className="footer-logos">
                                    <div className="tw-seven"><img src="images/ndis.png" className="img-fluid"/></div>
                                    <div className="tw-seven"><img src="images/flags.png" className="img-fluid"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-content footer-links">
                                <div className="footer-title">
                                    <h3>Navigation</h3>
                                </div>
                                <p><a href="about.html">About</a></p>
                                <p><a href="#">NDIS</a></p>
                                <p><a href="services.html">Services</a></p>
                                <p><a href="make-a-referral.html">Make A Referral</a></p>
                                <p><a href="gallery.html">Gallery</a></p>
                                <p><a href="contact-us.html">Contact Us</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <p>Copyright © 2024 Your Better Care Community Service. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-5">
                            <div className="footer-links">
                                <ul>
                                    <li className="firstlink"><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
                integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS"
                crossorigin="anonymous"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="js/owl.carousel.min.js" type="text/javascript"></script>
            <script src="js/bootstrap-gallery.min.js"></script>
            <script src="js/include-html.min.js"></script>
           */}

        </footer>
    </div>
  );
}


export default App;
