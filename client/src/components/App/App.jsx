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
import PollPage from '../../pages/PollPage';
import Snackbar from '../Snackbar/Snackbar';
import {
  retrieveTrending,
  retrieveUpcoming,
  retrieveSearch,
} from '../../services/movieServices';
import NotFoundPage from '../../pages/404Page';

const StyledDiv = styled.div`
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
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <MovieListPage
              {...props}
              category={categories.TRENDING}
              retriever={retrieveTrending}
            />
          )}
        />
        <Route
          exact
          path="/trending"
          render={(props) => (
            <MovieListPage
              {...props}
              category={categories.TRENDING}
              retriever={retrieveTrending}
            />
          )}
        />
        <Route
          exact
          path="/upcoming"
          render={(props) => (
            <MovieListPage
              {...props}
              category={categories.UPCOMING}
              retriever={retrieveUpcoming}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={(props) => (
            <MovieListPage
              {...props}
              category={categories.SEARCH}
              retriever={retrieveSearch}
            />
          )}
        />
        <Route exact path="/movie/:movieId" component={MovieDetailPage} />
        <Route exact path="/poll" component={PollPage} />
        <Route component={NotFoundPage} />
      </Switch>
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
      <Snackbar />
    </ThemeProvider>
  );
};

export default App;
