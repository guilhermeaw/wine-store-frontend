import { useMutation } from "react-query"

import { User } from "../../models/User"
import { api } from "../api"

type AuthCredentials = {
  login: string
  password: string
}

type SessionValues = {
  token: string
  user: User
}

export const useLogin = () => {
  return useMutation(({ login, password }: AuthCredentials) => (
    api.post<SessionValues>('/session', { login, password }).then(response => response.data)
  ));
}
