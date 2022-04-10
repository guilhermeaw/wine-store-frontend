import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF385C',
    },
    secondary: {
      main: '#F7F7F7',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "'Anek Tamil', sans-serif",
    h1: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none'
    }
  }
});

export default theme;
