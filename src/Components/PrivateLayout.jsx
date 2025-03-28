<<<<<<< HEAD
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
=======
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      
      <Outlet /> {/* Ensures child routes (Dashboard, Users, etc.) render */}
    </div>
  );
};

export default PrivateLayout;
>>>>>>> 6e8f7a9 (Initial commit in new location)
