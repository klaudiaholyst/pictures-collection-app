import React from 'react';

import {Link} from 'react-router-dom';

import profile from '../../assets/svg/user-solid.svg';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1 className="Title">My photo album</h1>
      <Link to='/profile'><img src={profile} className="Profile" alt="profile" /></Link>
    </header>
  );
};

export default Header;
