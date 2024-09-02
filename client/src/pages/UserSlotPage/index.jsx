import { Tag, Button } from 'antd';
import Sidebar from '../../components/UserSidebar';
import axios from '../../utils/axios';
import { useState, useEffect } from 'react';
import './style.css';

const UserSlotPage = () => {
  const [appointments, setAppointments] = useState([]);
  const userId = localStorage.getItem('id');

  const getAppointmentDetails = async () => {
    try {
      if (!userId) {
        console.error('User ID is not available');
        return;
      }

      const response = await axios.get(`/appointment/api/${userId}`);
      setAppointments(response.data.appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error.message);
    }
  };

  useEffect(() => {
    getAppointmentDetails();
  }, [userId]);

  return (
    <div className="user-slotpage">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="table-contents">
        {appointments.length > 0 ? (
          appointments.map(appointment => (
            <div key={appointment._id} className="booking-card">
              <div className="booking-header">
                <h3>
                  {appointment.doctor.firstname} {appointment.doctor.lastname}
                </h3>
                <Tag
                  color={
                    appointment.status === 'Pending'
                      ? 'orange'
                      : appointment.status === 'Accepted'
                      ? 'green'
                      : 'red'
                  }
                >
                  {appointment.status}
                </Tag>
              </div>
              <div className="booking-details">
                <p>
                  <strong>Date:</strong>{' '}
                  {new Date(appointment.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Time:</strong> {appointment.time}
                </p>
                <p>
                  <strong>Specialization:</strong> {appointment.department.name}
                </p>
              </div>
              <div className="booking-footer">
                <Button type="primary" danger>
                  Delete Booking
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No appointments found</p>
        )}
      </div>
    </div>
  );
};

export default UserSlotPage;
