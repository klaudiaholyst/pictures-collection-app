import React from 'react';

import { Link } from 'react-router-dom';

import Article from './Article/Article';

import styles from './PicturesCollection.module.css';

const PicturesCollection = () => {
  return (
    <div>
      <Link
        to='/new-post'
        style={{ textDecoration: 'none' }}
        className={styles.Button}
      >
        Dodaj nowe
      </Link>
      <main className={styles.PicturesCollection}>
        <Article />
      </main>
    </div>
  );
};
export default PicturesCollection;
