import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import Sidebar from '../../components/UserSidebar';
import './style.css';

const UserHome = () => {
  const [appointment, setappointment] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    firstname: '',
    mobilenumber: '',
    email: '',
    message: '',
  });

  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('/department');
      setDepartments(response.data);
      console.log({ Departments: response.data });
    } catch (err) {
      console.log('Error fetching departments:', err.message);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDoctors = async departmentId => {
    try {
      const response = await axios.get(`/doctor/doctors/${departmentId}`);
      setDoctors(response.data);
    } catch (err) {
      console.error('Error fetching doctors:', err);
    }
  };

  const onChange = (e, key) => {
    setappointment({ ...appointment, [key]: e.target.value });

    if (key == 'department') {
      fetchDoctors(e.target.value);
    }
  };

  const onBtnClick = async () => {
    try {
      console.log('Attempting bookingSlot...');
      const response = await axios.post(
        '/appointment/book-appointment',
        appointment
      );

      toast.success('Appointment Bokked sucessfully');
    } catch (e) {
      console.log('Signup failed:', e.response ? e.response.data : e.message);
      toast.error('Appointment booking failed');
    }
  };

  return (
    <div className="user-home">
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* booking slot form */}
      <div className="booking-slot">
        <div className="form-container">
          <h1 className="form-head">Book Your Appointment</h1>
          <p className="sub-head">Schedule Your Consultation with Ease</p>
          <form>
            <div className="form-group">
              <ToastContainer />
              <label>Select Department</label>
              <select
                id="department"
                required
                onChange={e => onChange(e, 'department')}
              >
                <option value="">Select Your Department</option>

                {departments.map(department => (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Select Doctor</label>
              <select
                id="doctor"
                required
                onChange={e => onChange(e, 'doctor')}
              >
                <option>Select Your Doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor._id}>
                    Dr. {doctor.firstname} {doctor.lastname}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Select Date</label>
              <input type="date" required onChange={e => onChange(e, 'date')} />
            </div>

            <div className="form-group time-group">
              <label>Select Time</label>
              <input
                type="time"
                id="time"
                name="time"
                min="08:00"
                max="20:00"
                required
                onChange={e => onChange(e, 'time')}
              />
              <p className="note">(Visiting hours are 8am to 8pm)</p>
            </div>

            <div className="form-group">
              <label>Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
                onChange={e => onChange(e, 'fullname')}
              />
            </div>

            <div className="form-group">
              <label>Mobile Number*</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Mobile Number"
                required
                onChange={e => onChange(e, 'mobilenumber')}
              />
            </div>

            <div className="form-group">
              <label>Email (optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email (optional)"
                onChange={e => onChange(e, 'email')}
              />
            </div>

            <div className="form-group">
              <label>Reason for Appointment</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Reason for Appointment"
                onChange={e => onChange(e, 'message')}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" onClick={onBtnClick}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
