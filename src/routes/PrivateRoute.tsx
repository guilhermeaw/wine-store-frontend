import { Navigate } from 'react-router-dom';

import { useAuth } from "../store/Auth";

type PrivateRouteProps = {
  children: JSX.Element
  admin?: boolean
}

export const PrivateRoute = ({ children, admin = false }: PrivateRouteProps) => {
  const { user } = useAuth();
  
  if (!!user) {
    if (!!admin && user.role !== 'admin') {
      return <Navigate to="/" />;
    }

    return children;
  }

  return <Navigate to="/login" />;
}
