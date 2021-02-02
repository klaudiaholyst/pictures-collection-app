import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = () => {
  return (
    <div>
      <Link
        to={{
          pathname: '/new-post', // lub 'new-post'
          hash: 'submit',
          search: '?quick-submit=true',
        }}
        style={{ textDecoration: 'none' }}
      >
        <button className={styles.Button}>Dodaj nowe</button>
      </Link>
    </div>
  );
};
export default Button;
