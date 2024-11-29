import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './loginStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS import
import { useForm } from 'react-hook-form';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = (data) => {
    // Login logic
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Navigate to="/components/PostMessages" replace />;
  }

  

  return (
    <section className="custom-section">
          <div className="container-md h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="https://www.onlineexammaker.com/img/new-images/features/pre-hirebanner.webp" className="img-fluid" alt="Sample" />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={handleSubmit(handleLogin)}>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
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
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                      placeholder="Enter a valid email address" {...register('email', { required: true })}/>
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    { errors.email && <span className="text-danger">This field is required</span>}
                  </div>

                  <div className="form-outline mb-3">
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                      placeholder="Enter password"  {...register('password', { required: true })} />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    {errors.password && <span className="text-danger">This field is required</span>}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                      <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg"
                      style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/FormPage"
                      className="link-danger">Register</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </section>
  );
}

export default Login;
