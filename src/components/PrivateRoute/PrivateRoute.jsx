import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authorization/authorization-selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {!isLoggedIn && <Navigate to="/" replace />}
      {isLoggedIn && children}
    </>
  );
}
