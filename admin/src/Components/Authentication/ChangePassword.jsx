import React, { useState } from 'react';
import "./changepassword.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
    // Add your logic for handling form submission here
  };

  return (
    <div className="body">
      <div className="login-box">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              required
            />
            <label>Old Password</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
            <label>New Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <label>Confirm Password</label>
          </div>
          <a onClick={(event) => handleSubmit(event)} type='submit' href="#">
      <span />
      <span />
      <span />
      <span />
      Submit
    </a>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
