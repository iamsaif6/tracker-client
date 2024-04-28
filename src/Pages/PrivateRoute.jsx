import { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //   const navigate = useNavigate();

  console.log('from priv', user);

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
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;
