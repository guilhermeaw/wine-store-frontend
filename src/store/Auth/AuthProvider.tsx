import React, { useCallback, useState } from 'react';

import { User } from '../../models/User';
import { api } from '../../services/api';
import { useLogin } from '../../services/mutations';
import { AuthContext } from './AuthContext';

type AuthProviderProps = {
  children: React.ReactNode
}

interface AuthState {
  token: string;
  user: User;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@WineStore:token');
    const user = localStorage.getItem('@WineStore:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const loginMutation = useLogin();

  const signIn = useCallback(async ({ login, password }) => {
    const { token, user } = await loginMutation.mutateAsync({ login, password });

    localStorage.setItem('@WineStore:token', token);
    localStorage.setItem('@WineStore:user', JSON.stringify(user));

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ token, user });
  }, [loginMutation]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@WineStore:token');
    localStorage.removeItem('@WineStore:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
