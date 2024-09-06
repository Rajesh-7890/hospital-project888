import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import './ahomepage.css';

const HomePage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          {/* <img
            src="/path/to/hospital-logo.png"
            alt="Hospital Logo"
            className="logo"
          /> */}
          <h1>Hospital Name</h1>
        </div>
        <div className="navbar-links">
          <Link to="/user/login">User</Link>
          <Link to="/doctor/login">Doctor</Link>
          <Link to="/admin/login">Admin</Link>
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className="secondary-navbar">
        <div className="secondary-navbar-links">
          <Link className="links" to="/home">
            Home
          </Link>
          <Link className="links" to="/about-us">
            About Us
          </Link>
          <Link className="links" to="/contact-info">
            Contact Info
          </Link>
          <Link className="links" to="/services">
            Services
          </Link>
        </div>
      </nav>

      <div className="welcome-section">
        <h1>Welcome to Ahalia International Foundation!</h1>
        <hr className="subline" />

        <div className="info-sections">
          <div className="info-section">
            <img src="homeimage.jpg" alt="About Our Company" />
            <br />
            <br />

            <h2>About Our Company</h2>
            <p>
              After establishing itself in the U.A.E., Ahalia Group spread its
              wings to India with the establishment of Ahalia Health, Heritage
              and Knowledge Village in Palakkad, Kerala in 2005. The focus on
              health, heritage and knowledge is visionary and critical as they
              are inherited from the past, maintained in the present and
              bestowed for the benefit of future generations.
            </p>
          </div>

          <div className="info-section">
            <h2>Hospitals</h2>
            <p>
              Ahalia Health Heritage & Knowledge Village is an Integrated Campus
              consisting of Ahalia Foundation Eye Hospital, Ahalia Ayurvedic
              Medical College and Hospital, Ahalia Diabetes Hospital, Ahalia
              Women and Children’s Hospital, Ahalia Heritage Village, Ahalia
              Children’s Village, Ahalia Public School, Ahalia School of
              Optometry, Ahalia School of Engineering & Technology, Ahalia
              School of Management, Ahalia School of Pharmacy and Ahalia School
              of Paramedical Sciences. Ahalia also has 19 regional centres for
              eye care across Kerala.
            </p>
            <br />
            <br />
            <br />
            <br />
            <h2>Educational Institutions</h2>
            <p>
              Ahalia Health Heritage & Knowledge Village houses an integrated
              academic campus. The vision of Ahalia educational institutions is
              to “Conquer the World of Professional Education through Quality”.
              It aims to transform students from all walks of life to
              knowledge-based, skill-intensive, ethical and moral professionals
              with competence, commitment and confidence.
            </p>
          </div>

          <div className="regional-center">
            <img src="homeimage2.jpg" alt="Regional Centers" />

            <h2>Regional Centres</h2>
            <div className="regional-list">
              <div className="column">
                <p>1. Kanhangad</p>
                <p>2. Vadakara</p>
                <p>3. Kannur</p>
                <p>4. Kalpetta</p>
                <p>5. Mukkam</p>
                <p>6. Manjeri</p>
                <p>7. Kottakkal</p>
                <p>8. Ponnani</p>
                <p>9. Pattambi</p>
                <p>10. Mannarkkad</p>
                <p>11. Thrissur</p>
                <p>12. Valapad</p>
              </div>
              <div className="column">
                <p>13. Irinjalakuda</p>
                <p>14. Ernakulam</p>
                <p>15. Paravur</p>
                <p>16. Muvattupuzha</p>
                <p>17. Thodupuzha</p>
                <p>18. Kottayam</p>
                <p>19. Changanassery</p>
                <p>20. Kayamkulam</p>
                <p>21. Pathanamthitta</p>
                <p>22. Kollam</p>
                <p>23. Thiruvananthapuram</p>
                <p>24. Attingal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <Card />
      </div>

      <div className="footer">
        <div className="footbar">
          <h6>Ahalia Foundation</h6>
          <p>
            “Everyone is working for their family.
            <br /> You are our family; we work here as a family.”
          </p>
          <br />
          <p>Adress:</p>
          <p>Email:</p>
          <p>Contact Us:</p>
        </div>

        <div className="foot-bar">
          <h5>Get to us know</h5>

          <a href="">
            <p>About us</p>
            <p>Our farmers</p>
            <p>Media</p>
            <p>Gallery</p>
            <p>Blog</p>
          </a>
        </div>
        <div className="foot-bar">
          <h5>Useful links</h5>
          <a href="">
            <p>Private policy</p>
            <p>Return and refund policy</p>
            <p>Ship and delivery policy</p>
            <p>Terms and condition</p>
            <p>Disclaimer</p>
            <p>Careers</p>
          </a>
        </div>
        <div className="foot-bar">
          <h5>More</h5>
          <a href="#">
            <p>Sign in</p>
          </a>
          <a href="">
            <p>Register</p>
          </a>
          <a href="">
            <p>Need any help</p>
          </a>
        </div>

        <div className="foot-bar">
          <h5>We serve</h5>
          <p>kochi</p>
          <p>Palakkad</p>
          <p>Thrissur</p>
          <p>Kottayam</p>
          <p>Coimbatore</p>
          <p>Chennai</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
