import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <header className="header-wrapper">
              <div className="container">
                <nav className="navbar navbar-expand-md">
                  <div className="container-fluid">

                    
                    <Link to="/"><img src="images/logo.png"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/About">About</Link>
                          
                        </li>
                        <li className="nav-item">
                        <Link to="/contract">Book Equipment</Link>
                          
                        </li>
                        <li className="nav-item">
                        <Link to="/Testimonials">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/Services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact">Contact</Link>
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