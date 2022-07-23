import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authorization/authorization-selectors';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" replace /> : children;
}
