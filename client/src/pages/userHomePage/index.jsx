import { NavLink } from 'react-router-dom';
import './style.css';

const UserHome = () => {
  return (
    <div className="user-home">
      <div className="sidebar">
        <div className="details">
          <img
            className="img1"
            src="/PatientProfilePic.png"
            alt="Patient Profile"
          />
          <p className="name">Patient Name</p>
        </div>
        <div className="contents">
          <div className="navcontent">
            <NavLink className="link" to="">
              Home
            </NavLink>
            <NavLink className="link" to="">
              Booking
            </NavLink>
            <NavLink className="link" to="">
              Add Slot
            </NavLink>
          </div>
          <div className="logout">
            <NavLink className="link" to="">
              Logout
            </NavLink>
          </div>
        </div>
      </div>

      <div className="booking-slot">
        <div className="form-container">
          <h1 className="form-head">Book Your Appointment</h1>
          <p className="sub-head">Schedule Your Consultation with Ease</p>
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="department">Select Department</label>
              <select id="department" name="department" required>
                <option value="" disabled>
                  Select Your Department
                </option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="doctor">Select Doctor</label>
              <select id="doctor" name="doctor" required>
                <option value="" disabled>
                  Select Your Doctor
                </option>
                <option value="dr_smith">Dr. Smith</option>
                <option value="dr_jones">Dr. Jones</option>
                <option value="dr_brown">Dr. Brown</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Select Date</label>
              <input type="date" id="date" name="date" required />
            </div>

            <div className="form-group time-group">
              <label htmlFor="time">Select Time</label>
              <input
                type="time"
                id="time"
                name="time"
                min="08:00"
                max="20:00"
                required
              />
              <p className="note">(Visiting hours are 8am to 8pm)</p>
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number*</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Mobile Number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email (optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email (optional)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Reason for Appointment</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Reason for Appointment"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
