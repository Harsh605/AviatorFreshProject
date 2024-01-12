import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { MenuItem, Select, InputLabel, FormControl, ListSubheader } from '@mui/material';

import "./Bank.css"

const BankDetailsForm = () => {
    const [formData, setFormData] = useState({
        bankName: '',
        accountNo: '',
        accountHolderName: '',
        accountsecretkey:'',
        ifscCode: '',
        mobileNo: '',
        upiId: '',
        barcodeFile: null,
    });
    
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // If the input is a file input, update the state with the file
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission
    console.log('Form data submitted:', formData);
  };

 
  return (

    <Fade  top distance='2%' duration={700}>
    <div style={{background:'#F2EDF3'}}  className="wrapper">
        {/*page-wrapper*/}
        <div className="page-wrapper">
            {/*page-content-wrapper*/}
            <div className="page-content-wrapper">
                <div className="page-content">
    <div className='Bank-details'>
        <div className='Bank-heading'>
        <i class='bx bxs-home'></i>
    <h2>Bank Setup</h2>
    </div>
    <button class="custom-btn btn-6"><span>Custom</span></button>
      <form onSubmit={handleSubmit}>
     
        <div className='bank-form'>
         
        <div className='Bank-lables'>
          <label>Bank Name:</label>
          <input
            type="text"
            placeholder='Enter your Bank name'
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='Bank-lables'>
          <label>Account No:</label>
          <input
           placeholder='Enter your Account No. '
            type="text"
            name="accountNo"
            value={formData.accountNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className='Bank-lables'>
          <label>Account Holder Name:</label>
          <input
          placeholder='Enter your Account Name '
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='Bank-lables'>
          <label>IFSC Code:</label>
          <input
          placeholder='Enter your IFSC Code '
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            required
          />
        </div>
        </div>
      
       
        <div className='bank-form'>
       
        <div className='Bank-lables'>
          <label>Mobile No:</label>
          <input
             placeholder='Enter your Mobile No.  '
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className='Bank-lables'>
          <label>UPI Id:</label>
          <input
             placeholder='Enter your UPI Id  '
            type="text"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            required
          />
        </div>
        <div className='Bank-lables'>
          <label>Bar code:</label>
          <input
          style={{border:"none"}}
            type="file"
            name="barcodeFile"
            onChange={handleChange}
            accept="image/*"
          />
        </div>
       
       
        <div>   
          <button type="submit">Submit</button>
        </div>
        </div>
       
       
           
      </form>
     
      <button class="custom-btn btn-6"><span>Automatic</span></button>
      <div className='second-form'>
      <div className='Bank-lables'>
          <label>Secret Key:</label>
          <input
          placeholder='Enter your Secret Key '
            type="number"
            name="accountsecretkey"
            value={formData.accountsecretkey}
            onChange={handleChange}
            required
          />
        </div>
        <div>   
          <button  type="submit">Submit</button>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
</Fade>
  );
};

export default BankDetailsForm;

