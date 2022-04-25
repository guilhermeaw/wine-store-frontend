import React, { useRef } from 'react';
import { Grid, Typography, TextField, Button, FormGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../store/Auth';

export const LoginPage = () => {
  const loginRef = useRef(null) as React.RefObject<HTMLInputElement>;
  const passwordRef = useRef(null) as React.RefObject<HTMLInputElement>;

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const login = loginRef?.current?.value;
    const password = passwordRef?.current?.value;

    if (!login || !password) {
      return;
    }

    await signIn({ login, password });
    navigate('/');
  }

  return (
      <Grid container style={{ height: '100vh' }}>
        <Grid item xs={6} sx={{ background: '#FF385C' }}>
          <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h2" color="#FFF" fontSize="4rem">Wine Store</Typography>
          </div>
        </Grid>

        <Grid sx={{ padding: '3rem', margin: 'auto' }} item xs={6}>
          <Typography variant="h1">Faça seu login</Typography>

          <form onSubmit={handleLogin}>
            <FormGroup>
              <TextField sx={{ margin: '1rem 0' }} inputRef={loginRef} id="login" name="login" label="Login" variant="outlined" required size='small' />
              <TextField sx={{ marginBottom: '1.5rem' }} inputRef={passwordRef} type="password" id="password" name="password" label="Senha" variant="outlined" required size="small" />
              <Button type="submit" variant="contained">Entrar</Button>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
  )
}
