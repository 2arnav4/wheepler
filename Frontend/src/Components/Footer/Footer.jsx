const ContactUs = () => {
    return (
      <>
       
  
        {/* Footer Links Section */}
        <footer className="bg-white py-5 border-top">
          <div className="container">
            <div className="row">
              {/* Moglix Column */}
              <div className="col-md-2">
                <h6 className="fw-bold mb-3">Wheeptler</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-decoration-none text-muted small">About Us</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Careers</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Press</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Testimonials</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Blog</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Articles</a></li>
                </ul>
              </div>
  
              {/* Help Column */}
              <div className="col-md-2">
                <h6 className="fw-bold mb-3">Help</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-decoration-none text-muted small">Contact Us</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Track My Order</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Buying Guide</a></li>
                </ul>
              </div>
  
              {/* FAQs Column */}
              <div className="col-md-2">
                <h6 className="fw-bold mb-3">FAQs</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-decoration-none text-muted small">Order Tracking</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Cancellation and Return</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Refund</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Payment Option</a></li>
                </ul>
              </div>
  
              {/* Wheeptler's Own Column */}
              <div className="col-md-3">
                <h6 className="fw-bold mb-3">Wheeptler's Own</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-decoration-none text-muted small">Popular Searches</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Best Deals</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Online Assist</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Industry Store</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Top Buying Requirement</a></li>
                </ul>
              </div>
  
              {/* Miscellaneous Column */}
              <div className="col-md-3">
                <h6 className="fw-bold mb-3">Miscellaneous</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-decoration-none text-muted small">Bulk Enquiry</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Wheeptler Business</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Supplier Central</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">Credlix</a></li>
                  <li><a href="#" className="text-decoration-none text-muted small">DigiMRO</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  
        {/* Bottom Footer with Social Icons */}
        <footer className="bg-light py-4 border-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="text-muted mb-2 small">
                  <i className="bi bi-envelope-fill text-primary"></i> 
                  <a href="mailto:care@wheeptler.com" className="text-decoration-none text-primary ms-2">
                    care@wheeptler.com
                  </a>
                </p>
                <p className="text-muted small mb-0">
                  In case of any concern, mail us
                </p>
              </div>
              <div className="col-md-6 text-end">
                <div className="d-flex justify-content-end gap-2">
                  <a href="#" className="btn btn-primary btn-sm rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="btn btn-danger btn-sm rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-sm rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="btn btn-dark btn-sm rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="btn btn-warning btn-sm rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-blogger"></i>
                  </a>
                  <a href="#" className="btn btn-danger btn-sm rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="row mt-4 pt-3 border-top">
              <div className="col-12">
                <p className="text-muted text-center small mb-0">
                  <a href="#" className="text-decoration-none text-muted me-3">Terms of Use</a> | 
                  <a href="#" className="text-decoration-none text-muted mx-3">Copyright</a> | 
                  <a href="#" className="text-decoration-none text-muted mx-3">Privacy Policy</a> | 
                  <a href="#" className="text-decoration-none text-muted mx-3">Compliance</a>
                </p>
                <p className="text-muted text-center small mt-2 mb-0">
                  WHEEPTLER LABS (INDIA) PRIVATE LIMITED © 2025 Wheeptler.com. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
  
  export default ContactUs;
  