import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useAuth } from "../../store/Auth";

import * as S from './styles';

export const Header = () => {
  const { signOut } = useAuth();

  const handleClick = () => {
    signOut();
  }

  return (
    <S.Header>
      <S.HeaderContainer maxWidth="xl" sx={{ display: 'flex' }}>
        <Typography variant="h1" fontSize='1rem'>Wine Store</Typography>
        <nav>
          <Link to='/store'>
            <Button>Home</Button>
          </Link>
        </nav>
        <Button variant="outlined" onClick={handleClick}>Logout</Button>
      </S.HeaderContainer>
    </S.Header>
  )
}
