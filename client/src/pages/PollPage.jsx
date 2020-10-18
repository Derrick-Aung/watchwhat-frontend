import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import categories from '../utils/requestCategory';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../components/MovieList/MovieList';
import { fetchPolls } from '../redux/polls/pollsActions';
import Countdown from 'react-countdown';
import { Typography } from '@material-ui/core';

const PageContent = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2rem;
`;

const TimerComponent = ({ days, hours, minutes, seconds }) => {
  return (
    <Typography
      component="h1"
      variant="h4"
      color="primary"
      style={{ marginTop: '1rem', marginBottom: '1rem' }}
    >
      Poll - Expiring in {24 * days + hours}h {minutes}m {seconds}s
    </Typography>
  );
};

const PollPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const polls = useSelector((state) => state.polls.data);

  const [pollExpiry, setpollExpiry] = useState(null);

  useEffect(() => {
    dispatch(fetchPolls());
    const fetchPollExpiry = async () => {
      const url = `/api/poll/expiry`;
      const response = await axios(url, {
        method: 'GET',
      });
      setpollExpiry(response.data);
    };

    fetchPollExpiry();
  }, []);

  const CountDownComponent = () =>
    pollExpiry ? (
      <Countdown date={pollExpiry} renderer={TimerComponent} />
    ) : (
      <Typography
        component="h1"
        variant="h4"
        color="primary"
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        Loading Poll...
      </Typography>
    );

  return (
    <PageContent>
      <CountDownComponent />
      <MovieList
        movies={polls.map((poll) => ({
          ...poll.details,
          ww_votes: poll.upvoters.length - poll.downvoters.length,
        }))}
      />
    </PageContent>
  );
};

export default PollPage;
