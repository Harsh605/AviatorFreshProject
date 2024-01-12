import React from 'react'

const ForgotPassword = () => {
  return (


    <body className="bg-forgot">
      <div className="wrapper">
        <div className="authentication-forgot d-flex align-items-center justify-content-center">
          <div className="card shadow-lg forgot-box">
            <div className="cards-body p-md-5">
              <div className="text-center">
                <img src="assets/images/icons/forgot-2.png" width={140} alt />
              </div>
              <h4 className="mt-5 font-weight-bold">Forgot Password?</h4>
              <p className="text-muted">Enter your registered email ID to reset the password</p>
              <div className="mb-3 mt-4">
                <label className="form-label">Email id</label>
                <input type="text" className="form-control form-control-lg radius-30" placeholder="example@user.com" />
              </div>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-primary btn-lg radius-30">Send</button>
                <a href="authentication-login.html" className="btn btn-light radius-30"><i className="bx bx-arrow-back mr-1" />Back to Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default ForgotPassword
