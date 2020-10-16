import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../themes';
import styled from 'styled-components';
import constants from '../constants';
import GlobalStyle from './GlobalStyle';
import Header from '../Header/Header';
import categories from '../../utils/requestCategory';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import MovieListPage from '../../pages/MovieListPage';
import MovieDetailPage from '../../pages/MovieDetailPage';

const StyledDiv = styled.div`
background-image: url("/assets/dashboard-background.jpg")
  background-color: ${constants.defaultSecondarySurfaceColor} !important;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ContainerWithHeader = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={MovieListPage} />
      <Route
        exact
        path="/trending"
        render={(props) => (
          <MovieListPage {...props} category={categories.TRENDING} />
        )}
      />
      <Route
        exact
        path="/upcoming"
        render={(props) => (
          <MovieListPage {...props} category={categories.UPCOMING} />
        )}
      />
      <Route
        exact
        path="/search"
        render={(props) => (
          <MovieListPage {...props} category={categories.SEARCH} />
        )}
      />
      <Route exact path="/movie/:movieId" component={MovieDetailPage} />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledDiv>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route component={ContainerWithHeader} />
        </Switch>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default App;
