import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import { LoginPage } from '../pages/login';
import { StorePage } from '../pages/store';
import { CartPage } from '../pages/cart';
import { DashboardPage } from '../pages/dashboard';
import { NewProductPage } from '../pages/newProduct';

export const Routes = () => (
  <BrowserRouter>
    <RouteList>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
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
      <Route
        path="/dashboard"
        element={
          <PrivateRoute admin>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/new-product"
        element={
          <PrivateRoute admin>
            <NewProductPage />
          </PrivateRoute>
        }
      />
    </RouteList>
  </BrowserRouter>
)
