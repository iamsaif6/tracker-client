import { useContext, useEffect } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <span className="loading w-[80px] loading-spinner "></span>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;
