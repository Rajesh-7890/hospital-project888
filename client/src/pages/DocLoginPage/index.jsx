import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

import './style.css';

const DocLogin = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const onChange = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  const onLogin = async () => {
    try {
      const response = await axios.post('/doctor/login-in', login);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.id);

      navigate('/doctor/home');
    } catch (e) {
      console.log('Email id or Password is incorrect');
      // console.log(e);
    }
  };

  return (
    <div className="doclogin">
      <div className="loginContainer">
        <h2>DOCTOR Login</h2>
        <div className="inputGroup">
          <label htmlFor="email">Email ID:</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={e => onChange(e, 'email')}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={e => onChange(e, 'password')}
          />
        </div>
        <div className="forgotPassword">
          <Link to="">Forgot password</Link>
        </div>
        <div className="loginButton">
          <button className="btn" onClick={onLogin}>
            Login
          </button>
        </div>
        <div className="signupLink">
          Don't have an account? <Link to="/signup">SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default DocLogin;
