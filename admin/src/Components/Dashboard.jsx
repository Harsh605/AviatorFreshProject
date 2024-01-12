import React from 'react'
import { Fade } from 'react-reveal'
import "./Dashboard.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Dashboard = () => {
  return (
    <Fade top distance='2%' duration={700}>


      <div className="page-wrapper">
        {/*page-content-wrapper*/}
        <div className="page-content-wrapper">
          <div className="page-content">
            <div className="row">
              <div style={{ marginTop: '30px' }} className="row">
                <div className="col-12 col-lg-3">
                  <div className="card radius-15 bg-primary">
                    <div style={{ height: '150px' }} className="card-body">
                      <div className=" align-items-center">
                        <div className="card-heading">
                          <h4 className="mb-0 font-weight-bold text-white">845</h4>
                        </div>
                        <p className="mb-0 text-white">Total Orders</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i style={{ fontSize: '55px', marginTop: '20px' }} className="bx bx-cart-alt" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="card radius-15 bg-warning">
                    <div style={{ height: '150px' }} className="card-body">
                      <div className=" align-items-center">
                        <div className="card-heading">
                          <h4 className="mb-0 font-weight-bold text-white">845</h4>
                        </div>
                        <p className="mb-0 text-white">Total Orders</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i style={{ fontSize: '55px', marginTop: '20px' }} className="bx bx-cart-alt" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="card radius-15 bg-danger">
                    <div style={{ height: '150px' }} className="card-body">
                      <div className=" align-items-center">
                        <div className="card-heading">
                          <h4 className="mb-0 font-weight-bold text-white">845</h4>
                        </div>
                        <p className="mb-0 text-white">Total Orders</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i style={{ fontSize: '55px', marginTop: '20px' }} className="bx bx-cart-alt" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="card radius-15 bg-success">
                    <div style={{ height: '150px' }} className="card-body">
                      <div className=" align-items-center">
                        <div className="card-heading">
                          <h4 className="mb-0 font-weight-bold text-white">845</h4>
                        </div>
                        <p className="mb-0 text-white">Total Orders</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i style={{ fontSize: '55px', marginTop: '20px' }} className="bx bx-cart-alt" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div style={{ marginTop: '30px' }} className="row">
                <div className="col-12 col-lg-3">
                  <div className="card radius-15 bg-primary">
                    <div style={{ height: '150px' }} className="card-body">
                      <div className=" align-items-center">
                        <div className="card-heading">
                          <h4 className="mb-0 font-weight-bold text-white">845</h4>
                        </div>
                        <p className="mb-0 text-white">Total Orders</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i style={{ fontSize: '55px', marginTop: '20px' }} className="bx bx-cart-alt" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="card radius-15 bg-warning">
                    <div style={{ height: '150px' }} className="card-body">
                      <div className=" align-items-center">
                        <div className="card-heading">
                          <h4 className="mb-0 font-weight-bold text-white">845</h4>
                        </div>
                        <p className="mb-0 text-white">Total Orders</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i style={{ fontSize: '55px', marginTop: '20px' }} className="bx bx-cart-alt" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="card radius-15 bg-danger">
                    <div style={{ height: '150px' }} className="card-body">
                      <div className=" align-items-center">
                        <div className="card-heading">
                          <h4 className="mb-0 font-weight-bold text-white">845</h4>
                        </div>
                        <p className="mb-0 text-white">Total Orders</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i style={{ fontSize: '55px', marginTop: '20px' }} className="bx bx-cart-alt" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="card radius-15 bg-success">
                    <div style={{ height: '150px' }} className="card-body">
                      <div className=" align-items-center">
                        <div className="card-heading">
                          <h4 className="mb-0 font-weight-bold text-white">845</h4>
                        </div>
                        <p className="mb-0 text-white">Total Orders</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i style={{ fontSize: '55px', marginTop: '20px' }} className="bx bx-cart-alt" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </Fade>

  )
}

export default Dashboard
