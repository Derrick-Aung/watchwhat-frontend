import React, { useEffect } from 'react';
import styled from 'styled-components';
import categories from '../utils/requestCategory';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../components/MovieList/MovieList';
import { fetchPolls } from '../redux/polls/pollsActions';

const PageContent = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2rem;
`;

const MovieDetailPage = ({ category = categories.TRENDING }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const query = useSelector((state) => state.search.query);

  useEffect(() => {
    dispatch(fetchPolls());
  }, []);

  return (
    <PageContent>
      <h1>Poll - Expiring in 2h 33m</h1>
    </PageContent>
  );
};

export default MovieDetailPage;
