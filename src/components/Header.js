import React from 'react'

function Header(){
    return(
        <div>
            <section className="banner-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <h1>Light Duty Equipment <span>Rental</span></h1>
                        <p>Southpaw Equipment rental is great for small homeowners and handymen<br/> to tackle small to medium residential projects. </p>
                        <div className="graphic"><img src="images/graphic.png"/></div>
                        <div className="button-group">
                        <a className="btn btn-style" href="#" role="button">Book Now</a>
                        <a className="btn btn-style" href="#" role="button">Our Equipment</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header