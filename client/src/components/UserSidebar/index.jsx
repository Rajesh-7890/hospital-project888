import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import './style.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const getUserDetails = async () => {
    const userID = localStorage.getItem('id');
    const response = await axios.get(`/user/${userID}`);
    console.log(response.data);
    setUser(response.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/user/login');
  };

  return (
    <>
      <div className="details">
        <img className="img1" src="/PatientProfilePic.png" />
        <p className="name">{`${user.firstname} ${user.lastname}`}</p>
      </div>
      <div className="contents">
        <div className="navcontent">
          <NavLink className="link" to="/user/home">
            Home
          </NavLink>
          <NavLink className="link" to="/user/slotpage">
            Your Slot
          </NavLink>
        </div>
        <div className="logout">
          <p onClick={logout}>Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
