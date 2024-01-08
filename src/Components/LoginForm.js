import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email) {
      setEmailError('Email is required.');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    // Simple password validation
    if (!password) {
      setPasswordError('Password is required.');
      return;

    }
    /*
    else if(password.length < 8)
    {
      setPasswordError('Password should contain minimun 8 characters');
      return;
    }
    else if(!passwordRegex.test(password))
    {
      setPasswordError('Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number');
      return;
    } */

    // Add logic for handling form submission
  };

  return (
    <div className="card shadow border-0 mt-4 m-4 " style={{width:"60%", left: "18%"}}>
      <div className="card-header bg-secondary bg-gradient m-lg-0 py-2">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="py-2 text-white">Login</h2>
          </div>
        </div>
      </div>
      <div className="card-body p-1 m-2 mb-3">
        <div className="row m-4 mx-4">
          <div className="col-md-12 ">
            <section>
              <form id="account" onSubmit={handleSubmit}>
                <h3 className="border-bottom pb-0 mb-2 text-secondary text-center"> Use a local account to log in. </h3>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    autoComplete="username"
                    aria-required="true"
                    placeholder="name@example.com"
                  />
                  <label className="form-label">Email</label>
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                    autoComplete="current-password"
                    aria-required="true"
                    placeholder="password"
                  />
                  <label className="form-label">Password</label>
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>

                <div>
                  <div className="checkbox mb-2">
                    <label>
                      <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} /> Remember Me
                    </label>
                  </div>
                </div>

                <div>
                  <button id="login-submit" type="submit" className="w-100 btn btn-lg btn-primary">
                    Log in
                  </button>
                </div>

                <div className="d-flex justify-content-between pt-2">
                  <p>
                    <a href="./ForgotPassword">Forgot your password?</a>
                  </p>
                  <p>
                    <a href="./register">Register as a new user</a>
                  </p>
                  <p>
                    <a href="./ResendEmailConfirmation">Resend email confirmation</a>
                  </p>
                </div>
              </form>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginForm;