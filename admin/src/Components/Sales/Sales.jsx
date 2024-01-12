
import React from 'react'
import './Sales.css'

const Sales = () => {
  return (
    <div>

    <div className="wrapper">
    {/*sidebar-wrapper*/}
    <div className="sidebar-wrapper" data-simplebar="true">
      <div className="sidebar-header">
        <div className>
          <img src="assets/images/logo-icon.png" className="logo-icon-2" alt />
        </div>
        <div>
          <h4 className="logo-text">Syndash</h4>
        </div>
        <a href="javascript:;" className="toggle-btn ms-auto"> <i className="bx bx-menu" />
        </a>
      </div>
      {/*navigation*/}
      <ul className="metismenu" id="menu">
        <li>
          <a href="javascript:;" className="has-arrow">
            <div className="parent-icon icon-color-1"><i className="bx bx-home-alt" />
            </div>
            <div className="menu-title">Dashboard</div>
          </a>
          <ul>
            <li> <a href="index.html"><i className="bx bx-right-arrow-alt" />Analytics</a>
            </li>
            <li> <a href="index2.html"><i className="bx bx-right-arrow-alt" />Sales</a>
            </li>
          </ul>
        </li>
        <li className="menu-label">Web Apps</li>
        <li>
          <a href="emailbox.html">
            <div className="parent-icon icon-color-2"><i className="bx bx-envelope" />
            </div>
            <div className="menu-title">Email</div>
          </a>
        </li>
        <li>
          <a href="chat-box.html">
            <div className="parent-icon icon-color-3"> <i className="bx bx-conversation" />
            </div>
            <div className="menu-title">Chat Box</div>
          </a>
        </li>
        <li>
          <a href="file-manager.html">
            <div className="parent-icon icon-color-4"><i className="bx bx-archive" />
            </div>
            <div className="menu-title">File Manager</div>
          </a>
        </li>
        <li>
          <a href="contact-list.html">
            <div className="parent-icon icon-color-5"><i className="bx bx-group" />
            </div>
            <div className="menu-title">Contatcs</div>
          </a>
        </li>
        <li>
          <a href="to-do.html">
            <div className="parent-icon icon-color-6"><i className="bx bx-task" />
            </div>
            <div className="menu-title">Todo List</div>
          </a>
        </li>
        <li>
          <a href="invoice.html">
            <div className="parent-icon icon-color-7"><i className="bx bx-file" />
            </div>
            <div className="menu-title">Invoice</div>
          </a>
        </li>
        <li>
          <a href="fullcalender.html">
            <div className="parent-icon icon-color-8"> <i className="bx bx-calendar-check" />
            </div>
            <div className="menu-title">Calendar</div>
          </a>
        </li>
        <li className="menu-label">UI Elements</li>
        <li>
          <a href="widgets.html">
            <div className="parent-icon icon-color-9"><i className="bx bx-ghost" />
            </div>
            <div className="menu-title">Widgets</div>
          </a>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon icon-color-10"><i className="bx bx-spa" />
            </div>
            <div className="menu-title">Components</div>
          </a>
          <ul>
            <li> <a href="component-alerts.html"><i className="bx bx-right-arrow-alt" />Alerts</a>
            </li>
            <li> <a href="component-bedges.html"><i className="bx bx-right-arrow-alt" />Badge</a>
            </li>
            <li> <a href="component-buttons.html"><i className="bx bx-right-arrow-alt" />Buttons</a>
            </li>
            <li> <a href="component-cards.html"><i className="bx bx-right-arrow-alt" />Cards</a>
            </li>
            <li> <a href="component-carousels.html"><i className="bx bx-right-arrow-alt" />Carousel</a>
            </li>
            <li> <a href="component-acordians.html"><i className="bx bx-right-arrow-alt" />Acordians</a>
            </li>
            <li> <a href="component-list-groups.html"><i className="bx bx-right-arrow-alt" />List Groups</a>
            </li>
            <li> <a href="component-media-object.html"><i className="bx bx-right-arrow-alt" />Media Objects</a>
            </li>
            <li> <a href="component-modals.html"><i className="bx bx-right-arrow-alt" />Modal</a>
            </li>
            <li> <a href="component-navs.html"><i className="bx bx-right-arrow-alt" />Navs</a>
            </li>
            <li> <a href="components-navbar.html"><i className="bx bx-right-arrow-alt" />Navbar</a>
            </li>
            <li> <a href="component-paginations.html"><i className="bx bx-right-arrow-alt" />Pagination</a>
            </li>
            <li> <a href="component-popovers-tooltips.html"><i className="bx bx-right-arrow-alt" />Popovers &amp; Tooltips</a>
            </li>
            <li> <a href="component-progress-bars.html"><i className="bx bx-right-arrow-alt" />Progress</a>
            </li>
            <li> <a href="component-spinners.html"><i className="bx bx-right-arrow-alt" />Spinners</a>
            </li>
            <li> <a href="component-notifications.html"><i className="bx bx-right-arrow-alt" />Notifications</a>
            </li>
            <li> <a href="components-avtars-chips.html"><i className="bx bx-right-arrow-alt" />Avatrs &amp; Chips</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon icon-color-11"><i className="bx bx-repeat" />
            </div>
            <div className="menu-title">Content</div>
          </a>
          <ul>
            <li> <a href="content-grid-system.html"><i className="bx bx-right-arrow-alt" />Grid System</a>
            </li>
            <li> <a href="content-typography.html"><i className="bx bx-right-arrow-alt" />Typography</a>
            </li>
            <li> <a href="content-text-utilities.html"><i className="bx bx-right-arrow-alt" />Text Utilities</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon icon-color-12"> <i className="bx bx-donate-blood" />
            </div>
            <div className="menu-title">Icons</div>
          </a>
          <ul>
            <li> <a href="icons-line-icons.html"><i className="bx bx-right-arrow-alt" />Line Icons</a>
            </li>
            <li> <a href="icons-boxicons.html"><i className="bx bx-right-arrow-alt" />Boxicons</a>
            </li>
            <li> <a href="icons-feather-icons.html"><i className="bx bx-right-arrow-alt" />Feather Icons</a>
            </li>
          </ul>
        </li>
        <li className="menu-label">Forms &amp; Tables</li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon icon-color-1"> <i className="bx bx-comment-edit" />
            </div>
            <div className="menu-title">Forms</div>
          </a>
          <ul>
            <li> <a href="form-elements.html"><i className="bx bx-right-arrow-alt" />Form Elements</a>
            </li>
            <li> <a href="form-input-group.html"><i className="bx bx-right-arrow-alt" />Input Groups</a>
            </li>
            <li> <a href="form-layouts.html"><i className="bx bx-right-arrow-alt" />Forms Layouts</a>
            </li>
            <li> <a href="form-validations.html"><i className="bx bx-right-arrow-alt" />Form Validation</a>
            </li>
            <li> <a href="form-wizard.html"><i className="bx bx-right-arrow-alt" />Form Wizard</a>
            </li>
            <li> <a href="form-text-editor.html"><i className="bx bx-right-arrow-alt" />Text Editor</a>
            </li>
            <li> <a href="form-file-upload.html"><i className="bx bx-right-arrow-alt" />File Upload</a>
            </li>
            <li> <a href="form-date-time-pickes.html"><i className="bx bx-right-arrow-alt" />Date Pickers</a>
            </li>
            <li> <a href="form-select2.html"><i className="bx bx-right-arrow-alt" />Select2</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon icon-color-2"><i className="bx bx-grid-alt" />
            </div>
            <div className="menu-title">Tables</div>
          </a>
          <ul>
            <li> <a href="table-basic-table.html"><i className="bx bx-right-arrow-alt" />Basic Table</a>
            </li>
            <li> <a href="table-datatable.html"><i className="bx bx-right-arrow-alt" />Data Table</a>
            </li>
            <li> <a href="table-editable.html"><i className="bx bx-right-arrow-alt" />Editable Table</a>
            </li>
          </ul>
        </li>
        <li className="menu-label">Pages</li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon icon-color-3"><i className="bx bx-lock" />
            </div>
            <div className="menu-title">Authentication</div>
          </a>
          <ul>
            <li> <a href="authentication-login.html" target="_blank"><i className="bx bx-right-arrow-alt" />Login</a>
            </li>
            <li> <a href="authentication-register.html" target="_blank"><i className="bx bx-right-arrow-alt" />Register</a>
            </li>
            <li> <a href="authentication-forgot-password.html" target="_blank"><i className="bx bx-right-arrow-alt" />Forgot Password</a>
            </li>
            <li> <a href="authentication-reset-password.html" target="_blank"><i className="bx bx-right-arrow-alt" />Reset Password</a>
            </li>
            <li> <a href="authentication-lock-screen.html" target="_blank"><i className="bx bx-right-arrow-alt" />Lock Screen</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="user-profile.html">
            <div className="parent-icon icon-color-4"><i className="bx bx-user-circle" />
            </div>
            <div className="menu-title">User Profile</div>
          </a>
        </li>
        <li>
          <a href="timeline.html">
            <div className="parent-icon icon-color-5"> <i className="bx bx-video-recording" />
            </div>
            <div className="menu-title">Timeline</div>
          </a>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon icon-color-6"><i className="bx bx-error" />
            </div>
            <div className="menu-title">Errors</div>
          </a>
          <ul>
            <li> <a href="errors-404-error.html" target="_blank"><i className="bx bx-right-arrow-alt" />404 Error</a>
            </li>
            <li> <a href="errors-500-error.html" target="_blank"><i className="bx bx-right-arrow-alt" />500 Error</a>
            </li>
            <li> <a href="errors-coming-soon.html" target="_blank"><i className="bx bx-right-arrow-alt" />Coming Soon</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="faq.html">
            <div className="parent-icon icon-color-7"><i className="bx bx-help-circle" />
            </div>
            <div className="menu-title">FAQ</div>
          </a>
        </li>
        <li>
          <a href="pricing-table.html">
            <div className="parent-icon icon-color-8"><i className="bx bx-diamond" />
            </div>
            <div className="menu-title">Pricing</div>
          </a>
        </li>
        <li className="menu-label">Charts &amp; Maps</li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon icon-color-9"><i className="bx bx-line-chart" />
            </div>
            <div className="menu-title">Charts</div>
          </a>
          <ul>
            <li> <a href="charts-apex-chart.html"><i className="bx bx-right-arrow-alt" />Apex</a>
            </li>
            <li> <a href="charts-chartjs.html"><i className="bx bx-right-arrow-alt" />Chartjs</a>
            </li>
            <li> <a href="charts-highcharts.html"><i className="bx bx-right-arrow-alt" />Highcharts</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon icon-color-10"><i className="bx bx-map-alt" />
            </div>
            <div className="menu-title">Maps</div>
          </a>
          <ul>
            <li> <a href="map-google-maps.html"><i className="bx bx-right-arrow-alt" />Google Maps</a>
            </li>
            <li> <a href="map-vector-maps.html"><i className="bx bx-right-arrow-alt" />Vector Maps</a>
            </li>
          </ul>
        </li>
        <li className="menu-label">Others</li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon icon-color-11"><i className="bx bx-menu" />
            </div>
            <div className="menu-title">Menu Levels</div>
          </a>
          <ul>
            <li> <a className="has-arrow" href="javascript:;"><i className="bx bx-right-arrow-alt" />Level One</a>
              <ul>
                <li> <a className="has-arrow" href="javascript:;"><i className="bx bx-right-arrow-alt" />Level Two</a>
                  <ul>
                    <li> <a href="javascript:;"><i className="bx bx-right-arrow-alt" />Level Three</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://codervent.com/syndash/documentation/index.html" target="_blank">
            <div className="parent-icon icon-color-12"><i className="bx bx-folder" />
            </div>
            <div className="menu-title">Documentation</div>
          </a>
        </li>
        <li>
          <a href="https://themeforest.net/user/codervent" target="_blank">
            <div className="parent-icon"><i className="bx bx-support" />
            </div>
            <div className="menu-title">Support</div>
          </a>
        </li>
      </ul>
      {/*end navigation*/}
    </div>
    {/*end sidebar-wrapper*/}
    {/*header*/}
    <header className="top-header">
      <nav className="navbar navbar-expand">
        <div className="left-topbar d-flex align-items-center">
          <a href="javascript:;" className="toggle-btn">	<i className="bx bx-menu" />
          </a>
        </div>
        <div className="flex-grow-1 search-bar">
          <div className="input-group">
            <button className="btn btn-search-back search-arrow-back" type="button"><i className="bx bx-arrow-back" /></button>
            <input type="text" className="form-control" placeholder="search" />
            <button className="btn btn-search" type="button"><i className="lni lni-search-alt" /></button>
          </div>
        </div>
        <div className="right-topbar ms-auto">
          <ul className="navbar-nav">
            <li className="nav-item search-btn-mobile">
              <a className="nav-link position-relative" href="javascript:;">	<i className="bx bx-search vertical-align-middle" />
              </a>
            </li>
            <li className="nav-item dropdown dropdown-lg">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="javascript:;" data-bs-toggle="dropdown">	<span className="msg-count">6</span>
                <i className="bx bx-comment-detail vertical-align-middle" />
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a href="javascript:;">
                  <div className="msg-header">
                    <h6 className="msg-header-title">6 New</h6>
                    <p className="msg-header-subtitle">Application Messages</p>
                  </div>
                </a>
                <div className="header-message-list">
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-1.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Daisy Anderson <span className="msg-time float-end">5 sec
                            ago</span></h6>
                        <p className="msg-info">The standard chunk of lorem</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-2.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Althea Cabardo <span className="msg-time float-end">14
                            sec ago</span></h6>
                        <p className="msg-info">Many desktop publishing packages</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-3.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Oscar Garner <span className="msg-time float-end">8 min
                            ago</span></h6>
                        <p className="msg-info">Various versions have evolved over</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-4.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Katherine Pechon <span className="msg-time float-end">15
                            min ago</span></h6>
                        <p className="msg-info">Making this the first true generator</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-5.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Amelia Doe <span className="msg-time float-end">22 min
                            ago</span></h6>
                        <p className="msg-info">Duis aute irure dolor in reprehenderit</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-6.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Cristina Jhons <span className="msg-time float-end">2 hrs
                            ago</span></h6>
                        <p className="msg-info">The passage is attributed to an unknown</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-7.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">James Caviness <span className="msg-time float-end">4 hrs
                            ago</span></h6>
                        <p className="msg-info">The point of using Lorem</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-8.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Peter Costanzo <span className="msg-time float-end">6 hrs
                            ago</span></h6>
                        <p className="msg-info">It was popularised in the 1960s</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-9.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">David Buckley <span className="msg-time float-end">2 hrs
                            ago</span></h6>
                        <p className="msg-info">Various versions have evolved over</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-10.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Thomas Wheeler <span className="msg-time float-end">2 days
                            ago</span></h6>
                        <p className="msg-info">If you are going to use a passage</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-11.png" className="msg-avatar" alt="user avatar" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Johnny Seitz <span className="msg-time float-end">5 days
                            ago</span></h6>
                        <p className="msg-info">All the Lorem Ipsum generators</p>
                      </div>
                    </div>
                  </a>
                </div>
                <a href="javascript:;">
                  <div className="text-center msg-footer">View All Messages</div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown dropdown-lg">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="javascript:;" data-bs-toggle="dropdown">	<i className="bx bx-bell vertical-align-middle" />
                <span className="msg-count">8</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a href="javascript:;">
                  <div className="msg-header">
                    <h6 className="msg-header-title">8 New</h6>
                    <p className="msg-header-subtitle">Application Notifications</p>
                  </div>
                </a>
                <div className="header-notifications-list">
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="notify bg-light-primary text-primary"><i className="bx bx-group" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">New Customers<span className="msg-time float-end">14 Sec
                            ago</span></h6>
                        <p className="msg-info">5 new user registered</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="notify bg-light-danger text-danger"><i className="bx bx-cart-alt" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">New Orders <span className="msg-time float-end">2 min
                            ago</span></h6>
                        <p className="msg-info">You have recived new orders</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="notify bg-light-shineblue text-shineblue"><i className="bx bx-file" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">24 PDF File<span className="msg-time float-end">19 min
                            ago</span></h6>
                        <p className="msg-info">The pdf files generated</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="notify bg-light-cyne text-cyne"><i className="bx bx-send" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Time Response <span className="msg-time float-end">28 min
                            ago</span></h6>
                        <p className="msg-info">5.1 min avarage time response</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="notify bg-light-purple text-purple"><i className="bx bx-home-circle" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">New Product Approved <span className="msg-time float-end">2 hrs ago</span></h6>
                        <p className="msg-info">Your new product has approved</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="notify bg-light-warning text-warning"><i className="bx bx-message-detail" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">New Comments <span className="msg-time float-end">4 hrs
                            ago</span></h6>
                        <p className="msg-info">New customer comments recived</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="notify bg-light-success text-success"><i className="bx bx-check-square" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Your item is shipped <span className="msg-time float-end">5 hrs
                            ago</span></h6>
                        <p className="msg-info">Successfully shipped your item</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="notify bg-light-sinata text-sinata"><i className="bx bx-user-pin" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">New 24 authors<span className="msg-time float-end">1 day
                            ago</span></h6>
                        <p className="msg-info">24 new authors joined last week</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <div className="d-flex align-items-center">
                      <div className="notify bg-light-mehandi text-mehandi"><i className="bx bx-door-open" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="msg-name">Defense Alerts <span className="msg-time float-end">2 weeks
                            ago</span></h6>
                        <p className="msg-info">45% less alerts last 4 weeks</p>
                      </div>
                    </div>
                  </a>
                </div>
                <a href="javascript:;">
                  <div className="text-center msg-footer">View All Notifications</div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown dropdown-user-profile">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                <div className="d-flex user-box align-items-center">
                  <div className="user-info">
                    <p className="user-name mb-0">Jessica Doe</p>
                    <p className="designattion mb-0">Available</p>
                  </div>
                  <img src="assets/images/avatars/avatar-1.png" className="user-img" alt="user avatar" />
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="javascript:;"><i className="bx bx-user" /><span>Profile</span></a>
                <a className="dropdown-item" href="javascript:;"><i className="bx bx-cog" /><span>Settings</span></a>
                <a className="dropdown-item" href="javascript:;"><i className="bx bx-tachometer" /><span>Dashboard</span></a>
                <a className="dropdown-item" href="javascript:;"><i className="bx bx-wallet" /><span>Earnings</span></a>
                <a className="dropdown-item" href="javascript:;"><i className="bx bx-cloud-download" /><span>Downloads</span></a>
                <div className="dropdown-divider mb-0" /> <a className="dropdown-item" href="javascript:;"><i className="bx bx-power-off" /><span>Logout</span></a>
              </div>
            </li>
            <li className="nav-item dropdown dropdown-language">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                <div className="lang d-flex">
                  <div><i className="flag-icon flag-icon-um" />
                  </div>
                  <div><span>En</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="javascript:;"><i className="flag-icon flag-icon-de" /><span>German</span></a>
                <a className="dropdown-item" href="javascript:;"><i className="flag-icon flag-icon-fr" /><span>French</span></a>
                <a className="dropdown-item" href="javascript:;"><i className="flag-icon flag-icon-um" /><span>English</span></a>
                <a className="dropdown-item" href="javascript:;"><i className="flag-icon flag-icon-in" /><span>Hindi</span></a>
                <a className="dropdown-item" href="javascript:;"><i className="flag-icon flag-icon-cn" /><span>Chinese</span></a>
                <a className="dropdown-item" href="javascript:;"><i className="flag-icon flag-icon-ae" /><span>Arabic</span></a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    {/*end header*/}
    {/*page-wrapper*/}
    <div className="page-wrapper">
      {/*page-content-wrapper*/}
      <div className="page-content-wrapper">
        <div className="page-content">
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="card radius-15 bg-voilet">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <h2 className="mb-0 text-white">649 <i className="bx bxs-up-arrow-alt font-14 text-white" /> </h2>
                    </div>
                    <div className="ms-auto font-35 text-white"><i className="bx bx-cart-alt" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="mb-0 text-white">Item Delivered</p>
                    </div>
                    <div className="ms-auto font-14 text-white">+23.4%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="card radius-15 bg-primary-blue">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <h2 className="mb-0 text-white">114 <i className="bx bxs-down-arrow-alt font-14 text-white" /> </h2>
                    </div>
                    <div className="ms-auto font-35 text-white"><i className="bx bx-support" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="mb-0 text-white">Refund Request</p>
                    </div>
                    <div className="ms-auto font-14 text-white">+14.7%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="card radius-15 bg-rose">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <h2 className="mb-0 text-white">98 <i className="bx bxs-up-arrow-alt font-14 text-white" /> </h2>
                    </div>
                    <div className="ms-auto font-35 text-white"><i className="bx bx-tachometer" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="mb-0 text-white">Cancelled Orders</p>
                    </div>
                    <div className="ms-auto font-14 text-white">-12.9%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="card radius-15 bg-sunset">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <h2 className="mb-0 text-white">208 <i className="bx bxs-up-arrow-alt font-14 text-white" /> </h2>
                    </div>
                    <div className="ms-auto font-35 text-white"><i className="bx bx-user" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="mb-0 text-white">New Users</p>
                    </div>
                    <div className="ms-auto font-14 text-white">+13.6%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
          <div className="card radius-15">
            <div className="card-header border-bottom-0">
              <div className="d-lg-flex align-items-center">
                <div>
                  <h5 className="mb-2 mb-lg-0">Sales Update</h5>
                </div>
                <div className="ms-lg-auto mb-2 mb-lg-0">
                  <div className="btn-group-round">
                    <div className="btn-group">
                      <button type="button" className="btn btn-white">Daiiy</button>
                      <button type="button" className="btn btn-white">Weekly</button>
                      <button type="button" className="btn btn-white">Monthly</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div id="chart1" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="card radius-15">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <h5 className="mb-0">Revenue By Device</h5>
                    </div>
                    <div className="dropdown ms-auto">
                      <div className="cursor-pointer font-24 dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="javascript:;">Action</a>
                        <a className="dropdown-item" href="javascript:;">Another action</a>
                        <div className="dropdown-divider" /> <a className="dropdown-item" href="javascript:;">Something else here</a>
                      </div>
                    </div>
                  </div>
                  <div id="chart2" />
                  <div className="legends">
                    <div className="row">
                      <div className="col-12 col-lg-5">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="text-secondary"><i className="bx bxs-circle font-13 text-primary-blue me-2" />Desktop</div>
                          <div>$850.04</div>
                          <div className="text-secondary">64.4%</div>
                        </div>
                        <div className="my-2" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="text-secondary"><i className="bx bxs-circle font-13 text-shineblue me-2" />Mobile</div>
                          <div>$755.08</div>
                          <div className="text-secondary">48.6%</div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-2">
                        <div className="vertical-separater" />
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="text-secondary"><i className="bx bxs-circle font-13 text-primary me-2" />Tablet</div>
                          <div>$687.03</div>
                          <div className="text-secondary">24.7%</div>
                        </div>
                        <div className="my-2" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="text-secondary"><i className="bx bxs-circle font-13 text-red me-2" />Unknown</div>
                          <div>$142.07</div>
                          <div className="text-secondary">14.8%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card radius-15">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <h5 className="mb-0">Traffic</h5>
                    </div>
                    <div className="dropdown ms-auto">
                      <div className="cursor-pointer font-24 dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="javascript:;">Action</a>
                        <a className="dropdown-item" href="javascript:;">Another action</a>
                        <div className="dropdown-divider" /> <a className="dropdown-item" href="javascript:;">Something else here</a>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3 g-3">
                    <div className="col-12 col-lg-6">
                      <div className="card radius-15 border shadow-none">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div>
                              <p className="mb-0">Store Visits</p>
                            </div>
                            <div className="ms-auto text-success"><span>+22%</span>
                            </div>
                          </div>
                          <h4 className="mb-0">8950</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="card radius-15 border shadow-none">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div>
                              <p className="mb-0">Visitors</p>
                            </div>
                            <div className="ms-auto text-purple"><span>-24%</span>
                            </div>
                          </div>
                          <h4 className="mb-0">1520</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="chart3" />
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-12 col-lg-4 d-flex">
              <div className="card radius-15 w-100">
                <div className="card-body">
                  <div className="d-lg-flex align-items-center">
                    <div>
                      <h5 className="mb-4">Top Categories</h5>
                    </div>
                    <div className="dropdown ms-auto">
                      <div className="cursor-pointer font-24 dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="javascript:;">Action</a>
                        <a className="dropdown-item" href="javascript:;">Another action</a>
                        <div className="dropdown-divider" /> <a className="dropdown-item" href="javascript:;">Something else here</a>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrapper mb-4">
                    <p className="mb-1">Electronics <span className="float-end">45%</span>
                    </p>
                    <div className="progress radius-15" style={{height: 5}}>
                      <div className="progress-bar" role="progressbar" style={{width: '45%'}} />
                    </div>
                  </div>
                  <div className="progress-wrapper mb-4">
                    <p className="mb-1">Clothing <span className="float-end">55%</span>
                    </p>
                    <div className="progress radius-15" style={{height: 5}}>
                      <div className="progress-bar bg-voilet" role="progressbar" style={{width: '55%'}} />
                    </div>
                  </div>
                  <div className="progress-wrapper mb-4">
                    <p className="mb-1">Furniture <span className="float-end">64%</span>
                    </p>
                    <div className="progress radius-15" style={{height: 5}}>
                      <div className="progress-bar bg-red-light" role="progressbar" style={{width: '64%'}} />
                    </div>
                  </div>
                  <div className="progress-wrapper mb-4">
                    <p className="mb-1">Accessories <span className="float-end">78%</span>
                    </p>
                    <div className="progress radius-15" style={{height: 5}}>
                      <div className="progress-bar bg-sunset" role="progressbar" style={{width: '78%'}} />
                    </div>
                  </div>
                  <div className="progress-wrapper mb-4">
                    <p className="mb-1">Jewellery <span className="float-end">82%</span>
                    </p>
                    <div className="progress radius-15" style={{height: 5}}>
                      <div className="progress-bar bg-wall" role="progressbar" style={{width: '82%'}} />
                    </div>
                  </div>
                  <div className="progress-wrapper">
                    <p className="mb-1">Mobiles <span className="float-end">89%</span>
                    </p>
                    <div className="progress radius-15" style={{height: 5}}>
                      <div className="progress-bar bg-dark" role="progressbar" style={{width: '89%'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 d-flex">
              <div className="card radius-15 w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div>
                      <h5 className="mb-0">Sales Forecast</h5>
                    </div>
                    <div className="dropdown ms-auto">
                      <div className="cursor-pointer text-dark font-24 dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="javascript:;">Action</a>
                        <a className="dropdown-item" href="javascript:;">Another action</a>
                        <div className="dropdown-divider" /> <a className="dropdown-item" href="javascript:;">Something else here</a>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <div className="card radius-15 border shadow-none mb-0">
                        <div className="card-body">
                          <div className="d-flex flex-row align-items-center">
                            <div className>
                              <p className="text-secondary mb-0">Revenue</p>
                              <h4 className="mb-0 ">+24.5%</h4>
                            </div>
                            <div className="fs-2 ms-auto">
                              <i className="bx bx-wallet-alt" />
                            </div>
                          </div>
                          <div id="chart4" className="ms-auto mt-1" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="card radius-15 border shadow-none mb-0">
                        <div className="card-body">
                          <div className="d-flex flex-row align-items-center">
                            <div className>
                              <p className="text-secondary mb-0">Net Profit</p>
                              <h4 className="mb-0">-2.7%</h4>
                            </div>
                            <div className="fs-2 ms-auto">
                              <i className="bx bx-bar-chart-alt-2" />
                            </div>
                          </div>
                          <div id="chart5" className="ms-auto mt-1" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="card radius-15 border shadow-none mb-0">
                        <div className="card-body">
                          <div className="d-flex flex-row align-items-center">
                            <div className>
                              <p className="text-secondary mb-0">Orders</p>
                              <h4 className="mb-0">+32.6%</h4>
                            </div>
                            <div className="fs-2 ms-auto">
                              <i className="bx bx-shopping-bag" />
                            </div>
                          </div>
                          <div id="chart6" className="ms-auto mt-1" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="card radius-15 border shadow-none mb-0">
                        <div className="card-body">
                          <div className="d-flex flex-row align-items-center">
                            <div className>
                              <p className="text-secondary mb-0">Visitors</p>
                              <h4 className="mb-0">+60.2%</h4>
                            </div>
                            <div className="fs-2 ms-auto">
                              <i className="bx bx-group" />
                            </div>
                          </div>
                          <div id="chart7" className="ms-auto mt-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-12 col-lg-8 d-flex">
              <div className="card radius-15 w-100 overflow-hidden">
                <div className="card-header border-bottom-0">
                  <div className="d-flex align-items-center">
                    <div>
                      <h5 className="mb-0">Revenue By Locations</h5>
                    </div>
                    <div className="dropdown ms-auto">
                      <div className="cursor-pointer font-24 dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="javascript:;">Action</a>
                        <a className="dropdown-item" href="javascript:;">Another action</a>
                        <div className="dropdown-divider" /> <a className="dropdown-item" href="javascript:;">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="location-map" />
                </div>
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th scope="col" className="text-blue-ribbon">Countries</th>
                        <th scope="col" className="text-brink-pink">Orders</th>
                        <th scope="col" className="text-mountain-meadow">Earnings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="d-flex align-items-center"><i className="flag-icon flag-icon-um me-2" />
                          <div>United States</div>
                        </td>
                        <td>13,495</td>
                        <td className="text-semibold">$58,430.75</td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center"><i className="flag-icon flag-icon-nl me-2" />
                          <div>Netherlands</div>
                        </td>
                        <td>11,495</td>
                        <td className="text-semibold">$68,253.90</td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center"><i className="flag-icon flag-icon-us me-2" />
                          <div>United Kingdom</div>
                        </td>
                        <td>09,348</td>
                        <td className="text-semibold">$87,295.70</td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center"><i className="flag-icon flag-icon-ca me-2" />
                          <div>Canada</div>
                        </td>
                        <td>07,845</td>
                        <td className="text-semibold">$64,914.20</td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center"><i className="flag-icon flag-icon-au me-2" />
                          <div>Australia</div>
                        </td>
                        <td>05,945</td>
                        <td className="text-semibold">$94,335.60</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex">
              <div className="card radius-15 w-100">
                <div className="card-body">
                  <div className="card radius-15 border shadow-none">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <h5 className="mb-0">New Users</h5>
                        <p className="mb-0 ms-auto"><i className="bx bx-dots-horizontal-rounded float-right font-24" />
                        </p>
                      </div>
                      <div className="d-flex align-items-center mt-3 gap-2">
                        <img src="assets/images/avatars/avatar-1.png" width={45} height={45} className="rounded-circle" alt />
                        <div className="flex-grow-1">
                          <p className="font-weight-bold mb-0">Neil Wagner</p>
                          <p className="text-secondary mb-0">United Kingdom</p>
                        </div>
                        <a href="javascript:;" className="btn btn-sm btn-light-primary px-4 radius-10">Add</a>
                      </div>
                      <hr />
                      <div className="d-flex align-items-center gap-2">
                        <img src="assets/images/avatars/avatar-2.png" width={45} height={45} className="rounded-circle" alt />
                        <div className="flex-grow-1">
                          <p className="font-weight-bold mb-0">Sampoll Dinga</p>
                          <p className="text-secondary mb-0">America</p>
                        </div> <a href="javascript:;" className="btn btn-sm btn-light-primary px-4 radius-10">Add</a>
                      </div>
                      <hr />
                      <div className="d-flex align-items-center gap-2">
                        <img src="assets/images/avatars/avatar-3.png" width={45} height={45} className="rounded-circle" alt />
                        <div className="flex-grow-1">
                          <p className="font-weight-bold mb-0">Loona Ting</p>
                          <p className="text-secondary mb-0">Canada</p>
                        </div> <a href="javascript:;" className="btn btn-sm btn-light-primary px-4 radius-10">Add</a>
                      </div>
                      <hr />
                      <div className="d-flex align-items-center gap-2">
                        <img src="assets/images/avatars/avatar-4.png" width={45} height={45} className="rounded-circle" alt />
                        <div className="flex-grow-1">
                          <p className="font-weight-bold mb-0">Lee Jong</p>
                          <p className="text-secondary mb-0">China</p>
                        </div> <a href="javascript:;" className="btn btn-sm btn-light-primary px-4 radius-10">Add</a>
                      </div>
                    </div>
                  </div>
                  <div className="card radius-15 border shadow-none mb-0">
                    <div className="card-body">
                      <h4 className="mb-0">87.52%</h4>
                      <p className="mb-0">Bounce Rate</p>
                    </div>
                    <div id="chart8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
          <div className="card radius-15 overflow-hidden">
            <div className="card-header border-bottom-0">
              <div className="d-flex align-items-center">
                <div>
                  <h5 className="mb-0">Recent Orders</h5>
                </div>
                <div className="ms-auto">
                  <button type="button" className="btn btn-white btn-sm px-4 radius-15">View More</button>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Customer</th>
                      <th>Product id</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="product-img bg-transparent border">
                          <img src="assets/images/icons/smartphone.png" width={35} alt />
                        </div>
                      </td>
                      <td>Honor Mobile 7x</td>
                      <td>Mitchell Daniel</td>
                      <td>#835478</td>
                      <td>$54.68</td>
                      <td><a href="javascript:;" className="btn btn-sm btn-light-success btn-block radius-30">Delivered</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product-img bg-transparent border">
                          <img src="assets/images/icons/watch.png" width={35} alt />
                        </div>
                      </td>
                      <td>Hand Watch</td>
                      <td>Milona Burke</td>
                      <td>#987546</td>
                      <td>$43.78</td>
                      <td><a href="javascript:;" className="btn btn-sm btn-light-warning btn-block radius-30">Pending</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product-img bg-transparent border">
                          <img src="assets/images/icons/laptop.png" width={35} alt />
                        </div>
                      </td>
                      <td>Mini Laptop</td>
                      <td>Craig Clayton</td>
                      <td>#325687</td>
                      <td>$62.21</td>
                      <td><a href="javascript:;" className="btn btn-sm btn-light-success btn-block radius-30">Delivered</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product-img bg-transparent border">
                          <img src="assets/images/icons/shirt.png" width={35} alt />
                        </div>
                      </td>
                      <td>Slim-T-Shirt</td>
                      <td>Clark Andola</td>
                      <td>#658972</td>
                      <td>$75.68</td>
                      <td><a href="javascript:;" className="btn btn-sm btn-light-danger btn-block radius-30">Cancelled</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product-img bg-transparent border">
                          <img src="assets/images/icons/wine-glass.png" width={35} alt />
                        </div>
                      </td>
                      <td>Mini Laptop</td>
                      <td>Craig Clayton</td>
                      <td>#325687</td>
                      <td>$62.21</td>
                      <td><a href="javascript:;" className="btn btn-sm btn-light-success btn-block radius-30">Delivered</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product-img bg-transparent border">
                          <img src="assets/images/icons/headphones.png" width={35} alt />
                        </div>
                      </td>
                      <td>Honor Mobile 7x</td>
                      <td>Mitchell Daniel</td>
                      <td>#835478</td>
                      <td>$54.68</td>
                      <td><a href="javascript:;" className="btn btn-sm btn-light-success btn-block radius-30">Delivered</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
    {/*Start Back To Top Button*/}<a href="javaScript:;" className="back-to-top"><i className="bx bxs-up-arrow-alt" /></a>
    {/*End Back To Top Button*/}
    {/*footer */}
    <div className="footer">
      <p className="mb-0">Syndash @2020 | Developed By : <a href="https://themeforest.net/user/codervent" target="_blank">codervent</a>
      </p>
    </div>
    {/* end footer */}
  </div>

<div className="switcher-body">
<button className="btn btn-primary btn-switcher shadow-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bx bx-cog bx-spin" /></button>
<div className="offcanvas offcanvas-end shadow border-start-0 p-2" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling">
  <div className="offcanvas-header border-bottom">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Theme Customizer</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" />
  </div>
  <div className="offcanvas-body">
    <h6 className="mb-0">Theme Variation</h6>
    <hr />
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="lightmode" defaultValue="option1" defaultChecked />
      <label className="form-check-label" htmlFor="lightmode">Light</label>
    </div>
    <hr />
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="darkmode" defaultValue="option2" />
      <label className="form-check-label" htmlFor="darkmode">Dark</label>
    </div>
    <hr />
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="darksidebar" defaultValue="option3" />
      <label className="form-check-label" htmlFor="darksidebar">Semi Dark</label>
    </div>
    <hr />
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="ColorLessIcons" defaultValue="option3" />
      <label className="form-check-label" htmlFor="ColorLessIcons">Color Less Icons</label>
    </div>
  </div>
</div>
</div>
    </div>



  )
}

export default Sales
