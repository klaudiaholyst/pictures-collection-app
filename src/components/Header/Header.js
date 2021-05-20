import React from 'react';

import { useHistory } from 'react-router-dom';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

import styles from './Header.module.css';

const Header = () => {
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='primary-search-account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => {
          handleMenuClose();
          history.push('/profile')
        }}>My profile</MenuItem>
      <MenuItem onClick={() => {
          handleMenuClose();
          history.push('/update-profile')
        }}>Update profile</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static">
      <Toolbar>
      <Typography className={styles.title} variant="h6" noWrap onClick={() => {
          history.push('/')
        }}>
           My photo album
          </Typography>
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls='primary-search-account-menu'
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
};

export default Header;
