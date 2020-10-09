import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import RegisterCard from '../components/RegisterCard/RegisterCard';
import registerTypes from '../redux/register/registerTypes';

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const registered = useSelector((state) => state.register.success);

  if (currentUser) history.push('/');
  if (registered) {
    history.push('/login');
    dispatch({ type: registerTypes.SIGN_UP_RESET_SUCCESS });
  }

  return <RegisterCard />;
};

export default LoginPage;
