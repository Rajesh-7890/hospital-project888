import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

import './adminloginpage.css';
import { toast } from 'react-toastify';

const AdminLogin = () => {
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
      const response = await axios.post('/admin/login-in', login);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.id);
      toast.success('Login sucessfully');
      console.log({ message: response.data });

      navigate('/admin/home');
    } catch (e) {
      toast.error('Email id or Password is incorrect');
      console.log('Email id or Password is incorrect');
      // console.log(e.message);
    }
  };

  return (
    <div className="userlogin">
      <div className="login-container">
        <h2>Admin Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email ID</label>
          <input
            id="email"
            type="email"
            placeholder="Email:"
            onChange={e => onChange(e, 'email')}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password:"
            onChange={e => onChange(e, 'password')}
          />
        </div>

        <div className="button">
          <button className="btn" onClick={onLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
