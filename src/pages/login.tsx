import React, { useRef } from 'react';
import { Grid, Typography, TextField, Button, FormGroup } from '@mui/material';

import { useLogin } from '../services/mutations';

export const LoginPage = () => {
  const loginRef = useRef(null) as React.RefObject<HTMLInputElement>;
  const passwordRef = useRef(null) as React.RefObject<HTMLInputElement>;

  const loginMutation = useLogin();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const login = loginRef?.current?.value;
    const password = passwordRef?.current?.value;

    if (!login || !password) {
      return;
    }

    loginMutation.mutate({ login, password }, {
      onSuccess: ({ token, user }) => {console.log({ token, user })}
    });
  }

  return (
      <Grid container style={{ height: '100vh' }}>
        <Grid item xs={6} style={{ background: '#FF385C' }}>
        </Grid>

        <Grid item xs={6} padding='3rem' alignItems='center' justifyContent='center'>
          <Typography variant="h1" fontSize="2rem">Faça seu login</Typography>

          <form onSubmit={handleLogin}>
            <FormGroup>
              <TextField inputRef={loginRef} id="login" name="login" label="Login" variant="outlined" required size='small' />
              <TextField inputRef={passwordRef} type="password" id="password" name="password" label="Senha" variant="outlined" required size="small" />
              <Button type="submit" variant="contained">Entrar</Button>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
  )
}
