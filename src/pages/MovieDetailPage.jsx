import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../redux/movie/movieActions';
import { fetchVote, clearVote } from '../redux/vote/voteActions';
import constants from '../components/constants';
import styled from 'styled-components';
import { TMDB_IMG_URL_OG } from '../config';
import HorizontalWrappper from '../components/MovieDetail/HorizontalWrapper/HorizontalWrappper';
import VerticalWrapper from '../components/MovieDetail/VerticalWrapper/VerticalWrapper';
import Detail from '../components/MovieDetail/Detail/Detail';
import Vote from '../components/Vote/Vote';

const MovieDetailPage = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();

  const movie = useSelector((state) => state.movie.data);

  useEffect(() => {
    dispatch(fetchMovie(movieId));
    dispatch(fetchVote(movieId));
    return () => {
      dispatch(clearVote());
    };
  }, []);

  return (
    <VerticalWrapper backdrop={`${TMDB_IMG_URL_OG}${movie.backdrop_path}`}>
      <Detail {...movie} />
      <Vote
        movieId={movieId}
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
        }}
      />
    </VerticalWrapper>
  );
};

export default MovieDetailPage;
