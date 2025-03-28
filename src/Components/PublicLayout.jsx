<<<<<<< HEAD
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="public-layout">
      {/* No header/footer needed since your App.js handles layout */}
      <Outlet /> {/* Renders public pages (login and under-development) */}
    </div>
  );
};

export default PublicLayout;
=======
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <Outlet /> {/* Ensures child routes (AdminLogin, NotFound) render */}
    </div>
  );
};

export default PublicLayout;
>>>>>>> 6e8f7a9 (Initial commit in new location)
