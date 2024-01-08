import React, { useState } from 'react';

const RegisterF = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [role, setRole] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [showCompanySelect, setShowCompanySelect] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [cityError, setCityError] = useState('');
  const [stateError, setStateError] = useState('');
  const [postalCodeError, setPostalCodeError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [streetAddressError, setStreetAddressError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [companyIdError, setCompanyIdError] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
    setCityError('');
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
    setStateError('');
  };
  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
    setPostalCodeError('');
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError('');
  };
  const handleStreetAddressChange = (e) => {
    setStreetAddress(e.target.value);
    setStreetAddressError('');
  };
 
  const handleRoleChange = (e) => {
    const selection = e.target.value;
    setRoleError('');
    setShowCompanySelect(selection === 'Company');
  };
  /*
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email.trim()) {
      setEmailError('Email is required.');
      
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    //password validation
    if (!password.trim())
     {
      setPasswordError('Password is required.');
      
      
    }
    else if(password.length < 8)
    {
      setPasswordError('Password should contain minimun 8 characters');
      
    }
    else if(!passwordRegex.test(password))
    {
      setPasswordError('Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number');
      
    }

    //phone number validation
    if(!phoneNumber.trim())
    {
      setPhoneNumberError('please enter your phone number')
    }

    //city
    if(!city)
    {
      setCityError('Enter your city');
    }
    
    if(!state.trim())
    {
      setStateError('Enter your state')
    }
    if(!name.trim())
    {
      setNameError('Enter your full name')
    }
    if(!streetAddress.trim())
    {
      setStreetAddressError('Enter your address')
    }
    if(!postalCode.trim())
    {
      setPostalCodeError('Enter your postal code')
    }

    //role validation
    if(!role)
    {
      setRoleError('please select a role');
    }

    if (showCompanySelect && companyId) {
      setCompanyIdError('company name is required');
    }

    if(!emailError && !nameError && !passwordError && !confirmPasswordError && !cityError && !stateError && 
      !postalCodeError && !phoneNumberError && !streetAddressError && !roleError)
      {
        // alert('successful registration');
        setEmail('');
        setName('');
        setPassword('');
        setCity('');
        setState('');
        setPhoneNumber('');
        setConfirmPassword('');
        setPostalCode('');
        setStreetAddress('');
        setRole('');
        
      }

  }

    // Add logic for handling form submission

    return (
        
      <div className="card shadow border-0 mt-4 m-4" style={{width:"76%", left: "10%"}}>
      <div className="card-header bg-secondary bg-gradient m-lg-0 py-2">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="py-2 text-white">Register</h2>
          </div>
        </div>
      </div>
      <div className="card-body p-4 mb-2">
        <div className="row pt-4">
          <div className="col-md-12">
            <form id="registerForm" className="row" method="post" onSubmit={handleSubmit}>
              <h3 className="border-bottom pb-0 mb-2 text-secondary text-center">
                Create a new account.
              </h3>
              {/* Validation summary */}
              <div className="text-danger" role="alert"></div>
              
              {/* Email Input */}
              <div className="form-floating mb-2 col-md-12">
                <input
                  type="email"
                  className={`form-control ${emailError && 'is-invalid'}`}
                  id="email"
                  value={email}
                  autoComplete="username"
                  aria-required="true"
                  placeholder="name@example.com"
                  onChange={handleEmailChange}
                />
                <label className="ms-2 text-muted">Email</label>
                {emailError && <div className='invalid-feedback'>{emailError}</div>}
              </div>

              
              {/* Name Input */}
              <div className="form-floating mb-2 col-md-6">
                <input
                  type="text"
                  id="name"
                  value={name}
                  className={`form-control ${nameError && 'is-invalid'}`}
                  placeholder="Full Name"
                  onChange={handleNameChange}
                />
                <label className="ms-2 text-muted">Full Name</label>
                {nameError && <div className='invalid-feedback'>{nameError}</div>}
              </div>
 
              {/* Phone Number Input */}
              <div className="form-floating mb-2 col-md-6">
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  className={`form-control ${phoneNumberError && 'is-invalid'}`}
                  placeholder="Phone Number"
                  onChange={handlePhoneNumberChange}
                />
                <label className="ms-2 text-muted">Phone Number</label>
                {phoneNumberError && <div className='invalid-feedback'>{phoneNumberError}</div>}
              </div>
 
              {/* Password Input */}
              <div className="form-floating mb-2 col-md-6">
                <input
                  type="password"
                  id="password"
                  value={password}
                  className={`form-control ${passwordError && 'is-invalid'}`}
                  autoComplete="new-password"
                  aria-required="true"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
                <label className="ms-2 text-muted">Password</label>
                {passwordError && <div className='invalid-feedback'>{passwordError}</div>}
              </div>
 
              {/* Confirm Password Input */}
              <div className="form-floating mb-2 col-md-6">
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  className={`form-control ${confirmPasswordError && 'is-invalid'}`}                  
                  autoComplete="new-password"
                  aria-required="true"
                  placeholder="Confirm Password"
                  onChange={handleConfirmPasswordChange}
                />
                <label className="ms-2 text-muted">Confirm Password</label>
                {confirmPasswordError && <div className='invalid-feedback'>{confirmPasswordError}</div>}
              </div>
 
              {/* Street Address Input */}
              <div className="form-floating mb-2 col-md-6">
                <input
                  type="text"
                  id='streetAddress'
                  value={streetAddress}
                  className={`form-control ${streetAddressError && 'is-invalid'}`}
                  placeholder="Street Address"
                  onChange={handleStreetAddressChange}
                />
                <label className="ms-2 text-muted">Street Address</label>
                {streetAddressError && <div className='invalid-feedback'>{streetAddressError}</div>}
              </div>
 
              {/* City Input */}
              <div className="form-floating mb-2 col-md-6">
                <input
                  type="text"
                  id='city'
                  value={city}
                  className={`form-control ${cityError && 'is-invalid'}`}
                  placeholder="City"
                  onChange={handleCityChange}
                />
                <label className="ms-2 text-muted">City</label>
                {cityError && <div className='invalid-feedback'>{cityError}</div>}
              </div>
 
              {/* State Input */}
              <div className="form-floating mb-2 col-md-6">
                <input
                  type="text"
                  id='state'
                  value={state}
                  className={`form-control ${stateError && 'is-invalid'}`}
                  placeholder="State"
                  onChange={handleStateChange}
                />
                <label className="ms-2 text-muted">State</label>
                {stateError && <div className='invalid-feedback'>{stateError}</div>}              </div>
 
              {/* Postal Code Input */}
              <div className="form-floating mb-2 col-md-6">
                <input
                  type="text"
                  id='postalCode'
                  value={postalCode}
                  className={`form-control ${postalCodeError && 'is-invalid'}`}
                  placeholder="Postal Code"
                  on onChange={handlePostalCodeChange}
                />
                <label className="ms-2 text-muted">Postal Code</label>
                {postalCodeError && <div className='invalid-feedback'>{postalCodeError}</div>}              </div>
 
              {/* Role Select */}
              <div className="form-floating mb-2 col-md-6">
                <select
                  id='role'
                  value={role}
                  onChange={handleRoleChange}
                  className="form-select"
                >
                  <option disabled selected>--Select Role--</option>
                  <option value="User">User</option>
                  <option value="Company">Company</option>
                  <option value="Admin">Admin</option>
                  <option value="Customer">Customer</option>
                </select>
              </div>
 
              {/* Company Select */}
              <div className="form-floating mb-2 col-md-6">
              {showCompanySelect && (
                  <select
                    id='companyId'
                    className="form-select"
                  >
                    <option disabled selected>--Select Company--</option>
                    <div>
                        <option >Company</option>
                    </div>
                  </select>
              )}
              </div>
 
              {/* Submit Button */}
              <div className="col-12">
                <button type="submit" className="w-100 btn btn-lg btn-primary" >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    );
  };

  export default RegisterF;