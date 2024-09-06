import AdminSidebar from '../../components/AdminSidebar';
import DocSignup from '../../components/DocSignUp';
import './adminhomepage.css';

const AdminHome = () => {
  return (
    <>
      <div className="admin-home">
        <div className="admin-sidebar">
          <AdminSidebar />
        </div>
        <div className="admin-contents">
          <DocSignup />
        </div>
      </div>
    </>
  );
};

export default AdminHome;
