export interface User {
  id: number
  name: string
  login: string
  role: 'admin' | 'user'
}
