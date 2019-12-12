import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/index';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
export default createMuiTheme({
  palette: {
    primary: {
      // light: será calculada com base em palette.primary.main,
      main: '#00FFFF'
      // dark: será calculada com base em palette.primary.main,
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: grey,
    error: red,
    type: 'dark',
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  overrides: {
    MuiButton: {
      // override the styles of all instances of this component
      root: {
        // Name of the rule
        color: 'white' // Some CSS
      }
    }
  }
});
