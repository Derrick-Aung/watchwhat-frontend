import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { fetchUser } from './redux/user/userActions';

//TODO delete this testing
import { fetchMovies } from './redux/movies/moviesActions';
store.dispatch(fetchMovies());

store.dispatch(fetchUser());

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
