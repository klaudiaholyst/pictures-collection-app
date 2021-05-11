import React from 'react';
import { Link } from 'react-router-dom';

import { useFile } from '../../hooks/useFile';
import Photos from '../Photos/Photos';

import styles from './PhotosList.module.css';

const PhotosList = () => {
  const { files } = useFile()
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
