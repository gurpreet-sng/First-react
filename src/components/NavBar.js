import React from 'react'

function NavBar(){
    return(
        <div>
            <header className="header-wrapper">
              <div className="container">
                <nav className="navbar navbar-expand-md">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><img src="images/logo.png"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="about-us.html">About Us</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contract.html">Book Equipment</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="testimonials.html">Testimonials</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="services.html">Services</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        {/* <li>
                          <a className="btn btn-style" href="contract.html" role="button">Give Us A Shout</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
        </div>
        )
}

export default NavBar