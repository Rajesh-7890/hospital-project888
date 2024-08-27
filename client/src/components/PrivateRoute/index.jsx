// import { checkToken } from '../../utils/localFunctions';
import { checkToken } from '../../utils/localfunction';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = props => {
  return checkToken(props.role) ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
