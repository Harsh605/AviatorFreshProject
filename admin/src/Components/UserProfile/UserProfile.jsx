import React from "react";
import "../Sidebar/Sidebar.css";
import { Fade } from "react-reveal";

const UserProfile = () => {
  return (
    <>
      <Fade top distance="2%" duration={700}>
        <div className="page-wrapper">
          {/*page-content-wrapper*/}
          <div className="page-content-wrapper">
            <div className="page-content">
              {/*breadcrumb*/}
              <div className="page-breadcrumb d-none d-md-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">User Profile</div>
                <div className="ps-3">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:;">
                          <i className="bx bx-home-alt" />
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        User Profile
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="ms-auto">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary">
                      Settings
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary bg-split-primary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                      {" "}
                      <a className="dropdown-item" href="javascript:;">
                        Action
                      </a>
                      <a className="dropdown-item" href="javascript:;">
                        Another action
                      </a>
                      <a className="dropdown-item" href="javascript:;">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />{" "}
                      <a className="dropdown-item" href="javascript:;">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*end breadcrumb*/}
              <div className="user-profile-page">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="row">
                      <div className="col-12 col-lg-7 border-right">
                        <div className="d-md-flex align-items-center">
                          <div className="mb-md-0 mb-3">
                            <img
                              src="assets/images/avatars/avatar-1.png"
                              className="rounded-circle shadow"
                              width={130}
                              height={130}
                              alt
                            />
                          </div>
                          <div className="ms-md-4 flex-grow-1">
                            <div className="d-flex align-items-center mb-1">
                              <h4 className="mb-0">Michle Clark</h4>
                              <p className="mb-0 ms-auto">$44/hr</p>
                            </div>
                            <p className="mb-0 text-muted">Sr. Web Developer</p>
                            <p className="text-primary">
                              <i className="bx bx-buildings" /> Epic Coders
                            </p>
                            <div style={{ display: "flex", gap: "10px" }}>
                              <button
                                style={{ background: "#673AB7" }}
                                type="button"
                                className="btn btn-primary"
                              >
                                Edit Image
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary ml-2"
                              >
                                Resume
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <table className="table table-sm table-borderless mt-md-0 mt-3">
                          <tbody>
                            <tr>
                              <th>Availability:</th>
                              <td>
                                Full-time (40hr/wk){" "}
                                <span className="badge badge-success">
                                  available
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th>Age:</th>
                              <td>27</td>
                            </tr>
                            <tr>
                              <th>Location:</th>
                              <td>Sankt, Petersburg, Russia</td>
                            </tr>
                            <tr>
                              <th>Years experience:</th>
                              <td>6</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="mb-3 mb-lg-0">
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-link"
                          >
                            <i className="bx bxl-github" />
                          </a>
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-link"
                          >
                            <i className="bx bxl-twitter" />
                          </a>
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-link"
                          >
                            <i className="bx bxl-facebook" />
                          </a>
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-link"
                          >
                            <i className="bx bxl-linkedin" />
                          </a>
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-link"
                          >
                            <i className="bx bxl-dribbble" />
                          </a>
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-link"
                          >
                            <i className="bx bxl-stack-overflow" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end row*/}
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" data-bs-toggle="tab">
                          <span className="p-tab-name">Edit Profile</span>
                          <i className="bx bx-message-edit font-24 d-sm-none" />
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content mt-3">
                      <div
                        className="tab-pane fade show active"
                        id="Edit-Profile"
                      >
                        <div className="card shadow-none border mb-0 radius-15">
                          <div className="cards-body">
                            <div className="form-body">
                              <div className="row">
                                <div className="col-12 col-lg-5 border-right">
                                  <form className="row g-3">
                                    <div className="col-6">
                                      <label className="form-label">
                                        First Name
                                      </label>
                                      <input
                                        type="text"
                                        defaultValue="Svetlana"
                                        className="form-control"
                                      />
                                    </div>
                                    <div className="col-6">
                                      <label className="form-label">
                                        Last Name
                                      </label>
                                      <input
                                        type="text"
                                        defaultValue="Anyukova"
                                        className="form-control"
                                      />
                                    </div>
                                    <div className="col-12">
                                      <label className="form-label">
                                        Password
                                      </label>
                                      <input
                                        type="password"
                                        defaultValue={1234560000}
                                        className="form-control"
                                      />
                                    </div>
                                    <div className="col-12">
                                      <label className="form-label">
                                        Email
                                      </label>
                                      <input
                                        type="text"
                                        defaultValue="svetlana1997@example.com"
                                        className="form-control"
                                      />
                                    </div>
                                    <div className="col-12">
                                      <label className="form-label">
                                        Phone
                                      </label>
                                      <input
                                        type="text"
                                        defaultValue="99-10-XXX-XXX"
                                        className="form-control"
                                      />
                                    </div>
                                    <div className="col-12">
                                      <label className="form-label">
                                        Address
                                      </label>
                                      <input
                                        type="text"
                                        defaultValue="116-B, Cutela Colony, Sydney, Australia"
                                        className="form-control"
                                      />
                                    </div>
                                    <div className="col-12">
                                      <label className="form-label">
                                        Nation
                                      </label>
                                      <input
                                        type="text"
                                        defaultValue="Australia"
                                        className="form-control"
                                      />
                                    </div>
                                  </form>
                                </div>
                                <div className="col-12 col-lg-7">
                                  <form className="row g-3">
                                    <div className="col-12">
                                      <label className="form-label">
                                        Gender
                                      </label>
                                      <select className="form-control">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                      </select>
                                    </div>
                                    <div className="col-12">
                                      <label className="form-label">
                                        Language
                                      </label>
                                      <select className="form-control">
                                        <option>English</option>
                                        <option>German</option>
                                        <option>French</option>
                                      </select>
                                    </div>
                                    <div className="col-12">
                                      <p className="mb-0">Date of Birth</p>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                      <select className="form-control">
                                        <option>January</option>
                                        <option>February</option>
                                        <option selected>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                      </select>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                      <select className="form-control">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                        <option>06</option>
                                        <option>07</option>
                                        <option>08</option>
                                        <option>09</option>
                                        <option selected>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                      </select>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                      <select className="form-control">
                                        <option>1990</option>
                                        <option>1991</option>
                                        <option>1992</option>
                                        <option selected>1993</option>
                                        <option>1994</option>
                                      </select>
                                    </div>
                                    <div className="col-12">
                                      <label className="form-label">
                                        Twitter
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="https://twitter.com/anyukova"
                                      />
                                    </div>
                                    <div className="col-12">
                                      <label className="form-label">
                                        Linked In
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="https://www.linkedin.com/anyukova/"
                                      />
                                    </div>
                                    <div className="col-12">
                                      <label className="form-label">
                                        Facebook
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="https://www.facebook.com/anyukova"
                                      />
                                    </div>
                                    {/*
                                                          <div className="col-12">
                                                              <label className="form-label">Dribbble</label>
                                                              <input type="text" className="form-control" value="https://dribbble.com/anyukova/">
                                                          </div>
                                                          <div className="col-12">
                                                              <label className="form-label">Slogan</label>
                                                              <input type="text" className="form-control" value="Land Acquisition Specialist">
                                                          </div>
                                                          <div className="col-12 col-lg-6">
                                                              <div className="card shadow-none border mb-3 mb-md-0">
                                                                  <div className="card-body">
                                                                      <div className="d-flex align-items-center">
                                                                          <img src="assets/images/icons/credit-card-visa.png" width="50" alt="">
                                                                          <div className="ms-2">
                                                                              <h6 className="mb-0">Visa...8759</h6>
                                                                              <p className="mb-0">Expires 06/21</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div className="card-footer bg-transparent text-right"> <a href="javascript:;" className="text-danger">REMOVE</a>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                           
                                                          <div className="col-12 col-lg-6">
                                                              <div className="card shadow-none border mb-0">
                                                                  <div className="card-body">
                                                                      <div className="d-flex align-items-center">
                                                                          <img src="assets/images/icons/mastercard-2.png" width="50" alt="">
                                                                          <div className="ms-2">
                                                                              <h6 className="mb-0">Master...8314</h6>
                                                                              <p className="mb-0">Expires 08/24</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div className="card-footer bg-transparent text-right"> <a href="javascript:;" className="text-danger">REMOVE</a>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          */}
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end page-content-wrapper*/}
            </div>
            {/*end page-wrapper*/}
            {/*start overlay*/}
            <div className="overlay toggle-btn-mobile" />
            {/*end overlay*/}
            {/*Start Back To Top Button*/}
            <a href="javaScript:;" className="back-to-top">
              <i className="bx bxs-up-arrow-alt" />
            </a>
            {/*End Back To Top Button*/}
            {/*footer */}
            <div className="footer">
              <p className="mb-0">
                Syndash @2020 | Developed By :{" "}
                <a
                  href="https://themeforest.net/user/codervent"
                  target="_blank"
                >
                  codervent
                </a>
              </p>
            </div>
            {/* end footer */}
          </div>
        </div>
      </Fade>
    </>
  );
};

export default UserProfile;
