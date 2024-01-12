<div
className="modal fade l-modal"
id="forgot-modal"
tabIndex="-1"
aria-labelledby="forgot-modal"
aria-hidden="true"
>
<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div className="modal-content">
    <div className="modal-header login-header">
      <span className="material-symbols-outlined">lock</span>
      <h5 className="modal-title" id="exampleModalLabel">
        PASSWORD RECOVERY
      </h5>
    </div>
    <div className="modal-body pt-0">
      <label id="registerError" className="error"></label>
      <p className="link-text f-14 email_text">
        To recover your password, enter your email or phone number used
        during registration
      </p>
      <form
        className="login-form"
        onSubmit={handleSubmit}
        id="forgotPasswordForm"
      >
        <input type="hidden" name="otp_id" id="otp_id" />
        <div className="login-controls" id="user_name_div">
          <label htmlFor="Username">
            <input
              type="text"
              className="form-control text-indent-0"
              id="user_name"
              placeholder="Your email/phone"
              name="username"
              required
            />
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
            />
          </label>
        </div>
        <div>
          <label id="otp_error" className="error"></label>
        </div>
        <button
          className="btn green-btn md-btn custm-btn-2 mx-auto mt-3 mb-3 w-100"
          id="processSubmit"
          type="submit"
        >
          PROCEED
        </button>
        <a
          href="#"
          className="link-text f-14 d-flex justify-content-center"
          data-bs-dismiss="modal"
        >
          Cancel
        </a>
      </form>
    </div>
  </div>
</div>
</div>