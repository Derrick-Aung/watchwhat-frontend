import { createGlobalStyle } from 'styled-components';
import constants from '../constants';

const GlobalStyle = createGlobalStyle([
  `
#root {
    color: ${constants.primaryTextColorLight} !important;
    height: 100%;
    background-color: ${constants.defaultSecondarySurfaceColor}!important;
    overflow-x: hidden;
    padding-top: 56px;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  
body {
    margin: 0;
    height: initial;
}
  
div {
  box-sizing: border-box;
}

  `,
]);

export default GlobalStyle;
