import React, { useState } from 'react'
import '../Sidebar/Sidebar.css'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  // const [user, SetUser] = useState({
  //   name:'', sponserId:'', EmailAddress:'', Password:'',Select:''
  // })


  return (
    <body className='bg-register'>
      <div className="wrapper">
        <div className="section-authentication-register d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="card radius-15 overflow-hidden">
                <div className="row g-0">
                  <div className="col-xl-6">
                    <div className="card-body p-md-5">
                      <div className="text-center">
                        <img src="assets/images/logo-icon.png" width={80} alt />
                        <h3 className="mt-4 font-weight-bold">Create an Account</h3>
                      </div>
                      <div className>
                        {/* <div className="d-grid">
                          <a className="btn my-4 shadow-sm btn-white" href="javascript:;"> <span className="d-flex justify-content-center align-items-center">
                            <img className="me-2" src="assets/images/icons/search.svg" width={16} alt="Image Description" />
                            <span>Sign Up with Google</span>
                          </span>
                          </a>
                           <a href="javascript:;" className="btn btn-facebook"><i className="bx bxl-facebook me-1" />Sign Up with Facebook</a>
                        </div> */}
                        {/* <div className="login-separater text-center mb-4"> <span>OR SIGN UP WITH EMAIL</span>
                          <hr />
                        </div> */}
                        <div className="form-body">
                          <Formik initialValues={{
                            FullName: '', SponserId: '', Email: '', Password: '', Select: '', checkbox: ''
                          }}

                            validate={(values) => {
                              const errors = {};

                              if (!values.FullName) {
                                errors.FullName = ' Requaired !';
                              }

                              if (!values.Email) {
                                errors.Email = "Requaired !"
                              }
                              //  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) 
                              // {
                              //   errors.Email = 'The must a valid Email'
                              // }

                              if (!values.Password) {
                                errors.Password = "Requaired !"
                              }
                              else if (values.Password !== values.Password) {
                                errors.Password = 'Confirm Password must be equal to Password'
                              }

                              // if (!values.Select) {
                              //   errors.Select = "Requaired !"
                              // }

                              if (!values.checkbox) {
                                errors.checkbox = 'Requaired !'
                              }


                              return errors;
                            }}
                          // onSubmit={(values)=>{
                          //   console.log(values)
                          // }}

                          >

                            {(formik) => (
                              <form onSubmit={formik.handleSubmit} className="row g-3">
                                {console.log(formik)}
                                {/* {console.log(formik.errors)} */}

                                <div className="col-sm-6">
                                  <label htmlFor="inputFirstName" className="form-label"> Name</label>
                                  <input type="text" className="form-control" id="inputFirstName" name='FullName'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.FullName}
                                  />
                                  <span className='error_filed'>{formik.errors.FullName}</span>
                                </div>
                                <div className="col-sm-6">
                                  <label htmlFor="inputLastName" className="form-label">Sponser Id</label>
                                  <input type="text" className="form-control" id="inputLastName" name='SponserId'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.SponserId}
                                  />
                                </div>
                                <div className="col-12">
                                  <label htmlFor="inputEmailAddress" className="form-label">Email Address</label>
                                  <input type="email" name='Email' className="form-control" id="inputEmailAddress" placeholder="example@user.com"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.Email}
                                  />
                                  <span className='error_filed'>{formik.errors.Email}</span>
                                </div>
                                <div className="col-12">
                                  <label htmlFor="inputChoosePassword" className="form-label">Password</label>
                                  <div className="input-group" id="show_hide_password">
                                    <input type="password" name='Password' className="form-control border-end-0" id="inputChoosePassword" defaultValue={12345678} placeholder="Enter Password"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.Password}

                                    />
                                    <a className="input-group-text bg-transparent"><i className="bx bx-hide" /></a>
                                  </div>
                                  <span className='error_filed'>{formik.errors.Password}</span>
                                </div>
                                <div className="col-12">
                                  <label htmlFor="inputSelectCountry" className="form-label">Country</label>
                                  <select name='Select' className="form-select" id="inputSelectCountry" aria-label="Default select example"
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // value={formik.values.Select}
                                  >
                                    <option value={1}>India</option>
                                    <option value={2}>United Kingdom</option>
                                    <option value={3}>Dubai</option>
                                    <option value={4}>America</option>
                                  </select>
                                </div>
                                {/* <span className='error_filed'>{formik.errors.Select}</span> */}
                                <div className="col-12">
                                  <div className="form-check form-switch">
                                    <input name='checkbox' className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.checkbox}
                                    />
                                    <label className="form-check-label"


                                      htmlFor="flexSwitchCheckChecked">I read and agree to Terms &amp; Conditions</label>
                                  </div>
                                  <span className='error_filed'>{formik.errors.checkbox}</span>
                                </div>
                                <div className="col-12">
                                  <div className="d-grid">
                                    <button onClick={() => navigate('/Dashboard' || formik.handleSubmit)} type="submit" className="btn btn-primary"><i className="bx bx-user me-1" />Sign up</button>
                                    <div className="col-12 text-center">
                                <p>You have an account yet? <a style={{ cursor: 'pointer', color: '#0D6EFD' }} onClick={() => navigate('/Login')}>Login Now</a></p>
                              </div>
                                  </div>
                                </div>
                              </form>)}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 bg-login-color d-flex align-items-center justify-content-center">
                    <img src="assets/images/login-images/register-frent-img.jpg" className="img-fluid" alt="..." />
                  </div>
                </div>
                {/*end row*/}
              </div>
            </div>
          </div>
        </div>
      </div>

    </body>
  )
}

export default Register
