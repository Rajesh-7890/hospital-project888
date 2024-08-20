import { Routes, Route } from 'react-router-dom';
import Signup from './pages/SignupPage';
import Login from './pages/loginpage';
import DocHome from './pages/DocHome';
import UserHome from './pages/UserHome';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dochome" element={<DocHome />} />
        <Route path="/userhome" element={<UserHome />} />
      </Routes>
    </>
  );
};

export default App;
