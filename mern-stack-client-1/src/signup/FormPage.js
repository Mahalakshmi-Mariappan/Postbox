import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/loginStyle.css';
import usePrompt from '../usePrompt';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function FormPage() {
  const [isFormDirty, setIsFormDirty] = useState(false);
  const navigate = useNavigate();

  usePrompt('You have unsaved changes, do you really want to leave?', isFormDirty);

  const handleInputChange = () => {
    setIsFormDirty(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    setIsFormDirty(false);
    navigate('/Login'); // Navigate to the Login page after form submission
  };

  return (
    <section className="custom-section">
      <div className="container-md h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="Sample" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-outline mb-4">
                <input type="text" id="form3Example2" className="form-control form-control-lg"
                  placeholder="Enter your Name" required onChange={handleInputChange} />
                <label className="form-label" htmlFor="form3Example2">Name</label>
              </div>
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-lg"
                  placeholder="Enter a valid email address" required onChange={handleInputChange} />
                <label className="form-label" htmlFor="form3Example3">Email Address</label>
              </div>

              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                  placeholder="Enter password" required onChange={handleInputChange} />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              <div className="form-outline mb-3">
                <input type="password" id="form3Example5" className="form-control form-control-lg"
                  placeholder="Enter Confirm password" required onChange={handleInputChange} />
                <label className="form-label" htmlFor="form3Example5">Confirm Password</label>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    I agree all Statements in the <a href="#!" className="link-danger">Terms of Service</a>
                  </label>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Submit</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  <a href="/Login" className="link-danger">I am already a Member</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormPage;
