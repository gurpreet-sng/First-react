import React from 'react'

function Footer(){
    return(
        <div>
            <footer className="footer-wrapper">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="footer-logo"><img src="images/logo.png"/></div>
                    </div>
                    <div className="col-md-4">
                        <div className="social-icons">
                        <ul>
                            <li><a href="#"><img src="images/fb.png"/></a></li>
                            <li><a href="#"><img src="images/tw.png"/></a></li>
                            <li><a href="#"><img src="images/ut.png"/></a></li>
                            <li><a href="#"><img src="images/insta.png"/></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-4"><div className="copyright"><p>© 2021  Southpaw Equipment Rental</p></div></div>
                    </div>
                </div>
            </footer>
    
            <div className="modal modal-style fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Watch our video</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <iframe src="https://www.youtube.com/embed/LOcJgbzZYyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer