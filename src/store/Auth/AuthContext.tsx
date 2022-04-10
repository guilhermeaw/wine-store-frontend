import { createContext } from "react";

import { User } from "../../models/User";

type SignInCredentials = {
  login: string;
  password: string;
}

export type AuthContextData =  {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);
