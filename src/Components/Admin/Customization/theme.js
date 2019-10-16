import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
export default createMuiTheme({
  palette: {
    primary: indigo,
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
