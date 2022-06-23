import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'rgba(255, 255, 255, 0.5)'
        },
      }
    },
  },
  palette: {
    primary: {
      main: '#CC7E11',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red[400],
    },
    background: {
      paper: 'rgba(255, 255, 255, 0.05)',
      default: 'rgb(26, 32, 39)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    action: {
      active: '#6B7280',
      focus: 'rgba(55, 65, 81, 0.12)',
      hover: '#FFF',
      selected: 'rgba(55, 65, 81, 0.08)',
      disabledBackground: 'rgba(255, 255, 255, 0.05)',
      disabled: 'rgba(255, 255, 255, 0.1)'
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
  },
});

export default theme;