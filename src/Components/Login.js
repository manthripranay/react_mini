import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Login = () => {
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
    const [company, setCompany] = useState('');
 
  const [loginStatus, setLoginStatus] = useState('');
 
  const navigate = useNavigate();
 
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'Admin@123';
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      if (email === adminEmail && password === adminPassword) {
        setLoginStatus('Login successful!');
        navigate('/admin');
      } else {
        const response = await axios.post('http://localhost:5145/api/User/login', {
            name,  
            email,
            password,
            confirmPassword,
            streetAddress,
            phoneNumber,
            city,
            state,
            postalCode,
            role
        });
      if (response.data === 'Login successful') {
          setLoginStatus('Login successful!');
          navigate('/User');
          // Further actions upon successful login
      } else {
          setLoginStatus('Invalid credentials');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginStatus('Login failed');
    }
  };
  return (
    <>
 
      <div className='container pt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-7'>
            <div className='card shadow-lg p-4' style={{ backgroundColor: 'lightblue' }}>
              <h1 className='text-center mb-4 text-primary'>Login</h1>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className='row mb-3'>
                  <div className='col-md-6 offset-md-3'>
                    <input
                      type='text'
                      value={email}
                      className='form-control mb-3'
                      placeholder='Email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-6 offset-md-3'>
                    <input
                      type='password'
                      value={password}
                      className='form-control'
                      placeholder='Password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div className='row'>
                  <div className='col-md-8 offset-md-4'>
                    <button type='submit' className='btn btn-outline-primary btn-sm w-50'>
                      Login
                    </button>
                  </div>
                </div>
              </form>
              {loginStatus && <p className='text-danger mt-3'>{loginStatus}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;