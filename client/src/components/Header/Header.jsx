import {
  List,
  ListItem,
  IconButton,
  SwipeableDrawer,
  AppBar,
  Toolbar,
  Typography,
  Button,
  ListItemText,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import constants from '../constants';
import styled from 'styled-components';
import { logout } from '../../redux/user/userActions';
import SearchBox from '../SearchBox/SearchBox';

const AppBarHeader = styled(AppBar)`
  background-color: ${constants.defaultPrimarySurfaceColor} !important;
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

const MarginRightFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 16px;
`;

const DrawerLink = styled(Link)`
  color: ${constants.primaryTextColorLight} !important;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const drawerMainPages = [
  {
    key: 'trending',
    to: '/trending',
    label: 'Trending',
  },
  {
    key: 'upcoming',
    to: '/upcoming',
    label: 'Upcoming',
  },
  {
    key: 'poll',
    to: '/poll',
    label: 'Poll',
  },
];

const genrePages = [
  {
    key: 'trending',
    to: '/trending',
    label: 'Trending',
  },
  {
    key: 'trending',
    to: '/trending',
    label: 'Trending',
  },
  {
    key: 'trending',
    to: '/trending',
    label: 'Trending',
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [drawerIsOpen, setDrawerOpen] = useState(false);

  const LoginButton = () => (
    <Button color="primary" variant="outlined" component={Link} to={'/login'}>
      Login
    </Button>
  );

  const LogoutButton = () => (
    <Button
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
        <Button color="primary" component={NavLink} to={'/'}>
          WatchWhat
        </Button>
        <MarginRightFlexDiv>
          <SearchBox />
        </MarginRightFlexDiv>
        <AuthButton></AuthButton>
      </StyledToolbar>
      <SwipeableDrawer
        open={drawerIsOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerContent>
          <List>
            {drawerMainPages.map((page) => (
              <DrawerLink key={`drawer__${page.key}`} to={page.to}>
                <ListItem button onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary={page.label} />
                </ListItem>
              </DrawerLink>
            ))}
          </List>
        </DrawerContent>
      </SwipeableDrawer>
    </AppBarHeader>
  );
};

export default Header;
