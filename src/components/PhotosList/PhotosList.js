import React from 'react';
import { Link } from 'react-router-dom';

import Photos from '../Photos/Photos';

import styles from './PhotosList.module.css';

const PhotosList = () => {
  return (
    <div>
      <Link
        to='/new-photo'
        style={{ textDecoration: 'none' }}
        className={styles.Button}
      >
        Add new
      </Link>

      <main className={styles.PhotosList}>
        <Photos />
      </main>
    </div>
  );
};
export default PhotosList;
