import {
  IconButton,
  SwipeableDrawer,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import constants from '../constants';
import styled from 'styled-components';
import { logout } from '../../redux/user/userActions';

const AppBarHeader = styled(AppBar)`
  background-color: #2b2b2b !important;
  color: #ffffff !important;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  min-height: 56px !important;
`;

const DrawerContent = styled.div`
  min-width: ${constants.drawerWidth};
  background-color: ${constants.defaultPrimarySurfaceColor} !important;
  display: flex;
  flex-direction: column;
`;
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [drawerIsOpen, setDrawerOpen] = useState(false);

  const drawerPages = [
    {
      key: 'dashboard',
      to: '/dashboard',
      label: 'Dashboard',
    },
  ];

  const LoginButton = () => (
    <Button
      style={{ marginLeft: 'auto' }}
      color="primary"
      variant="outlined"
      component={Link}
      to={'/login'}
    >
      Login
    </Button>
  );

  const LogoutButton = () => (
    <Button
      style={{ marginLeft: 'auto' }}
      color="primary"
      variant="outlined"
      component={Link}
      onClick={() => dispatch(logout())}
    >
      Logout
    </Button>
  );

  const AuthButton = user.currentUser ? LogoutButton : LoginButton;

  return (
    <AppBarHeader style={{ boxShadow: 'none' }}>
      <StyledToolbar>
        <IconButton
          edge="start"
          color="primary"
          onClick={() => setDrawerOpen(!drawerIsOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Button color="primary" component={Link} to={'/'}>
          WatchWhat
        </Button>
        <AuthButton></AuthButton>
      </StyledToolbar>
      <SwipeableDrawer
        open={drawerIsOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerContent></DrawerContent>
      </SwipeableDrawer>
    </AppBarHeader>
  );
};

export default Header;
