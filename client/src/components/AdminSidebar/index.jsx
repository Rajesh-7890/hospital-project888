import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import './adminsidebar.css';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({});

  const getUserDetails = async () => {
    const adminID = localStorage.getItem('id');
    const response = await axios.get(`/admin/${adminID}`);
    console.log(response.data);
    setAdmin(response.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/admin/login');
  };

  return (
    <>
      <div className="details">
        <img className="img1" src="/PatientProfilePic.png" />
        <p className="name">{`${admin.firstname} ${admin.lastname}`}</p>
      </div>
      <div className="contents">
        <div className="navcontent">
          <NavLink className="link" to="/admin/home">
            Home
          </NavLink>
          <NavLink className="link" to="/admin/doctor">
            Doctors
          </NavLink>
        </div>
        <div className="logout">
          <p onClick={logout}>Logout</p>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
