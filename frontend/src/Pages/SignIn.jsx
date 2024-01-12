import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { postData } from "../api/ClientFunction";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../ContextAndHooks/AuthContext";
import { useUserInfo } from "../api/query/useUserInfo";
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #012348;
  height: 100vh;
`;
export default function SignIn() {
  const { setUser } = useAuth();
  const [seconds, setSeconds] = useState(120);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [showOtpButton, setShowOtpButton] = useState(true);
  const otpRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  function startTimer() {
    setShowOtpButton(false);
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        // Ensure that seconds won't go below 0
        const newSeconds = prevSeconds > 0 ? prevSeconds - 1 : 0;

        if (newSeconds === 0) {
          // Timer has reached zero, perform any necessary actions here
          setShowOtpButton(true);
          clearInterval(interval);
          console.log("Time's up!");
          clearInterval(interval);
        }

        return newSeconds;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function onSubmit(data) {
    const url = "/auth/login";
    console.log(data);
    const res = await postData(url, data);
    if (res.status === true) {
      toast.success("Login Successful!");
      if (res.token) {
        const tokenExpiryTime = 24 * 60 * 60 * 1000; // One day in milliseconds
        const expirationTime = new Date().getTime() + tokenExpiryTime;
        localStorage.setItem("token", res.token);
        localStorage.setItem("tokenExpiry", expirationTime.toString());
      }
      navigate("/");
    }
  }
  async function sendOtp() {
    const phone = mobileRef?.current?.value;
    const url = `/auth/otp/verify/reset`;
    const res = await postData(url, { phone });
    if (res.status === true) {
      setShowOtpButton(false);
      startTimer();
    }
  }
  async function handleForgotPassword() {
    const phone = mobileRef.current.value;
    const otp = otpRef.current.value;
    const pwd = passwordRef.current.value;
    const data = {
      phone,
      otp,
      pwd,
    };
    const url = `/auth/resetPassword`;
    const res = await postData(url, data);
    closeModal();
  }
  return (
    <Wrapper className="active" id="via-email">
      <form
        className="register-form row w-75"
        style={{ color: "white" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Login</h2>

        {/* Email Field */}
        <div className="col-12">
          <div className="input-group flex-nowrap mb-3 promocode align-items-center">
            <span className="input-group-text" id="addon-wrapping">
              <span className="material-symbols-outlined bold-icon">
                smartphone
              </span>
            </span>
            <input
              required
              type="text"
              className="form-control ps-0"
              id="mobile"
              placeholder="Mobile"
              name="phone"
              {...register("phone")}
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="col-12">
          <div className="input-group flex-nowrap mb-3 promocode align-items-center">
            <span className="input-group-text" id="addon-wrapping">
              <span className="material-symbols-outlined bold-icon">lock</span>
            </span>
            <input
              required
              type={`${isVisible ? "text" : "password"}`}
              className="form-control ps-0"
              id="regpassword"
              placeholder="Password"
              name="password"
              {...register("password")}
            />

            {!isVisible && (
              <FaRegEyeSlash
                className="material-symbols-outlined input-ico"
                onClick={() => setIsVisible(!isVisible)}
              />
            )}
            {isVisible && (
              <IoEyeOutline
                className="material-symbols-outlined input-ico"
                onClick={() => setIsVisible(!isVisible)}
              />
            )}
          </div>
        </div>
        {/* forgot password */}
        <div className="col-12 mb-2">
          <div className="checks-bg">
            <div
              className="pretty p-svg"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="state" style={{ marginLeft: "-20px" }}>
                <label>
                  Forgot Your Password?{" "}
                  <span
                    className="text-white"
                    onClick={openModal}
                    style={{ cursor: "pointer", important: "true" }}
                  >
                    Click Here
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* ForgotPasswordModal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div>
            <div>
              <div className="modal-content">
                <div className="modal-header login-header">
                  <span className="material-symbols-outlined">lock</span>
                  <h5 className="modal-title" id="exampleModalLabel">
                    PASSWORD RECOVERY
                  </h5>
                </div>
                <div className="mx-4 modal-body pt-0">
                  <label id="registerError" className="error"></label>
                  <p className="link-text f-14 email_text text-white">
                    To recover your password, enter your phone number used
                    during registration
                  </p>
                  <form className="login-form" id="forgotPasswordForm">
                    <div className="login-controls">
                      <label htmlFor="mobile">
                        <input
                          type="text"
                          className="form-control text-indent-0"
                          id="mobile"
                          placeholder="Mobile"
                          name="mobile"
                          required
                          ref={mobileRef}
                        />
                        {showOtpButton && (
                          <button
                            className="btn orange-btn px-4 text-white "
                            onClick={() => {
                              sendOtp();
                            }}
                          >
                            Send Otp
                          </button>
                        )}
                        {!showOtpButton && (
                          <button className="btn orange-btn px-4 text-white ">
                            Resend Otp In: {seconds}
                          </button>
                        )}
                      </label>
                    </div>
                    <div className="login-controls" id="otp_div">
                      <label htmlFor="otp">
                        <input
                          type="text"
                          className="form-control text-indent-0"
                          id="otp"
                          placeholder="Verification Code"
                          name="otp"
                          ref={otpRef}
                          required
                        />
                      </label>
                    </div>
                    <div
                      className="login-controls"
                      id="otp_div"
                      style={{ marginBottom: "-12px" }}
                    >
                      <label htmlFor="NewPassword">
                        <input
                          type="password"
                          className="form-control text-indent-0"
                          id="NewPassword"
                          placeholder="New Password"
                          name="otp"
                          ref={passwordRef}
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <label id="otp_error" className="error"></label>
                    </div>
                    <button
                      className="btn green-btn md-btn custm-btn-2 mx-auto mt-3 mb-3 w-100"
                      id="processSubmit"
                      onClick={() => handleForgotPassword()}
                    >
                      PROCEED
                    </button>
                    <div
                      className="text-white cursor-pointer f-14 mb-2 d-flex justify-content-center"
                      onClick={closeModal}
                      style={{ cursor: "pointer" }}
                    >
                      Cancel
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        {/* for register */}
        <div className="col-12">
          <div className="checks-bg">
            <div
              className="pretty p-svg"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="state" style={{ marginLeft: "-20px" }}>
                <label>
                  Not registered yet? <Link to="/auth/register">Register</Link>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn orange-btn md-btn custm-btn-2 mx-auto mt-3 mb-0 registerSubmit"
          id="register_via_email"
          style={{ cursor: "pointer", important: "true" }}
        >
          Login
        </button>
      </form>
    </Wrapper>
  );
}
