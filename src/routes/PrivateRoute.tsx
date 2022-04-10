import { Navigate } from 'react-router-dom';

import { useAuth } from "../store/Auth";

type PrivateRouteProps = {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuth();
  return !!user ? children : <Navigate to="/login" />;
}
