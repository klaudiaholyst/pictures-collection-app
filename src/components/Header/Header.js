import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1 className="Title">My photo album</h1>
    </header>
  );
};

export default Header;
