import axios from '../../utils/axios';
import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './docsidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({});

  const getDoctorDetail = async () => {
    const doctorID = localStorage.getItem('id');
    const response = await axios.get(`/doctor/${doctorID}`);
    setDoctor(response.data);
  };

  useEffect(() => {
    getDoctorDetail();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/doctor/login');
  };

  return (
    <div className="sidebar">
      <div className="details">
        <img className="doctor-img" src={doctor.image} alt="Doctor" />
        <p className="doctor-name">{`${doctor.firstname} ${doctor.lastname}`}</p>
        <p className="doctor-email">{doctor.email}</p>
      </div>
      <div className="menu">
        <NavLink className="link" to="/doctor/home">
          Home
        </NavLink>
        {/* <NavLink className="link" to="/doctor/bookings">
          Booking
        </NavLink>
        <NavLink className="link" to="/doctor/addslot">
          Add Slot
        </NavLink> */}
      </div>
      <p className="link logout" onClick={logout}>
        Logout
      </p>
    </div>
  );
};

export default Sidebar;
