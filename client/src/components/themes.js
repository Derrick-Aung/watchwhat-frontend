import { createMuiTheme } from '@material-ui/core/styles';
import constants from './constants';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: constants.accentColorPrimary,
    },
    secondary: {
      main: constants.accentColorSecondary,
    },
    type: 'dark',
  },
  typography: {
    fontFamily: `${constants.primaryFont}`,
  },
});
