import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

const Login = () => {
  return (
    <div className="login-form">
      <div className="login">
        <h1>Login Page</h1>
        <div className="email">
          <label>Email</label>
          <Input type="email" placeholder="Email" />
        </div>

        <div className="password">
          <label>Password</label>
          <Input type="password" placeholder="Password" />
        </div>

        <Button className="btn">LOGIN</Button>
        <p>
          Don't have a account <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
