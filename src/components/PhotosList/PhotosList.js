import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import Photos from '../Photos/Photos';

import styles from './PhotosList.module.css';

const PhotosList = () => {
  const history = useHistory()

  const [state, setState] = useState({
    onlyFavorite: false
  });

  return (
    <div className={styles.box}>
      <div className={styles.topContainer}>
        <Button variant="contained" size="large" color="primary" onClick={() => {
          history.push('/new-photo')
        }} >
          Add new
        </Button>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.onlyFavorite}
              onChange={() => setState({ onlyFavorite: !state.onlyFavorite })}
              name="onlyFavorite"
              color="primary"
            />
          }
          label={<Typography className={styles.formControlLabel}>Show only favorite photos</Typography>}
        />
      </div>
      <main className={styles.PhotosList}>
        <Photos onlyFavorite={state.onlyFavorite} />
      </main>
    </div>
  );
};
export default PhotosList;
