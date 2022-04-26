import { Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
        
        <Stack direction="row" spacing={2}>
          <Tooltip title="Carrinho">
            <IconButton>
              <RouterLink to="/cart">
                <ShoppingCartOutlinedIcon color="primary" />
              </RouterLink>
            </IconButton>
          </Tooltip>

          <Button variant="outlined" onClick={handleClick}>Logout</Button>
        </Stack>
      </S.HeaderContainer>
    </S.Header>
  )
}
