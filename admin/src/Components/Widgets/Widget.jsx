import React from 'react'
import '../Sidebar/Sidebar.css'

const Widget = () => {
  return (
    <>
      <div className="page-wrapper">
        {/*page-content-wrapper*/}
        <div className="page-content-wrapper">
          <div className="page-content">
            {/*breadcrumb*/}
            <div className="page-breadcrumb d-none d-md-flex align-items-center mb-3">
              <div className="breadcrumb-title pe-3">Widgets</div>
              <div className="ps-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0 p-0">
                    <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /></a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Widgets</li>
                  </ol>
                </nav>
              </div>
              <div className="ms-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">Settings</button>
                  <button type="button" className="btn btn-primary bg-split-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"> <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left"> <a className="dropdown-item" href="javascript:;">Action</a>
                    <a className="dropdown-item" href="javascript:;">Another action</a>
                    <a className="dropdown-item" href="javascript:;">Something else here</a>
                    <div className="dropdown-divider" /> <a className="dropdown-item" href="javascript:;">Separated link</a>
                  </div>
                </div>
              </div>
            </div>
            {/*end breadcrumb*/}
            <h6 className="text-uppercase mb-0">Static Widgets</h6>
            <hr />
            <div className="row">
              <div className="col-12 col-lg-3">
                <div className="card radius-15 bg-primary">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold text-white">845</h4>
                        <p className="mb-0 text-white">Total Orders</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i className="bx bx-cart-alt" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="card radius-15 bg-warning">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold text-dark">$9,475</h4>
                        <p className="mb-0 text-dark">Total Income</p>
                      </div>
                      <div className="font-35 text-dark ms-auto"><i className="bx bx-wallet" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="card radius-15 bg-danger">
                  <div className="">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold text-white">754</h4>
                        <p className="mb-0 text-white">Downloads</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i className="bx bx-cloud-download" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="card radius-15 bg-success">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold text-white">754</h4>
                        <p className="mb-0 text-white">New Users</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i className="bx bx-group" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-12 col-lg-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold">574</h4>
                        <p className="mb-0">Comments</p>
                      </div>
                      <div className="widgets-icons bg-light-primary text-primary rounded-circle ms-auto">
                        <i className="bx bx-comment-detail" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold">865</h4>
                        <p className="mb-0">Likes</p>
                      </div>
                      <div className="widgets-icons bg-light-success text-success rounded-circle ms-auto">
                        <i className="bx bx-like" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold">354</h4>
                        <p className="mb-0">Dislikes</p>
                      </div>
                      <div className="widgets-icons bg-light-danger text-danger rounded-circle ms-auto"><i className="bx bx-dislike" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold">289</h4>
                        <p className="mb-0">Posts</p>
                      </div>
                      <div className="widgets-icons bg-light-info text-info rounded-circle ms-auto"><i className="bx bx-pencil" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
            <div className="card radius-15">
              <div className="row g-0 row-group">
                <div className="col-12 col-lg-3">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold text-info">840</h4>
                        <p className="mb-0">Profile Views</p>
                      </div>
                      <div className="font-40 ms-auto"><i className="bx bx-happy-heart-eyes text-info" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className="media-body">
                        <h4 className="mb-0 font-weight-bold text-facebook">1,685</h4>
                        <p className="mb-0">Facebook Likes</p>
                      </div>
                      <div className="font-40 ms-auto"><i className="bx bxl-facebook-square text-facebook" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className="media-body">
                        <h4 className="mb-0 font-weight-bold text-youtube">1,587</h4>
                        <p className="mb-0">Youtube Play</p>
                      </div>
                      <div className="font-40 ms-auto"><i className="bx bxl-youtube text-youtube" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className="media-body">
                        <h4 className="mb-0 font-weight-bold text-linkedin">2,347</h4>
                        <p className="mb-0">Linkedin</p>
                      </div>
                      <div className="font-40 ms-auto"><i className="bx bxl-linkedin-square text-linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end row*/}
            </div>
            <div className="row">
              <div className="col-12 col-lg-2">
                <div className="card radius-15 bg-info">
                  <div className="cards-body text-center">
                    <div className="widgets-icons mx-auto rounded-circle bg-white"><i className="bx bx-bookmark-alt" />
                    </div>
                    <h4 className="mb-0 font-weight-bold mt-3 text-white">574</h4>
                    <p className="mb-0 text-white">Bookmarks</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="card radius-15 bg-wall">
                  <div className="cards-body text-center">
                    <div className="widgets-icons mx-auto bg-white rounded-circle"><i className="bx bx-user" />
                    </div>
                    <h4 className="mb-0 font-weight-bold mt-3 text-white">574</h4>
                    <p className="mb-0 text-white">New Users</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="card radius-15 bg-rose">
                  <div className="cards-body text-center">
                    <div className="widgets-icons mx-auto bg-white rounded-circle"><i className="bx bx-cloud-download" />
                    </div>
                    <h4 className="mb-0 font-weight-bold mt-3 text-white">574</h4>
                    <p className="mb-0 text-white">Downloads</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="card radius-15">
                  <div className="cards-body text-center">
                    <div className="widgets-icons mx-auto bg-light-primary text-primary rounded-circle"><i className="bx bx-upload" />
                    </div>
                    <h4 className="mb-0 font-weight-bold mt-3">574</h4>
                    <p className="mb-0">Uploads</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="card radius-15">
                  <div className="cards-body text-center">
                    <div className="widgets-icons mx-auto bg-light-success text-success rounded-circle"><i className="bx bx-comment-detail" />
                    </div>
                    <h4 className="mb-0 font-weight-bold mt-3">$984</h4>
                    <p className="mb-0">Income</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="card radius-15">
                  <div className="cards-body text-center">
                    <div className="widgets-icons mx-auto bg-light-warning text-warning rounded-circle"><i className="bx bx-comment-detail" />
                    </div>
                    <h4 className="mb-0 font-weight-bold mt-3">12.5%</h4>
                    <p className="mb-0">Server Load</p>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
            <h6 className="text-uppercase mb-0">Data Widgets</h6>
            <hr />
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <p className="mb-0">Vsitors</p>
                        <h5 className="mb-0 font-weight-bold">44275</h5>
                      </div>
                      <div className="ms-auto">
                        <div id="chart1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <p className="mb-0">Customers</p>
                        <h5 className="mb-0 font-weight-bold">8756</h5>
                      </div>
                      <div className="ms-auto">
                        <div id="chart2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <p className="mb-0">Orders</p>
                        <h5 className="mb-0 font-weight-bold">6724</h5>
                      </div>
                      <div className="ms-auto">
                        <div id="chart3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <p className="mb-0">Sales</p>
                        <h5 className="mb-0 font-weight-bold">$9536</h5>
                      </div>
                      <div className="ms-auto">
                        <div id="chart4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex mb-2">
                      <div>
                        <p className="mb-0 font-weight-bold">Total Audience</p>
                        <h2 className="mb-0">280.09k</h2>
                      </div>
                      <div className="ms-auto align-self-end">
                        <p className="mb-0 font-14 text-primary"><i className="bx bxs-up-arrow-circle" />
                          <span>16% From Last Week</span>
                        </p>
                      </div>
                    </div>
                    <div id="chart5" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex mb-2">
                      <div>
                        <p className="mb-0 font-weight-bold">Total Impressions</p>
                        <h2 className="mb-0">657.06</h2>
                      </div>
                      <div className="ms-auto align-self-end">
                        <p className="mb-0 font-14 text-success"><i className="bx bxs-up-arrow-circle" />
                          <span>14% From Last Week</span>
                        </p>
                      </div>
                    </div>
                    <div id="chart6" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex mb-2">
                      <div>
                        <p className="mb-0 font-weight-bold">Total Engagement</p>
                        <h2 className="mb-0">8,245</h2>
                      </div>
                      <div className="ms-auto align-self-end">
                        <p className="mb-0 font-14 text-danger"><i className="bx bxs-down-arrow-circle" />
                          <span>32% From Last Week</span>
                        </p>
                      </div>
                    </div>
                    <div id="chart7" />
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
            <div className="d-flex flex-column flex-xl-row gap-4">
              <div className="card radius-15 w-100">
                <div className="cards-body">
                  <div className="d-lg-flex align-items-center">
                    <div>
                      <h5 className="mb-4">Sales By Category</h5>
                    </div>
                  </div>
                  <div className="progress-wrapper">
                    <p className="mb-1">Electronics <span className="float-right">75%</span>
                    </p>
                    <div className="progress radius-10" style={{ height: 5 }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '45%' }} />
                    </div>
                  </div>
                  <hr />
                  <div className="progress-wrapper">
                    <p className="mb-1">Clothing <span className="float-right">55%</span>
                    </p>
                    <div className="progress radius-10" style={{ height: 5 }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '55%' }}>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="progress-wrapper">
                    <p className="mb-1">Furniture <span className="float-right">64%</span>
                    </p>
                    <div className="progress radius-10" style={{ height: 5 }}>
                      <div className="progress-bar bg-danger" role="progressbar" style={{ width: '64%' }} />
                    </div>
                  </div>
                  <hr />
                  <div className="progress-wrapper">
                    <p className="mb-1">Accessories <span className="float-right">78%</span>
                    </p>
                    <div className="progress radius-10" style={{ height: 5 }}>
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '78%' }}>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="progress-wrapper">
                    <p className="mb-1">Jewellery <span className="float-right">62%</span>
                    </p>
                    <div className="progress radius-10" style={{ height: 5 }}>
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: '62%' }} />
                    </div>
                  </div>
                  <hr />
                  <div className="progress-wrapper">
                    <p className="mb-1">Flooring <span className="float-right">42%</span>
                    </p>
                    <div className="progress radius-10" style={{ height: 5 }}>
                      <div className="progress-bar bg-dark" role="progressbar" style={{ width: '42%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card radius-15 w-100">
                <div className="cards-body">
                  <div className="d-lg-flex align-items-center">
                    <div>
                      <h5 className="mb-4">Web Traffic</h5>
                    </div>
                  </div>
                  <div id="chart8" />
                </div>
                <ul className="list-group list-group-flush mb-0">
                  <li className="list-group-item border-top d-flex justify-content-between align-items-center bg-transparent">
                    Social Media<span className="badge badge-danger badge-pill">25%</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                    Email<span className="badge badge-primary badge-pill">65%</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                    Organic<span className="badge badge-warning badge-pill">10%</span>
                  </li>
                </ul>
              </div>
              <div className="card radius-15 w-100">
                <div className="cards-body">
                  <p className="font-weight-bold mb-1 text-secondary">Visitors</p>
                  <div className="d-flex">
                    <h2 className>43,540</h2>
                    <p className="mb-0 align-self-center font-weight-bold text-success ms-2">4.4 <i className="bx bxs-up-arrow-alt mr-2" />
                    </p>
                  </div>
                  <div id="chart9" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end page-content-wrapper*/}
      </div>

    </>
  )
}

export default Widget
