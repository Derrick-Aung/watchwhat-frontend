import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginCard from '../components/LoginCard/LoginCard';

const LoginPage = () => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.user.currentUser);

  if (currentUser) history.push('/');

  return <LoginCard />;
};

export default LoginPage;
