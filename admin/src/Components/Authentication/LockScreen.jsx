import React from 'react'

const LockScreen = () => {
    return (
        <body className="bg-lock-screen">
            <div className="wrapper">
                <div className="authentication-lock-screen d-flex align-items-center justify-content-center">
                    <div className="card shadow-none bg-transparent">
                        <div className="card-body p-md-5 text-center">
                            <h2 className="text-white">10:53 AM</h2>
                            <h5 className="text-white">Tuesday, November 29, 2016</h5>
                            <div className>
                                <img src="assets/images/icons/user.png" className="mt-5" width={120} alt />
                            </div>
                            <p className="mt-2 text-white">Administrator</p>
                            <div className="mb-3 mt-3">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="d-grid">
                                <button type="button" className="btn btn-light">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default LockScreen
