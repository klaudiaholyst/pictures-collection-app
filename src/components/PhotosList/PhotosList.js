import React from 'react';

import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button'

import Photos from '../Photos/Photos';

import styles from './PhotosList.module.css';

const PhotosList = () => {
  const history = useHistory()
  return (
    <div className={styles.box}>
      <Button variant="contained" size="large" color="primary" onClick={() => {
        history.push('/new-photo')
      }} className={styles.Button} >
        Add new
      </Button>
      <main className={styles.PhotosList}>
        <Photos />
      </main>
    </div>
  );
};
export default PhotosList;
