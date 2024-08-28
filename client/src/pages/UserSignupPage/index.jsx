import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';

import { useState } from 'react';

import './style.css';

const UserSignup = () => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [signup, setSignup] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    mobilenumber: '',
    gender: '',
    address: '',
    DOB: '',
  });

  const onChange = (e, key) => {
    setSignup({ ...signup, [key]: e.target.value });
  };

  const onSignupBtn = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      console.log('Attempting Signup...');
      const response = await axios.post('/user/sign-up', signup);
      console.log('Signup successful:', response.data);
      toast.sucess('Signup Sucessful');
      navigate('/user/login');
    } catch (e) {
      console.log('Signup failed:', e.response ? e.response.data : e.message);
      setError('Signup failed. Please check your details and try again.');
      toast.error('Signup failed, Please check ur value');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="user">
      <div className="userSignup">
        <div className="signup-container">
          <h2>User Sign Up</h2>
          {error && <p className="error">{error}</p>}
          <div className="div">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First name"
                onChange={e => onChange(e, 'firstname')}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last name"
                onChange={e => onChange(e, 'lastname')}
              />
            </div>
            <div className="form-group">
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Email"
                onChange={e => onChange(e, 'email')}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={e => onChange(e, 'password')}
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="Mobile Number"
                onChange={e => onChange(e, 'mobilenumber')}
              />
            </div>
            <div className="form-group">
              <label>Gender</label>

              <select onChange={e => onChange(e, 'gender')}>
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" onChange={e => onChange(e, 'DOB')} />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                placeholder="Address"
                onChange={e => onChange(e, 'address')}
              ></textarea>
            </div>
            <button
              onClick={onSignupBtn}
              className="signup-button"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
