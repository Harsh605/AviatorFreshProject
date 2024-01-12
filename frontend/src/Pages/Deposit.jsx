import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Deposit = () => {
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDeposit = async () => {
    try {
      // Make an API request to deposit with the entered amount
      const response = await axios.post("/api/deposit", { amount });
      // Assuming the API returns a success message
      setMsg(response.data.message);
    } catch (error) {
      console.error("Error depositing:", error);
      // Handle error as needed
    }
  };

  return (
    <div className="deposite-container" style={{ background: "#012348" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="pay-tabs">
              <Link to="#" className="custom-tabs-link active">
                DEPOSIT
              </Link>
              <Link to="/withdraw" className="custom-tabs-link">
                WITHDRAW
              </Link>
            </div>

            <input type="hidden" name="username" id="username" value="" />
            <input type="hidden" name="password" id="password" value="" />

            <div className="pay-options">
              <div className="payment-cols">
                <div className="grid-view">
                  <div
                    className="grid-list"
                    // onClick={() => paymentGatewayDetails("6")}
                  >
                    <button className="btn payment-btn" data-tab="netbanking">
                      <img
                        src="images/app-logo/interkassa_net_banking.svg"
                        alt="Net Banking"
                      />
                      <div className="PaymentCard_limit">
                        {/* Min {setting("min_recharge")} */}
                      </div>
                    </button>
                  </div>
                  <div
                    className="grid-list"
                    // onClick={() => paymentGatewayDetails("3")}
                  >
                    <button className="btn payment-btn" data-tab="upi">
                      <img src="images/app-logo/upiMt.svg" alt="UPI" />
                      <div className="PaymentCard_limit">
                        {/* Min {setting("min_recharge")} */}
                      </div>
                    </button>
                  </div>
                </div>
                <div className="deposite-box" id="netbanking">
                  <div className="d-box">
                    <div className="limit-txt">
                      {/* LIMITS:<span>{setting("min_recharge")}</span> */}
                    </div>
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="login-controls mt-3 rounded-pill h42">
                          <label htmlFor="Username" className="rounded-pill">
                            <input
                              type="text"
                              className="form-control text-i10 amount"
                              id="net_bank_amount"
                              onInput={(e) =>
                                (e.target.value = e.target.value
                                  .replace(/[^0-9]/g, "")
                                  .replace(/(\..*?)\..*/g, "$1")
                                  .replace(/^0[^.]/, "0"))
                              }
                            />
                            <input
                              type="hidden"
                              id="net_bank_min_amount"
                              //   value={setting("min_recharge")}
                            />
                            <input
                              type="hidden"
                              id="net_bank_max_amount"
                              value=""
                            />
                            <i className="Input_currency">INR</i>
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <button
                          className="register-btn rounded-pill d-flex align-items-center w-100 mt-3 orange-shadow"
                          onClick={() => deposit("6")}
                        >
                          DEPOSIT
                        </button>
                      </div>
                    </div>
                    <div className="amount-tooltips">
                      <button className="btn amount-tooltips-btn">500</button>
                      <button className="btn amount-tooltips-btn active">
                        1000
                      </button>
                      <button className="btn amount-tooltips-btn">2500</button>
                      <button className="btn amount-tooltips-btn">5000</button>
                    </div>
                    <label
                      htmlFor="net_bank_amount"
                      className="error"
                      id="net_bank_amount-error"
                    ></label>
                  </div>
                </div>
                <div className="deposite-box" id="Phonepay">
                  <div className="d-box">
                    <div className="limit-txt">
                      {/* LIMITS:<span>{setting("min_recharge")} - </span> */}
                    </div>
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="login-controls mt-3 rounded-pill h42">
                          <label htmlFor="Username" className="rounded-pill">
                            <input
                              type="text"
                              className="form-control text-i10 amount"
                              id="phonepe_amount"
                              onInput={(e) =>
                                (e.target.value = e.target.value
                                  .replace(/[^0-9]/g, "")
                                  .replace(/(\..*?)\..*/g, "$1")
                                  .replace(/^0[^.]/, "0"))
                              }
                            />
                            <input
                              type="hidden"
                              id="phonepe_min_amount"
                              //   value={setting("min_recharge")}
                            />
                            <input
                              type="hidden"
                              id="phonepe_max_amount"
                              value=""
                            />
                            <i className="Input_currency">INR</i>
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <button
                          className="register-btn rounded-pill d-flex align-items-center w-100 mt-3 orange-shadow"
                          onClick={() => deposit("2")}
                        >
                          DEPOSIT
                        </button>
                      </div>
                    </div>
                    <div className="amount-tooltips">
                      <button className="btn amount-tooltips-btn">500</button>
                      <button className="btn amount-tooltips-btn active">
                        1000
                      </button>
                      <button className="btn amount-tooltips-btn">5000</button>
                      <button className="btn amount-tooltips-btn">10000</button>
                    </div>
                    <label
                      htmlFor="phonepe_amount"
                      className="error"
                      id="phonepe_amount-error"
                    ></label>
                  </div>
                </div>
                <div className="deposite-box" id="upi">
                  <div className="d-box">
                    <div className="limit-txt">
                      {/* LIMITS:<span>{setting("min_recharge")}</span> */}
                    </div>
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="login-controls mt-3 rounded-pill h42">
                          <label htmlFor="Username" className="rounded-pill">
                            <input
                              type="text"
                              className="form-control text-i10 amount"
                              id="upi_amount"
                              onInput={(e) =>
                                (e.target.value = e.target.value
                                  .replace(/[^0-9]/g, "")
                                  .replace(/(\..*?)\..*/g, "$1")
                                  .replace(/^0[^.]/, "0"))
                              }
                            />
                            <input
                              type="hidden"
                              id="upi_min_amount"
                              //   value={setting("min_recharge")}
                            />
                            <input type="hidden" id="upi_max_amount" value="" />
                            <i className="Input_currency">INR</i>
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <button
                          className="register-btn rounded-pill d-flex align-items-center w-100 mt-3 orange-shadow"
                          onClick={() => deposit("3")}
                        >
                          DEPOSIT
                        </button>
                      </div>
                    </div>
                    <div className="amount-tooltips">
                      <button className="btn amount-tooltips-btn">500</button>
                      <button className="btn amount-tooltips-btn active">
                        1000
                      </button>
                      <button className="btn amount-tooltips-btn">2500</button>
                      <button className="btn amount-tooltips-btn">5000</button>
                    </div>
                    <label
                      htmlFor="upi_amount"
                      className="error"
                      id="upi_amount-error"
                    ></label>
                    <div className="deposite-blc">
                      <div>BALANCE AFTER DEPOSITING</div>
                      <div className="dopsite-vlue">
                        ₹ <span id="upi_amount_txt"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pay-static-form text-white fw-bold">
              {/* ... Existing HTML structure for static form */}
              <div className="form-back d-flex align-items-center">
                <span className="material-symbols-outlined bold-icon me-1">
                  arrow_back
                </span>
                BACK
              </div>
              <div className="white-box mt-3 text-center">
                <img
                  src="images/barcode.png"
                  className="barcode-img"
                  id="barcode"
                  alt="Barcode"
                />
                <Link to="#" className="d-block link-text">
                  How to make deposit?
                </Link>
                <p className="text-dark">
                  To confirm the deposit, make a transfer to the banking
                  details:
                </p>
                {/* ... Existing HTML structure for banking details */}
              </div>
              <div className="white-box mt-3">
                <h5 className="text-muted f-14 fw-bold">TO BE CREDITED</h5>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="dopsite-vlue fw-bold f-20">
                    <div>
                      ₹ <span id="select_amount"></span>
                    </div>
                  </div>
                  <button className="btn btn-transparent p-0">
                    <span className="material-symbols-outlined bold-icon">
                      edit
                    </span>
                  </button>
                </div>
              </div>
              <form action="/depositNow" method="post" id="deposit_form">
                {/* ... Existing HTML structure for deposit form */}
                <button className="register-btn rounded-pill d-flex align-items-center w-100 mt-3 orange-shadow">
                  DEPOSIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
