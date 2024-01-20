import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Log the email and password to the console
    console.log('Email:', email);
    console.log('Password:', password);
    // Add logic for actual authentication here
    // Once authenticated, you can navigate to another page
    // navigate('/dashboard'); // Example navigation

    // Clear the email and password fields after submission (optional)
    setEmail('');
    setPassword('');
  };



  return (
    <>
      <body className='bg-login'>

        <div className="wrapper">
          <div className="section-authentication-login d-flex align-items-center justify-content-center mt-4">
            <div className="row">
              <div className="col-12 col-lg-8 mx-auto">
                <div className="card radius-15 overflow-hidden">
                  <div className="row g-0">
                    <div className="col-xl-6">
                      <div className="cards-body p-5">
                        <div className="text-center">
                          <img src="/assets/images/aviator2.png" width={150} alt />
                          <h3 className="mt-4 font-weight-bold">Welcome Back</h3>
                        </div>

                        <div className>
                          <div className="form-body">
                           <form className="row g-3" onSubmit={handleLogin}>
        <div className="col-12">
          <label htmlFor="inputEmailAddress" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmailAddress"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputChoosePassword" className="form-label">
            Enter Password
          </label>
          <div className="input-group" id="show_hide_password">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control border-end-0"
              id="inputChoosePassword"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              href="javascript:;"
              onClick={togglePasswordVisibility}
              className="input-group-text bg-transparent"
            >
              <i
                className={
                  showPassword ? 'bx bx-show' : 'bx bx-hide'
                }
              />
            </a>
          </div>
        </div>
        <div className="col-12">
          <div style={{ marginTop: '20px' }} className="d-grid">
            <button type="submit" className="btn btn-primary">
              <i style={{ marginRight: '5px' }} className="bx bxs-lock-open" />Sign in
            </button>
          </div>
        </div>
      </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 bg-login-color d-flex align-items-center justify-content-center">
                      <img  src="assets/images/login-images2.webp" className="img-fluid" alt="..." />
                    </div>
                  </div>
                  {/*end row*/}
                </div>
              </div>
            </div>
          </div>
        </div>

      </body>

    </>
  )
}

export default Login
