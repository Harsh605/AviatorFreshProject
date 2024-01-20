import React, { useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "./ResponsiveNavbar";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="wrapper">
        <div className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div className>
              <img
                style={{marginLeft:"40px", width: "90px" }}
                src="/assets/images/aviator2.png"
                className="logo-icon-2"
                alt
              />
            </div>
            <div>
              <h4 className="logo-text"></h4>
            </div>
          </div>
          {/*navigation*/}
          <ul className="metismenu" id="menu">
            <li onClick={() => navigate("/Dashboard")}>
              <a>
                <div className="parent-icon icon-color-1">
                  <i className="bx bx-home-alt" />
                </div>
                <div className="menu-title">Dashboard</div>
              </a>
            </li>
            {/* <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon icon-color-1"><i className="bx bx-home-alt" />
                </div>
                <div  className="menu-title">Dashboard</div>
              </a>

            </li> */}
            <li onClick={() => navigate("/UserSection")}>
              <a style={{ textDecoration: "none" }} href="javascript:;">
                <div className="parent-icon icon-color-2">
                  <i className="bx bx-user"></i>
                </div>
                <div className="menu-title">User Section </div>
              </a>
            </li>

            <li onClick={() => navigate("/Recharge")}>
              <a>
                <div className="parent-icon icon-color-5">
                  <i className="bx bx-wallet"></i>
                </div>
                <div className="menu-title">Recharge</div>
              </a>
            </li>
            <li onClick={() => navigate("/Withdraw")}>
              <a>
                <div className="parent-icon icon-color-8">
                  <i className="bx bx-money-withdraw"></i>
                </div>
                <div className="menu-title">Withdrawal</div>
              </a>
            </li>
            <li onClick={() => navigate("/Allbet")}>
              <a>
                <div className="parent-icon icon-color-7">
                 
                  <i className="bx bxs-rocket"></i>
                </div>
                <div className="menu-title">All Bet</div>
              </a>
            </li>
            <li onClick={() => navigate("/Crashplanned")}>
              <a>
                <div className="parent-icon icon-color-6">
                <i className="bx bx-task" />
                </div>
                <div className="menu-title">Crashplaned</div>
              </a>
            </li>

            <li onClick={() => navigate("/Bank")}>
              <a>
                <div className="parent-icon icon-color-1">
                  <i className="bx bxs-bank"></i>
                </div>
                <div className="menu-title">Bank Setup</div>
              </a>
            </li>

            <li onClick={() => navigate("/Setting")}>
              <a>
                <div className="parent-icon icon-color-7">
                <i class='bx bx-cog'></i>
                </div>
                <div className="menu-title">Setting</div>
              </a>
            </li>
          </ul>
          {/*end navigation*/}
        </div>
        {/*end sidebar-wrapper*/}
        {/*header*/}
        <header className="top-header">
          <nav className="navbar navbar-expand">
            <div className="toggle-button">
              <TemporaryDrawer />
            </div>
            <div className="right-topbar ms-auto">
              <ul className="navbar-nav">
                {/* <li className="nav-item search-btn-mobile">
                  <a className="nav-link position-relative" href="javascript:;">
                    {" "}
                    <i className="bx bx-search vertical-align-middle" />
                  </a>
                </li> */}

                <li className="nav-item dropdown dropdown-user-profile">
                  <a
                    className="nav-link "
                    href="javascript:;"
                    data-bs-toggle="dropdown"
                  >
                    <div className="d-flex user-box align-items-center">
                      <div className="user-info">
                        <p className="user-name mb-0">Jessica Doe</p>
                        <p className="designattion mb-0">Available</p>
                      </div>
                      <img
                        src="assets/images/avatars/avatar-1.png"
                        className="user-img"
                        alt="user avatar"
                      />
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a
                      onClick={() => navigate("/ChangePassword")}
                      className="dropdown-item"
                      href="javascript:;"
                    >
                      <i className="bx bx-user" />
                      <span>Change Password</span>
                    </a>
                    <div className="dropdown-divider mb-0" />{" "}
                    <a
                      className="dropdown-item"
                      href="javascript:;"
                      onClick={() => navigate("/Login")}
                    >
                      <i className="bx bx-power-off" />
                      <span>Logout</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/*end header*/}
        {/*page-wrapper*/}

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
      </div>

      <div>{props.outlet}</div>

      <div className="switcher-body">
        <button
          className="btn btn-primary btn-switcher shadow-sm"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <i className="bx bx-cog bx-spin" />
        </button>
        <div
          className="offcanvas offcanvas-end shadow border-start-0 p-2"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex={-1}
          id="offcanvasScrolling"
        >
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
              Theme Customizer
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
            />
          </div>
          <div className="offcanvas-body">
            <h6 className="mb-0">Theme Variation</h6>
            <hr />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="lightmode"
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="lightmode">
                Light
              </label>
            </div>
            <hr />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="darkmode"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="darkmode">
                Dark
              </label>
            </div>
            <hr />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="darksidebar"
                defaultValue="option3"
                checked
              />
              <label className="form-check-label" htmlFor="darksidebar">
                Semi Dark
              </label>
            </div>
            <hr />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="ColorLessIcons"
                defaultValue="option4"
              />
              <label className="form-check-label" htmlFor="ColorLessIcons">
                Color Less Icons
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
