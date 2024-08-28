import './style.css';

const DocSignup = () => {
  return (
    <div className="main">
      <div className="doc-ignup">
        <div className="signup-container">
          <h2>DOCTOR Sign Up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" required />
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input type="email" id="email" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input type="tel" id="mobileNumber" required />
              <label htmlFor="department">Department</label>
              <input type="text" id="department" required />
            </div>
            <div className="form-group">
              <label htmlFor="specialization">Specialization</label>
              <input type="text" id="specialization" required />
              <label htmlFor="gender">Gender</label>
              <select id="gender" required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input type="date" id="dateOfBirth" required />
              <label htmlFor="address">Address</label>
              <textarea id="address" required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="image">Profile Image</label>
              <input type="file" id="image" accept="image/*" required />
            </div>
            <button className="signup-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DocSignup;
