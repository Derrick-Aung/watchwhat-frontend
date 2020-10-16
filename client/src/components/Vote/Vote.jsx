import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import constants from '../constants';
import { showSnackbar } from '../../redux/snackbar/snackbarActions';

const VoteDiv = styled.div`
  background-color: ${constants.SurfaceColorClosest};
  text-align: center;
  padding: 4px;
  border-radius: 0.5rem;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Vote = ({ style }) => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleVoteClick = (vote_type) => {
    if (!user) {
      dispatch(showSnackbar('Log in to vote'));
    }
  };

  return (
    <VoteDiv style={style}>
      <Typography
        component="h3"
        variant="h5"
        style={{ color: constants.primaryTextColorMuted }}
      >
        Vote
      </Typography>
      <RowDiv>
        <IconButton aria-label="upvote" onClick={() => handleVoteClick('up')}>
          <ThumbUpRoundedIcon />
        </IconButton>
        <Typography component="h3" variant="h6" color="secondary">
          33
        </Typography>
        <IconButton
          aria-label="downvote"
          onClick={() => handleVoteClick('down')}
        >
          <ThumbDownRoundedIcon />
        </IconButton>
      </RowDiv>
    </VoteDiv>
  );
};

export default Vote;
