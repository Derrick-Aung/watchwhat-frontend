import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../redux/movie/movieActions';
import constants from '../components/constants';
import styled from 'styled-components';
import { TMDB_IMG_URL_OG } from '../config';
import HorizontalWrappper from '../components/MovieDetail/HorizontalWrapper/HorizontalWrappper';
import Detail from '../components/MovieDetail/Detail/Detail';

const PageContent = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2rem;
`;

const MovieDetailPage = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();

  const movie = useSelector((state) => state.movie.data);

  useEffect(() => {
    dispatch(fetchMovie(movieId));
    return () => {};
  }, []);

  return (
    <HorizontalWrappper backdrop={`${TMDB_IMG_URL_OG}${movie.backdrop_path}`}>
      <Detail {...movie} />
    </HorizontalWrappper>
  );
};

export default MovieDetailPage;
