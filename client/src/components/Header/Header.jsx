import {
  List,
  ListItem,
  IconButton,
  SwipeableDrawer,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Divider,
  Box,
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
import { useMediaQuery } from 'react-responsive';
import genres from '../../constants/genres';

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
    label: 'trending',
  },
  {
    key: 'upcoming',
    to: '/upcoming',
    label: 'upcoming',
  },
  {
    key: 'poll',
    to: '/poll',
    label: 'poll',
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [drawerIsOpen, setDrawerOpen] = useState(false);

  const isPhone = useMediaQuery({
    query: '(max-width: 500px)',
  });

  const LoginButton = ({ style }) => (
    <Button
      color="primary"
      variant="outlined"
      component={Link}
      to={'/login'}
      style={style}
    >
      Login
    </Button>
  );

  const LogoutButton = ({ style }) => (
    <Button
      color="primary"
      variant="outlined"
      component={Link}
      onClick={() => dispatch(logout())}
      style={style}
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
        {isPhone || (
          <MarginRightFlexDiv>
            <SearchBox />
          </MarginRightFlexDiv>
        )}
        <AuthButton style={isPhone ? { marginLeft: 'auto' } : {}}></AuthButton>
      </StyledToolbar>
      <SwipeableDrawer
        open={drawerIsOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerContent>
          <Box px={2} py={1}>
            {isPhone && <SearchBox />}
          </Box>
          <Divider />
          <List>
            {drawerMainPages.map((page) => (
              <DrawerLink key={`drawer__${page.key}`} to={page.to}>
                <ListItem button onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary={page.label} />
                </ListItem>
              </DrawerLink>
            ))}
            <Divider />
            <ListItem>
              <Typography color="primary" variant="h5">
                Genres
              </Typography>
            </ListItem>
            {genres.map((genre) => (
              <DrawerLink
                key={`drawer__${genre.id}`}
                to={`/genre/${genre.name}`}
              >
                <ListItem button onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary={genre.name} />
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
