import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

import './style.css';

const UserLogin = () => {
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
      const response = await axios.post('/user/login-in', login);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.id);

      navigate('/user/home');
    } catch (e) {
      console.log('Email id or Password is incorrect');
      // console.log(e);
    }
  };

  return (
    <div className="userlogin">
      <div className="login-container">
        <h2>USER Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email ID</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email:"
            onChange={e => onChange(e, 'email')}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password:"
            onChange={e => onChange(e, 'password')}
          />
        </div>
        <div className="forgot-password">
          <Link to="">Forgot password</Link>
        </div>
        <div className="button">
          <button className="btn" onClick={onLogin}>
            Login
          </button>
        </div>
        <div className="signup-link">
          Don't have an account? <Link to="/user/signup">SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
