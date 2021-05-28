import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext'

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

import styles from './Header.module.css';

const Header = () => {
  const history = useHistory()
  const [error, setError] = useState("")
  const { logout } = useAuth()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
      handleAlertOpen()
    }
  }
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
      <Divider />
      <MenuItem onClick={() => {
        handleLogout();
      }}>Log out</MenuItem>
    </Menu>
  );

  const [openAlert, setOpenAlert] = React.useState(false);

  const handleAlertOpen = () => {
    setOpenAlert(true);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

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
      {error && <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose}>
      <MuiAlert elevation={6} variant="filled" onClose={handleAlertClose} severity="error">
          Error! {error}
        </MuiAlert>
      </Snackbar>}
    </AppBar>
  );
};

export default Header;
