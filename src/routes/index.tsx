import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import { LoginPage } from '../pages/login';
import { StorePage } from '../pages/store';
import { CartPage } from '../pages/cart';

export const Routes = () => (
  <BrowserRouter>
    <RouteList>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/store"
        element={
          <PrivateRoute>
            <StorePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
    </RouteList>
  </BrowserRouter>
)
