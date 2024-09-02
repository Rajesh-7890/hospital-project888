import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import DocLogin from './pages/DocLoginPage';
import DocSignup from './pages/DocSignupPage';
import UserLogin from './pages/UserLoginPage';
import UserSignup from './pages/UserSignupPage';
import UserHome from './pages/userHomePage';
import DocHome from './pages/DocHome';
import DocBookingPage from './pages/DocBooking';
import DocSlotPage from './pages/DocSlotPage';
import UserSlotPage from './pages/UserSlotPage';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/doctor/login" element={<DocLogin />} />
        <Route path="/doctor/signup" element={<DocSignup />} />
        <Route path="/doctor/home" element={<DocHome />} />

        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />

        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/slotpage" element={<UserSlotPage />} />

        <Route element={<PrivateRoute role="doctor" />}>
          <Route path="/doctor/bookingpage" element={<DocBookingPage />} />
          <Route path="/doctor/slotpage" element={<DocSlotPage />} />
        </Route>

        <Route element={<PrivateRoute role="user" />}></Route>
      </Routes>
    </>
  );
};

export default App;
