import React from 'react'

const Contact = () => {
  return (
  <>
  <div className="page-wrapper">
  {/*page-content-wrapper*/}
  <div className="page-content-wrapper">
    <div className="page-content">
      {/*breadcrumb*/}
      <div className="page-breadcrumb d-none d-md-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Contacts</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /></a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Contacts</li>
            </ol>
          </nav>
        </div>
        <div className="ms-auto">
          <div className="btn-group">
            <button type="button" className="btn btn-primary">Settings</button>
            <button type="button" className="btn btn-primary bg-split-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-start"> <a className="dropdown-item" href="javascript:;">Action</a>
              <a className="dropdown-item" href="javascript:;">Another action</a>
              <a className="dropdown-item" href="javascript:;">Something else here</a>
              <div className="dropdown-divider" /> <a className="dropdown-item" href="javascript:;">Separated link</a>
            </div>
          </div>
        </div>
      </div>
      {/*end breadcrumb*/}
      <div className="row">
        <div className="col-lg-3">
          <div className="card radius-15 bg-primary">
            <div className="card-body text-center">
              <img src="assets/images/avatars/avatar-1.png" width={100} height={100} className="rounded-circle p-1 border bg-white" alt />
              <h5 className="mb-0 mt-4 text-white">Pauline I. Bird</h5>
              <p className="mb-0 text-white">Webdeveloper</p>
              <div className="list-inline contacts-social mt-3"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card radius-15">
            <div className="card-body text-center">
              <img src="assets/images/avatars/avatar-2.png" width={100} height={100} className="rounded-circle p-1 border" alt />
              <h5 className="mb-0 mt-4">Ralph L. Alva</h5>
              <p className="mb-0 text-secondary">UI Developer</p>
              <div className="list-inline contacts-social mt-3"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card radius-15 bg-danger">
            <div className="card-body text-center">
              <img src="assets/images/avatars/avatar-3.png" width={100} height={100} className="rounded-circle p-1 border bg-white" alt />
              <h5 className="mb-0 mt-4 text-white">John B. Roman</h5>
              <p className="mb-0 text-white">Graphic Designer</p>
              <div className="list-inline contacts-social mt-3"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card radius-15">
            <div className="card-body text-center">
              <img src="assets/images/avatars/avatar-1.png" width={100} height={100} className="rounded-circle p-1 border bg-white" alt />
              <h5 className="mb-0 mt-4">David O. Buckley</h5>
              <p className="mb-0 text-secondary">Android Developer</p>
              <div className="list-inline contacts-social mt-3"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-lg-4">
          <div className="card radius-15 bg-warning">
            <div className="card-body">
              <div className="d-flex align-items-center gap-2">
                <img src="assets/images/avatars/avatar-1.png" width={80} height={80} className="rounded-circle p-1 border bg-white" alt />
                <div className>
                  <h5 className="mb-0">Pauline I. Bird</h5>
                  <p className="mb-0">Webdeveloper</p>
                  <div className="list-inline contacts-social mt-2"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                    <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                    <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                    <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card radius-15 bg-success">
            <div className="card-body">
              <div className="d-flex align-items-center gap-2">
                <img src="assets/images/avatars/avatar-2.png" width={80} height={80} className="rounded-circle p-1 border bg-white" alt />
                <div className>
                  <h5 className="mb-0 text-white">Ralph L. Alva</h5>
                  <p className="mb-0 text-white">UI Developer</p>
                  <div className="list-inline contacts-social mt-2"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                    <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                    <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                    <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card radius-15 bg-secondary">
            <div className="card-body">
              <div className="d-flex align-items-center gap-2">
                <img src="assets/images/avatars/avatar-1.png" width={80} height={80} className="rounded-circle p-1 border bg-white" alt />
                <div className>
                  <h5 className="mb-0 text-white">John B. Roman</h5>
                  <p className="mb-0 text-white">Graphic Designer</p>
                  <div className="list-inline contacts-social mt-2"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                    <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                    <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                    <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card radius-15 bg-light-primary">
            <div className="card-body">
              <div className="d-flex align-items-center gap-2">
                <img src="assets/images/avatars/avatar-4.png" width={80} height={80} className="rounded-circle p-1 border bg-white" alt />
                <div className>
                  <h5 className="mb-0 text-primary">James M. Caviness</h5>
                  <p className="mb-0 text-secondary">Sr. Project Manager</p>
                  <div className="list-inline contacts-social mt-2"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                    <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                    <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                    <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card radius-15 bg-light-info">
            <div className="card-body">
              <div className="d-flex align-items-center gap-2">
                <img src="assets/images/avatars/avatar-5.png" width={80} height={80} className="rounded-circle p-1 border bg-white" alt />
                <div className>
                  <h5 className="mb-0 text-info">Peter F. Costanzo</h5>
                  <p className="mb-0 text-secondary">Human Resource</p>
                  <div className="list-inline contacts-social mt-2"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                    <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                    <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                    <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card radius-15 bg-light-danger">
            <div className="card-body">
              <div className="d-flex align-items-center gap-2">
                <img src="assets/images/avatars/avatar-6.png" width={80} height={80} className="rounded-circle p-1 border bg-white" alt />
                <div className>
                  <h5 className="mb-0 text-danger">Lewis S. Cruz</h5>
                  <p className="mb-0 text-secondary">Software Engineer</p>
                  <div className="list-inline contacts-social mt-2"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                    <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                    <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                    <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card radius-15">
            <div className="card-body">
              <div className="d-flex align-items-center gap-2">
                <img src="assets/images/avatars/avatar-7.png" width={80} height={80} className="rounded-circle p-1 border" alt />
                <div className>
                  <h5 className="mb-0">Thomas C. Wheeler</h5>
                  <p className="mb-0 text-secondary">Sales Manager</p>
                  <div className="list-inline contacts-social mt-2"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                    <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                    <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                    <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card radius-15">
            <div className="card-body">
              <div className="d-flex align-items-center gap-2">
                <img src="assets/images/avatars/avatar-8.png" width={80} height={80} className="rounded-circle p-1 border" alt />
                <div className>
                  <h5 className="mb-0">David O. Buckley</h5>
                  <p className="mb-0 text-secondary">Android Developer</p>
                  <div className="list-inline contacts-social mt-2"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                    <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                    <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                    <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card radius-15">
            <div className="card-body">
              <div className="d-flex align-items-center gap-2">
                <img src="assets/images/avatars/avatar-9.png" width={80} height={80} className="rounded-circle p-1 border" alt />
                <div className>
                  <h5 className="mb-0">Johnny W. Seitz</h5>
                  <p className="mb-0 text-secondary">Php Programmer</p>
                  <div className="list-inline contacts-social mt-2"> <a href="javascript:;" className="list-inline-item text-facebook"><i className="bx bxl-facebook" /></a>
                    <a href="javascript:;" className="list-inline-item text-twitter"><i className="bx bxl-twitter" /></a>
                    <a href="javascript:;" className="list-inline-item"><i className="bx bxs-phone" /></a>
                    <a href="javascript:;" className="list-inline-item text-skype"><i className="bx bxl-skype" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
    </div>
  </div>
  {/*end page-content-wrapper*/}
</div>

  </>
  )
}

export default Contact
