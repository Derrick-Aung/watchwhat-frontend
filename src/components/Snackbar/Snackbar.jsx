// code referenced from browntreelabs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar as MuiSnackBar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { clearSnackbar } from '../../redux/snackbar/snackbarActions';
import styled from 'styled-components';
import constants from '../constants';

const StyledAlert = styled(MuiAlert)`
  background-color: ${constants.SurfaceColorClosest} !important;
`;

const Snackbar = () => {
  const dispatch = useDispatch();
  const { message, open } = useSelector((state) => state.snackbar);

  const handleClose = () => {
    dispatch(clearSnackbar());
  };

  return (
    <MuiSnackBar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={4000}
      severity="warning"
      onClose={handleClose}
      aria-describedby="snackbar"
    >
      <StyledAlert onClose={handleClose} severity="error" elevation={6}>
        {message}
      </StyledAlert>
    </MuiSnackBar>
  );
};

export default Snackbar;
