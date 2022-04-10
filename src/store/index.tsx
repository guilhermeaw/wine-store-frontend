import React from "react";

import { AuthProvider } from './Auth';
import { CartProvider } from "./Cart";

type AppProviderProps = {
  children: JSX.Element
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <CartProvider>
      {children}
    </CartProvider>
  </AuthProvider>
)
