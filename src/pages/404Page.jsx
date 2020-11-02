import React from 'react';
import { Typography, Link as MuiLink } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const NotFoundPage = () => {
  return (
    <StyledDiv>
      <MuiLink underline="none" component={Link} to="/">
        <Typography variant="h5" color="secondary">
          Oops.. Could not find resource
          <br /> Click to go back to home
        </Typography>
      </MuiLink>
    </StyledDiv>
  );
};

export default NotFoundPage;
