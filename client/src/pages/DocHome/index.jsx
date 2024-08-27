import './style.css';

const Home = () => {
  return (
    <div className="home">
      <main className="wrapper">
        <div className="container">
          <h1 className="form-head">Book Your Appointment</h1>
          <p className="sub-head">Schedule Your Consultation with Ease</p>
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="city">Select City</label>
              <select id="city" name="city" required>
                <option value="" disabled>
                  Select Your City
                </option>
                <option value="balasore">Balasore</option>
                <option value="bhadrak">Bhadrak</option>
                <option value="baripada">Baripada</option>
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
            </div>
            <p className="note">(Visiting hours are 8am to 8pm)</p>

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
      </main>
    </div>
  );
};

export default Home;
