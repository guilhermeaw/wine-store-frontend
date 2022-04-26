import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#953a44',
    },
    secondary: {
      main: '#F7F7F7',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#f7f7f7'
    }
  },
  typography: {
    fontFamily: "'Anek Tamil', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: '2rem'
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem'
    },
    button: {
      textTransform: 'none'
    }
  }
});

export default theme;
