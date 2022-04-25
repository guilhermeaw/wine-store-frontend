import { Button, Typography } from "@mui/material";

import { useAuth } from "../../store/Auth";
import { RouterLink } from "../RouterLink";

import * as S from './styles';

export const Header = () => {
  const { signOut, user } = useAuth();

  const handleClick = () => {
    signOut();
  }

  return (
    <S.Header>
      <S.HeaderContainer maxWidth="xl" sx={{ display: 'flex' }}>
        <Typography variant="h1" fontSize='1rem'>Wine Store</Typography>
        <nav>
          <RouterLink to='/'>
            <Button>Home</Button>
          </RouterLink>

          {user.role === 'admin' && (
            <RouterLink to='/dashboard'>
              <Button>Dashboard</Button>
            </RouterLink>
          )}
        </nav>
        <Button variant="outlined" onClick={handleClick}>Logout</Button>
      </S.HeaderContainer>
    </S.Header>
  )
}
