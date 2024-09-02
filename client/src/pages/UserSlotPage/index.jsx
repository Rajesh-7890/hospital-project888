import Sidebar from '../../components/UserSidebar';
import axios from '../../utils/axios';
import { useState, useEffect } from 'react';

import './style.css';

const UserSlotPage = () => {
  const [appointments, setAppointments] = useState([]);
  const userId = localStorage.getItem('id'); // Get user ID from localStorage
  console.log(userId);
  const getAppointmentDetails = async () => {
    try {
      if (!userId) {
        console.error('User ID is not available');
        return;
      }

      const response = await axios.get(`/appointment/${userId}`);
      setAppointments(response.data.appointments); // Adjust based on API response structure
      console.log({ appointments: response.data.appointments });
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
                <span className="status confirmed">Confirmed</span>
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
                {/* Add buttons for rescheduling or canceling if needed */}
                <button className="cancel-btn">Delete Booking</button>
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
