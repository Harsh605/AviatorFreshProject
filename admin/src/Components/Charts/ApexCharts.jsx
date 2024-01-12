import React from 'react'
import '../Sidebar/Sidebar.css'

const ApexCharts = () => {
  return (
    <>
    <div className="page-wrapper">
  {/*page-content-wrapper*/}
  <div className="page-content-wrapper">
    <div className="page-content">
      {/*breadcrumb*/}
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Charts</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /></a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Apex Charts</li>
            </ol>
          </nav>
        </div>
        <div className="ms-auto">
          <div className="btn-group">
            <button type="button" className="btn btn-primary">Settings</button>
            <button type="button" className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"> <a className="dropdown-item" href="javascript:;">Action</a>
              <a className="dropdown-item" href="javascript:;">Another action</a>
              <a className="dropdown-item" href="javascript:;">Something else here</a>
              <div className="dropdown-divider" /> <a className="dropdown-item" href="javascript:;">Separated link</a>
            </div>
          </div>
        </div>
      </div>
      {/*end breadcrumb*/}
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart1" />
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart2" />
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart4" />
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart5" />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart6" />
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart7" />
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart8" />
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <h5 className="mb-0">Mixed Charts</h5>
      <hr />
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart9" />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-12">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart10" />
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart11" />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart12" />
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart15" />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card radius-15">
            <div className="card-body">
              <div id="chart16" />
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

export default ApexCharts;
