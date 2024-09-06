import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/A-HomePage';
import AdminLogin from './pages/AdminLoginPage';
import AdminHome from './pages/AdminHomePage';
import DoctorPage from './pages/DoctorsPage';
import DocLogin from './pages/DocLoginPage';
import UserLogin from './pages/UserLoginPage';
import UserSignup from './pages/UserSignupPage';
import UserHome from './pages/userHomePage';
import DocHome from './pages/DocHome';
import DocBookingPage from './pages/DocBooking';
import DocSlotPage from './pages/DocSlotPage';
import DocForgotPassword from './pages/DocForgotPassword';
import DocResetPassword from './pages/DocResetPassword';
import UserSlotPage from './pages/UserSlotPage';
import UserForgotPassword from './pages/UserForgotPassword';
import UserResetPassword from './pages/UserResetPassword';
import PrivateRoute from './components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<PrivateRoute role="admin" />}>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/doctor" element={<DoctorPage />} />
        </Route>

        <Route path="/doctor/login" element={<DocLogin />} />
        <Route path="/doctor/forgotpassword" element={<DocForgotPassword />} />
        <Route path="/doctor/reset/:token" element={<DocResetPassword />} />

        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/forgotpassword" element={<UserForgotPassword />} />
        <Route path="/user/reset/:token" element={<UserResetPassword />} />

        <Route element={<PrivateRoute role="doctor" />}>
          <Route path="/doctor/home" element={<DocHome />} />
          <Route path="/doctor/bookingpage" element={<DocBookingPage />} />
          <Route path="/doctor/slotpage" element={<DocSlotPage />} />
        </Route>

        <Route element={<PrivateRoute role="user" />}>
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/slotpage" element={<UserSlotPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
