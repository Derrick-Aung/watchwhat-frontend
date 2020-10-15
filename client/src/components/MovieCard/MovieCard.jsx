import React from 'react';
import styled from 'styled-components';
import { TMDB_IMG_URL_500, DEFAULT_POSTER_PATH } from '../../config';
import {
  Card,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
  MoreVert,
  Typography,
  CardContent,
} from '@material-ui/core';
import constants from '../constants';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

const MovieCard = ({ id, title, poster_path, vote_average }) => {
  const poster_img = poster_path
    ? TMDB_IMG_URL_500 + poster_path
    : `${process.env.PUBLIC_URL}${DEFAULT_POSTER_PATH}`;

  return (
    <Card>
      <CardMedia title={{ title }}>
        <img src={poster_img} alt="" style={{ width: '100%' }} />
      </CardMedia>
      <StyledDiv>
        <StarRoundedIcon
          style={{ color: `${constants.goldenYellow}`, marginRight: '4px' }}
        />
        <Typography>{vote_average}</Typography>
      </StyledDiv>
    </Card>
  );
};

export default MovieCard;
