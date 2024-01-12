import React from 'react'
import '../Sidebar/Sidebar.css'
import { Activity ,Airplay} from 'react-feather';


const Feathericons = () => {
    return (
        <div className="page-wrapper">
            {/*page-content-wrapper*/}
            <div className="page-content-wrapper">
                <div className="page-content">
                    {/*breadcrumb*/}
                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Icons</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /></a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Feather Icons</li>
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
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body">  <i className="text-primary">
                                    <Activity />
                                </i>
                                    <p className="mb-0 mt-3">Activity</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary">
                                    <Airplay />
                                </i>
                                    <p className="mb-0 mt-3">Airplay</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="alert-circle" />
                                    <p className="mb-0 mt-3">Alert Circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="alert-octagon" />
                                    <p className="mb-0 mt-3">Alert Octagon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="alert-triangle" />
                                    <p className="mb-0 mt-3">Alert Triangle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="align-center" />
                                    <p className="mb-0 mt-3">Align Center</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="align-justify" />
                                    <p className="mb-0 mt-3">Align Justify</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="align-left" />
                                    <p className="mb-0 mt-3">Align Left</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="align-right" />
                                    <p className="mb-0 mt-3">Align Right</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="anchor" />
                                    <p className="mb-0 mt-3">Anchor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="aperture" />
                                    <p className="mb-0 mt-3">Aperture</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="archive" />
                                    <p className="mb-0 mt-3">Archive</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="arrow-down-circle" />
                                    <p className="mb-0 mt-3">Arrow Down</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="arrow-down-left" />
                                    <p className="mb-0 mt-3">Arrow Left</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="arrow-down-right" />
                                    <p className="mb-0 mt-3">Arrow Right</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="arrow-down" />
                                    <p className="mb-0 mt-3">Arrow Down</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="arrow-left-circle" />
                                    <p className="mb-0 mt-3">Arrow Left</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="arrow-left" />
                                    <p className="mb-0 mt-3">Arrow Left</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="arrow-up-circle" />
                                    <p className="mb-0 mt-3">Arrow Up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="arrow-up-left" />
                                    <p className="mb-0 mt-3">Arrow Right</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="arrow-up-right" />
                                    <p className="mb-0 mt-3">Arrow Right</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="arrow-up" />
                                    <p className="mb-0 mt-3">Arrow Up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="at-sign" />
                                    <p className="mb-0 mt-3">At Sign</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="award" />
                                    <p className="mb-0 mt-3">Award</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="bar-chart-2" />
                                    <p className="mb-0 mt-3">Bar Chart 2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="bar-chart" />
                                    <p className="mb-0 mt-3">Bar Chart</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="battery-charging" />
                                    <p className="mb-0 mt-3">battery-charging</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="battery" />
                                    <p className="mb-0 mt-3">battery</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="bell-off" />
                                    <p className="mb-0 mt-3">bell-off</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="bell" />
                                    <p className="mb-0 mt-3">bell</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="bluetooth" />
                                    <p className="mb-0 mt-3">bluetooth</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="bold" />
                                    <p className="mb-0 mt-3">bold</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="book-open" />
                                    <p className="mb-0 mt-3">book-open</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="book" />
                                    <p className="mb-0 mt-3">book</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="bookmark" />
                                    <p className="mb-0 mt-3">bookmark</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="calendar" />
                                    <p className="mb-0 mt-3">calendar</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="camera-off" />
                                    <p className="mb-0 mt-3">camera-off</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="camera" />
                                    <p className="mb-0 mt-3">camera</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="cast" />
                                    <p className="mb-0 mt-3">cast</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="check-circle" />
                                    <p className="mb-0 mt-3">check-circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="check-square" />
                                    <p className="mb-0 mt-3">check-square</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="check" />
                                    <p className="mb-0 mt-3">check</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="chevron-down" />
                                    <p className="mb-0 mt-3">chevron-down</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="chevron-left" />
                                    <p className="mb-0 mt-3">chevron-left</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="chevron-right" />
                                    <p className="mb-0 mt-3">chevron-right</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="chevron-up" />
                                    <p className="mb-0 mt-3">chevron-up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="chevrons-down" />
                                    <p className="mb-0 mt-3">chevrons-down</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="chevrons-left" />
                                    <p className="mb-0 mt-3">chevrons-left</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="chevrons-right" />
                                    <p className="mb-0 mt-3">chevrons-right</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="chevrons-up" />
                                    <p className="mb-0 mt-3">chevrons-up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="chrome" />
                                    <p className="mb-0 mt-3">chrome</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="circle" />
                                    <p className="mb-0 mt-3">circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="clipboard" />
                                    <p className="mb-0 mt-3">clipboard</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="clock" />
                                    <p className="mb-0 mt-3">clock</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="cloud-drizzle" />
                                    <p className="mb-0 mt-3">cloud-drizzle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="cloud-lightning" />
                                    <p className="mb-0 mt-3">cloud-lightning</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="cloud-off" />
                                    <p className="mb-0 mt-3">cloud-off</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="cloud-rain" />
                                    <p className="mb-0 mt-3">cloud-rain</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="cloud-snow" />
                                    <p className="mb-0 mt-3">cloud-snow</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="cloud" />
                                    <p className="mb-0 mt-3">cloud</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="code" />
                                    <p className="mb-0 mt-3">code</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="codepen" />
                                    <p className="mb-0 mt-3">codepen</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="codesandbox" />
                                    <p className="mb-0 mt-3">codesandbox</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="coffee" />
                                    <p className="mb-0 mt-3">coffee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="columns" />
                                    <p className="mb-0 mt-3">columns</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="command" />
                                    <p className="mb-0 mt-3">command</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="compass" />
                                    <p className="mb-0 mt-3">compass</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="copy" />
                                    <p className="mb-0 mt-3">copy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="corner-down-left" />
                                    <p className="mb-0 mt-3">corner-down-left</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="corner-down-right" />
                                    <p className="mb-0 mt-3">corner-down-right</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="corner-left-down" />
                                    <p className="mb-0 mt-3">corner-left-down</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="corner-left-up" />
                                    <p className="mb-0 mt-3">corner-left-up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="corner-right-down" />
                                    <p className="mb-0 mt-3">corner-right-down</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="corner-right-up" />
                                    <p className="mb-0 mt-3">corner-right-up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="corner-up-left" />
                                    <p className="mb-0 mt-3">corner-up-left</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="corner-up-right" />
                                    <p className="mb-0 mt-3">corner-up-right</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="cpu" />
                                    <p className="mb-0 mt-3">cpu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="credit-card" />
                                    <p className="mb-0 mt-3">credit-card</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="crop" />
                                    <p className="mb-0 mt-3">crop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="crosshair" />
                                    <p className="mb-0 mt-3">crosshair</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="database" />
                                    <p className="mb-0 mt-3">database</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="delete" />
                                    <p className="mb-0 mt-3">delete</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="disc" />
                                    <p className="mb-0 mt-3">disc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="dollar-sign" />
                                    <p className="mb-0 mt-3">dollar-sign</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="download-cloud" />
                                    <p className="mb-0 mt-3">download-cloud</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="download" />
                                    <p className="mb-0 mt-3">download</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="droplet" />
                                    <p className="mb-0 mt-3">droplet</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="edit-2" />
                                    <p className="mb-0 mt-3">edit-2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="edit-3" />
                                    <p className="mb-0 mt-3">edit-3</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="edit" />
                                    <p className="mb-0 mt-3">edit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="external-link" />
                                    <p className="mb-0 mt-3">external-link</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="eye-off" />
                                    <p className="mb-0 mt-3">eye-off</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="eye" />
                                    <p className="mb-0 mt-3">eye</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="facebook" />
                                    <p className="mb-0 mt-3">facebook</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="fast-forward" />
                                    <p className="mb-0 mt-3">fast-forward</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="feather" />
                                    <p className="mb-0 mt-3">feather</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="figma" />
                                    <p className="mb-0 mt-3">figma</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="file-minus" />
                                    <p className="mb-0 mt-3">file-minus</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="file-plus" />
                                    <p className="mb-0 mt-3">file-plus</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="file-text" />
                                    <p className="mb-0 mt-3">file-text</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="file" />
                                    <p className="mb-0 mt-3">file</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="film" />
                                    <p className="mb-0 mt-3">film</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="flag" />
                                    <p className="mb-0 mt-3">flag</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="folder-minus" />
                                    <p className="mb-0 mt-3">folder-minus</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="folder-plus" />
                                    <p className="mb-0 mt-3">folder-plus</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="folder" />
                                    <p className="mb-0 mt-3">folder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="framer" />
                                    <p className="mb-0 mt-3">framer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="frown" />
                                    <p className="mb-0 mt-3">frown</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="gift" />
                                    <p className="mb-0 mt-3">gift</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="git-branch" />
                                    <p className="mb-0 mt-3">git-branch</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="git-commit" />
                                    <p className="mb-0 mt-3">git-commit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="git-merge" />
                                    <p className="mb-0 mt-3">git-merge</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="git-pull-request" />
                                    <p className="mb-0 mt-3">git-pull-request</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="github" />
                                    <p className="mb-0 mt-3">github</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="gitlab" />
                                    <p className="mb-0 mt-3">gitlab</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="globe" />
                                    <p className="mb-0 mt-3">globe</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="grid" />
                                    <p className="mb-0 mt-3">grid</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="hard-drive" />
                                    <p className="mb-0 mt-3">hard-drive</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="hash" />
                                    <p className="mb-0 mt-3">hash</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="headphones" />
                                    <p className="mb-0 mt-3">headphones</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="heart" />
                                    <p className="mb-0 mt-3">heart</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="help-circle" />
                                    <p className="mb-0 mt-3">help-circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="hexagon" />
                                    <p className="mb-0 mt-3">hexagon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="home" />
                                    <p className="mb-0 mt-3">home</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="image" />
                                    <p className="mb-0 mt-3">image</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="inbox" />
                                    <p className="mb-0 mt-3">inbox</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="inbox" />
                                    <p className="mb-0 mt-3">inbox</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="info" />
                                    <p className="mb-0 mt-3">info</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="instagram" />
                                    <p className="mb-0 mt-3">instagram</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="italic" />
                                    <p className="mb-0 mt-3">italic</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="key" />
                                    <p className="mb-0 mt-3">key</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="layers" />
                                    <p className="mb-0 mt-3">layers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="layout" />
                                    <p className="mb-0 mt-3">layout</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="life-buoy" />
                                    <p className="mb-0 mt-3">life-buoy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="link-2" />
                                    <p className="mb-0 mt-3">link-2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="link" />
                                    <p className="mb-0 mt-3">link</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="linkedin" />
                                    <p className="mb-0 mt-3">linkedin</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="list" />
                                    <p className="mb-0 mt-3">list</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="loader" />
                                    <p className="mb-0 mt-3">loader</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="lock" />
                                    <p className="mb-0 mt-3">lock</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="log-in" />
                                    <p className="mb-0 mt-3">log-in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="log-out" />
                                    <p className="mb-0 mt-3">log-out</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="mail" />
                                    <p className="mb-0 mt-3">mail</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="map-pin" />
                                    <p className="mb-0 mt-3">map-pin</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="map" />
                                    <p className="mb-0 mt-3">map</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="maximize-2" />
                                    <p className="mb-0 mt-3">maximize-2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="maximize" />
                                    <p className="mb-0 mt-3">maximize</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="meh" />
                                    <p className="mb-0 mt-3">meh</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="menu" />
                                    <p className="mb-0 mt-3">menu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="inbox" />
                                    <p className="mb-0 mt-3">inbox</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="message-circle" />
                                    <p className="mb-0 mt-3">message-circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="message-square" />
                                    <p className="mb-0 mt-3">message-square</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="mic-off" />
                                    <p className="mb-0 mt-3">mic-off</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="mic" />
                                    <p className="mb-0 mt-3">mic</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="minimize-2" />
                                    <p className="mb-0 mt-3">minimize-2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="minimize" />
                                    <p className="mb-0 mt-3">minimize</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="minus-circle" />
                                    <p className="mb-0 mt-3">minus-circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="minus-square" />
                                    <p className="mb-0 mt-3">minus-square</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="minus" />
                                    <p className="mb-0 mt-3">minus</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="monitor" />
                                    <p className="mb-0 mt-3">monitor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="moon" />
                                    <p className="mb-0 mt-3">moon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="more-horizontal" />
                                    <p className="mb-0 mt-3">more-horizontal</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="more-vertical" />
                                    <p className="mb-0 mt-3">more-vertical</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="mouse-pointer" />
                                    <p className="mb-0 mt-3">mouse-pointer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="move" />
                                    <p className="mb-0 mt-3">move</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="music" />
                                    <p className="mb-0 mt-3">music</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="navigation-2" />
                                    <p className="mb-0 mt-3">navigation-2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="inbox" />
                                    <p className="mb-0 mt-3">inbox</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="octagon" />
                                    <p className="mb-0 mt-3">octagon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="package" />
                                    <p className="mb-0 mt-3">package</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="paperclip" />
                                    <p className="mb-0 mt-3">paperclip</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="pause-circle" />
                                    <p className="mb-0 mt-3">pause-circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="pause" />
                                    <p className="mb-0 mt-3">pause</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="pen-tool" />
                                    <p className="mb-0 mt-3">pen-tool</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="percent" />
                                    <p className="mb-0 mt-3">percent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="phone-call" />
                                    <p className="mb-0 mt-3">phone-call</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="phone-forwarded" />
                                    <p className="mb-0 mt-3">phone-forwarded</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="phone-incoming" />
                                    <p className="mb-0 mt-3">phone-incoming</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="phone-missed" />
                                    <p className="mb-0 mt-3">phone-missed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="phone-off" />
                                    <p className="mb-0 mt-3">phone-off</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="phone-outgoing" />
                                    <p className="mb-0 mt-3">phone-outgoing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="phone" />
                                    <p className="mb-0 mt-3">phone</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="pie-chart" />
                                    <p className="mb-0 mt-3">pie-chart</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="play-circle" />
                                    <p className="mb-0 mt-3">play-circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="play" />
                                    <p className="mb-0 mt-3">play</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="plus-circle" />
                                    <p className="mb-0 mt-3">plus-circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="plus-square" />
                                    <p className="mb-0 mt-3">plus-square</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="plus" />
                                    <p className="mb-0 mt-3">plus</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="pocket" />
                                    <p className="mb-0 mt-3">pocket</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="power" />
                                    <p className="mb-0 mt-3">power</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="printer" />
                                    <p className="mb-0 mt-3">printer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="radio" />
                                    <p className="mb-0 mt-3">radio</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="refresh-ccw" />
                                    <p className="mb-0 mt-3">refresh-ccw</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="repeat" />
                                    <p className="mb-0 mt-3">repeat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="rewind" />
                                    <p className="mb-0 mt-3">rewind</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="rotate-ccw" />
                                    <p className="mb-0 mt-3">rotate-ccw</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="rotate-cw" />
                                    <p className="mb-0 mt-3">rotate-cw</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="rss" />
                                    <p className="mb-0 mt-3">rss</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="save" />
                                    <p className="mb-0 mt-3">save</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="scissors" />
                                    <p className="mb-0 mt-3">scissors</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="search" />
                                    <p className="mb-0 mt-3">search</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="send" />
                                    <p className="mb-0 mt-3">send</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="server" />
                                    <p className="mb-0 mt-3">server</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="settings" />
                                    <p className="mb-0 mt-3">settings</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="share-2" />
                                    <p className="mb-0 mt-3">share-2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="share" />
                                    <p className="mb-0 mt-3">share</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="shield-off" />
                                    <p className="mb-0 mt-3">shield-off</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="shield" />
                                    <p className="mb-0 mt-3">shield</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="shopping-bag" />
                                    <p className="mb-0 mt-3">shopping-bag</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="shopping-cart" />
                                    <p className="mb-0 mt-3">shopping-cart</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="shuffle" />
                                    <p className="mb-0 mt-3">shuffle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="sidebar" />
                                    <p className="mb-0 mt-3">sidebar</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="skip-back" />
                                    <p className="mb-0 mt-3">skip-back</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="skip-forward" />
                                    <p className="mb-0 mt-3">skip-forward</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="slack" />
                                    <p className="mb-0 mt-3">slack</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="slash" />
                                    <p className="mb-0 mt-3">slash</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="sliders" />
                                    <p className="mb-0 mt-3">sliders</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="smartphone" />
                                    <p className="mb-0 mt-3">smartphone</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="smile" />
                                    <p className="mb-0 mt-3">smile</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="speaker" />
                                    <p className="mb-0 mt-3">speaker</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="square" />
                                    <p className="mb-0 mt-3">square</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="star" />
                                    <p className="mb-0 mt-3">star</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="stop-circle" />
                                    <p className="mb-0 mt-3">stop-circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="sun" />
                                    <p className="mb-0 mt-3">sun</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="sunrise" />
                                    <p className="mb-0 mt-3">sunrise</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="sunset" />
                                    <p className="mb-0 mt-3">sunset</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="tablet" />
                                    <p className="mb-0 mt-3">tablet</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="tag" />
                                    <p className="mb-0 mt-3">tag</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="target" />
                                    <p className="mb-0 mt-3">target</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="terminal" />
                                    <p className="mb-0 mt-3">terminal</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="thermometer" />
                                    <p className="mb-0 mt-3">thermometer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="thumbs-down" />
                                    <p className="mb-0 mt-3">thumbs-down</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="thumbs-up" />
                                    <p className="mb-0 mt-3">thumbs-up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="toggle-left" />
                                    <p className="mb-0 mt-3">toggle-left</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="toggle-right" />
                                    <p className="mb-0 mt-3">toggle-right</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="tool" />
                                    <p className="mb-0 mt-3">tool</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="trash-2" />
                                    <p className="mb-0 mt-3">trash-2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="trash" />
                                    <p className="mb-0 mt-3">trash</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="trello" />
                                    <p className="mb-0 mt-3">trello</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="trending-down" />
                                    <p className="mb-0 mt-3">trending-down</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="square" />
                                    <p className="mb-0 mt-3">square</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="trending-up" />
                                    <p className="mb-0 mt-3">trending-up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="triangle" />
                                    <p className="mb-0 mt-3">triangle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="truck" />
                                    <p className="mb-0 mt-3">truck</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="tv" />
                                    <p className="mb-0 mt-3">tv</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="twitch" />
                                    <p className="mb-0 mt-3">twitch</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="twitter" />
                                    <p className="mb-0 mt-3">twitter</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="type" />
                                    <p className="mb-0 mt-3">type</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="umbrella" />
                                    <p className="mb-0 mt-3">umbrella</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="underline" />
                                    <p className="mb-0 mt-3">underline</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="unlock" />
                                    <p className="mb-0 mt-3">unlock</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="upload-cloud" />
                                    <p className="mb-0 mt-3">unlock</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="upload" />
                                    <p className="mb-0 mt-3">upload</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="user-check" />
                                    <p className="mb-0 mt-3">user-check</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="user-minus" />
                                    <p className="mb-0 mt-3">user-minus</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="user-plus" />
                                    <p className="mb-0 mt-3">user-plus</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="user-x" />
                                    <p className="mb-0 mt-3">user-x</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="user" />
                                    <p className="mb-0 mt-3">user</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="users" />
                                    <p className="mb-0 mt-3">users</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="video-off" />
                                    <p className="mb-0 mt-3">video-off</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="video" />
                                    <p className="mb-0 mt-3">video</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="voicemail" />
                                    <p className="mb-0 mt-3">voicemail</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="volume-1" />
                                    <p className="mb-0 mt-3">volume-1</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="volume-2" />
                                    <p className="mb-0 mt-3">volume-2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="volume-x" />
                                    <p className="mb-0 mt-3">volume-x</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="volume" />
                                    <p className="mb-0 mt-3">volume</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="watch" />
                                    <p className="mb-0 mt-3">watch</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="wifi-off" />
                                    <p className="mb-0 mt-3">wifi-off</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="wifi" />
                                    <p className="mb-0 mt-3">wifi</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="wind" />
                                    <p className="mb-0 mt-3">wind</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="x-circle" />
                                    <p className="mb-0 mt-3">x-circle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="x-octagon" />
                                    <p className="mb-0 mt-3">x-octagon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="x-square" />
                                    <p className="mb-0 mt-3">x-square</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="x" />
                                    <p className="mb-0 mt-3">x</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="youtube" />
                                    <p className="mb-0 mt-3">youtube</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="zap-off" />
                                    <p className="mb-0 mt-3">zap-off</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="zap" />
                                    <p className="mb-0 mt-3">zap</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="zoom-in" />
                                    <p className="mb-0 mt-3">zoom-in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="card text-center radius-15">
                                <div className="card-body"> <i className="text-primary" data-feather="zoom-out" />
                                    <p className="mb-0 mt-3">zoom-out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end row*/}
                </div>
            </div>
            {/*end page-content-wrapper*/}
        </div>

    )
}

export default Feathericons
