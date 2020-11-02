import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TMDB_IMG_URL_500, DEFAULT_POSTER_PATH } from '../../config';
import {
  Card,
  CardMedia,
  Typography,
  Link as MuiLink,
} from '@material-ui/core';
import constants from '../constants';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

const StyledImage = styled.img`
  transition: transform 1s, filter 0.5s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const MovieCard = ({ id, title, poster_path, vote_average, ww_votes }) => {
  const poster_img = poster_path
    ? TMDB_IMG_URL_500 + poster_path
    : `${process.env.PUBLIC_URL}${DEFAULT_POSTER_PATH}`;

  return (
    <MuiLink underline="none" component={Link} to={`/movie/${id}`}>
      <Card>
        <CardMedia title={{ title }} style={{ overflow: 'hidden' }}>
          <StyledImage src={poster_img} alt="" style={{ width: '100%' }} />
        </CardMedia>
        <StyledDiv>
          <StarRoundedIcon
            style={{ color: `${constants.goldenYellow}`, marginRight: '6px' }}
          />
          <Typography>{vote_average}</Typography>
          {ww_votes ? (
            <>
              <ThumbUpRoundedIcon
                style={{
                  color: `${constants.accentColorPrimary}`,
                  marginLeft: 'auto',
                  marginRight: '6px',
                }}
              />
              <Typography>{ww_votes}</Typography>
            </>
          ) : null}
        </StyledDiv>
      </Card>
    </MuiLink>
  );
};

export default MovieCard;
